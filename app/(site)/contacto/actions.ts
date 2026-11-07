"use server";

import { headers } from "next/headers";
import { after } from "next/server";
import { sendLeadEmails } from "@/lib/email/lead-emails";
import { fieldErrorsFrom, HONEYPOT_FIELD, leadFormValues, leadSchema, type FieldErrors } from "@/lib/leads/schema";
import { isRateLimited } from "@/lib/leads/rate-limit";
import { createClient } from "@/lib/supabase/server";

export type LeadFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: FieldErrors };

const genericError = "No pudimos enviar tu consulta. Probá de nuevo en unos minutos o escribinos por WhatsApp.";

export async function submitLead(_prev: LeadFormState, formData: FormData): Promise<LeadFormState> {
  // Honeypot: si un bot completó el campo oculto, respondemos como si nada para no darle pistas.
  const trap = formData.get(HONEYPOT_FIELD);
  if (typeof trap === "string" && trap.trim() !== "") return { status: "success" };

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "desconocida";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Recibimos varias consultas seguidas desde tu conexión. Probá de nuevo en unos minutos.",
    };
  }

  const parsed = leadSchema.safeParse(leadFormValues(formData));
  if (!parsed.success) {
    return { status: "error", message: "Revisá los campos marcados.", fieldErrors: fieldErrorsFrom(parsed.error) };
  }
  const lead = parsed.data;

  const supabase = await createClient();
  const { error } = await supabase.from("leads").insert({
    nombre: lead.nombre,
    whatsapp: lead.whatsapp,
    email: lead.email,
    interes: lead.interes,
    nivel: lead.nivel,
    objetivo: lead.objetivo ?? null,
    acepta_terminos: lead.acepta_terminos,
  });
  if (error) {
    console.error("[leads] No se pudo guardar el lead:", error.message);
    return { status: "error", message: genericError };
  }

  // Los emails salen después de responder: si fallan, el lead ya quedó guardado.
  after(() => sendLeadEmails(lead));

  return { status: "success" };
}
