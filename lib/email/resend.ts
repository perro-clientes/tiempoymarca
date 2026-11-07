import { Resend } from "resend";

/**
 * Cliente de Resend del proyecto. Devuelve null si falta la configuración,
 * para que el formulario siga funcionando aunque el email no salga.
 */
export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("[email] Falta RESEND_API_KEY o RESEND_FROM_EMAIL: no se envían emails.");
    return null;
  }
  return { client: new Resend(apiKey), from };
}
