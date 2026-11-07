"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { interestOptions, levelOptions } from "@/content/leads";
import { fieldErrorsFrom, HONEYPOT_FIELD, leadFormValues, leadSchema, type FieldErrors, type LeadField } from "@/lib/leads/schema";
import { cn } from "@/lib/utils";
import { submitLead, type LeadFormState } from "./actions";

const fieldClass =
  "w-full rounded-xl border border-input bg-cream px-4 text-base text-ink placeholder:text-muted-foreground focus-visible:border-bordo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-destructive";

const fieldOrder: LeadField[] = ["nombre", "whatsapp", "email", "interes", "nivel", "objetivo", "acepta_terminos"];

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm font-medium text-destructive">
      {message}
    </p>
  );
}

export function ContactForm() {
  // Cambiar la key vuelve a montar el formulario vacío ("Enviar otra consulta").
  const [formKey, setFormKey] = useState(0);
  return <LeadForm key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}

function LeadForm({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState<LeadFormState, FormData>(submitLead, { status: "idle" });
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const errors: FieldErrors = {
    ...(state.status === "error" ? state.fieldErrors : undefined),
    ...clientErrors,
  };

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
  }, [state.status]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const parsed = leadSchema.safeParse(leadFormValues(formData));
    if (!parsed.success) {
      const found = fieldErrorsFrom(parsed.error);
      setClientErrors(found);
      const first = fieldOrder.find((field) => found[field]);
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setClientErrors({});
    startTransition(() => formAction(formData));
  }

  const describedBy = (field: LeadField, extra?: string) =>
    [errors[field] ? `${field}-error` : null, extra].filter(Boolean).join(" ") || undefined;

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4" role="status">
        <h2 ref={successRef} tabIndex={-1} className="font-display text-title font-extrabold focus:outline-none">
          ¡Gracias! Ya recibimos tu mensaje
        </h2>
        <p className="text-muted-foreground">Te vamos a contactar en las próximas 48 h hábiles.</p>
        <Button type="button" variant="outline" size="lg" onClick={onReset}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <h2 className="font-display text-title font-extrabold">Escribinos</h2>

      {state.status === "error" && (
        <p role="alert" className="rounded-xl border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">
          {state.message}
        </p>
      )}

      {/* Campo trampa para bots: oculto para personas y lectores de pantalla. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Empresa</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="nombre" className="font-bold">
            Nombre y apellido
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={describedBy("nombre")}
            className={cn(fieldClass, "h-12")}
          />
          <FieldError id="nombre-error" message={errors.nombre} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="whatsapp" className="font-bold">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="11 1234-5678"
            required
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={describedBy("whatsapp")}
            className={cn(fieldClass, "h-12")}
          />
          <FieldError id="whatsapp-error" message={errors.whatsapp} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy("email")}
          className={cn(fieldClass, "h-12")}
        />
        <FieldError id="email-error" message={errors.email} />
      </div>

      <fieldset className="flex flex-col gap-3" aria-describedby={describedBy("interes")}>
        <legend className="mb-3 font-bold">¿Qué te interesa?</legend>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((option, i) => (
            <label key={option.value} className="cursor-pointer">
              <input
                type="radio"
                name="interes"
                value={option.value}
                defaultChecked={i === 0}
                className="peer sr-only"
              />
              <span className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-input bg-white px-5 font-medium text-bordo transition-colors peer-checked:border-bordo peer-checked:bg-bordo peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2">
                {option.label}
              </span>
            </label>
          ))}
        </div>
        <FieldError id="interes-error" message={errors.interes} />
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="nivel" className="font-bold">
          Tu experiencia corriendo
        </label>
        <div className="relative">
          <select
            id="nivel"
            name="nivel"
            defaultValue={levelOptions[0].value}
            aria-invalid={Boolean(errors.nivel)}
            aria-describedby={describedBy("nivel")}
            className={cn(fieldClass, "h-12 appearance-none pr-10")}
          >
            {levelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </div>
        <FieldError id="nivel-error" message={errors.nivel} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="objetivo" className="font-bold">
          Contanos tu objetivo (opcional)
        </label>
        <textarea
          id="objetivo"
          name="objetivo"
          rows={4}
          placeholder="Ej.: quiero correr mis primeros 10K en marzo"
          aria-invalid={Boolean(errors.objetivo)}
          aria-describedby={describedBy("objetivo")}
          className={cn(fieldClass, "min-h-[120px] py-3")}
        />
        <FieldError id="objetivo-error" message={errors.objetivo} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <input
            id="acepta_terminos"
            name="acepta_terminos"
            type="checkbox"
            required
            aria-invalid={Boolean(errors.acepta_terminos)}
            aria-describedby={describedBy("acepta_terminos")}
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded border-input accent-bordo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <label htmlFor="acepta_terminos" className="text-sm text-muted-foreground">
            Acepto los{" "}
            <Link href="/terminos" className="text-bordo underline underline-offset-2">
              Términos y condiciones
            </Link>{" "}
            y la{" "}
            <Link href="/privacidad" className="text-bordo underline underline-offset-2">
              Política de privacidad
            </Link>
            .
          </label>
        </div>
        <FieldError id="acepta_terminos-error" message={errors.acepta_terminos} />
      </div>

      <Button type="submit" size="lg" disabled={pending} className="w-full">
        {pending ? (
          <>
            <Loader2 aria-hidden className="animate-spin" />
            Enviando…
          </>
        ) : (
          "Enviar consulta"
        )}
      </Button>
    </form>
  );
}
