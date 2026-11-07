import { z } from "zod";
import { interestOptions, levelOptions } from "@/content/leads";
import { normalizeArgentineMobile } from "./whatsapp";

const interestValues = interestOptions.map((o) => o.value) as [string, ...string[]];
const levelValues = levelOptions.map((o) => o.value) as [string, ...string[]];

// Se usa igual en el cliente y en el servidor.
export const leadSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre y apellido.").max(120, "Usá menos de 120 caracteres."),
  whatsapp: z
    .string()
    .trim()
    .min(1, "Ingresá tu WhatsApp.")
    .refine((value) => normalizeArgentineMobile(value).length === 10, {
      message: "Ingresá el número con código de área, por ejemplo 11 1234-5678.",
    }),
  email: z.string().trim().min(1, "Ingresá tu email.").pipe(z.email("Revisá el email.")),
  interes: z.enum(interestValues, { message: "Elegí qué te interesa." }),
  nivel: z.enum(levelValues, { message: "Elegí tu experiencia corriendo." }),
  objetivo: z
    .string()
    .trim()
    .max(1000, "Usá menos de 1000 caracteres.")
    .optional()
    .transform((value) => value || undefined),
  acepta_terminos: z.literal(true, {
    message: "Para enviar la consulta tenés que aceptar los Términos y la Política de privacidad.",
  }),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type LeadField = keyof LeadInput;
export type FieldErrors = Partial<Record<LeadField, string>>;

/** Convierte el FormData del formulario en el objeto que valida el esquema. */
export function leadFormValues(formData: FormData) {
  const text = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value : "";
  };
  return {
    nombre: text("nombre"),
    whatsapp: text("whatsapp"),
    email: text("email"),
    interes: text("interes"),
    nivel: text("nivel"),
    objetivo: text("objetivo"),
    acepta_terminos: formData.get("acepta_terminos") === "on",
  };
}

export function fieldErrorsFrom(error: z.ZodError): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as LeadField | undefined;
    if (field && !errors[field]) errors[field] = issue.message;
  }
  return errors;
}

/** Nombre del campo trampa para bots. Las personas no lo ven ni lo completan. */
export const HONEYPOT_FIELD = "empresa";
