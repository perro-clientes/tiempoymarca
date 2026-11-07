import { interestLabel, levelLabel } from "@/content/leads";
import { schedule, trainingLocation } from "@/content/schedule";
import type { LeadInput } from "@/lib/leads/schema";
import { whatsappLink } from "@/lib/leads/whatsapp";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/site-url";
import { getResend } from "./resend";

const BORDO = "#861F52";
const INK = "#1E1418";
const MUTED = "#5E4E56";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const layout = (content: string) => `<!doctype html>
<html lang="es"><body style="margin:0;background:#FBF6F3;font-family:Arial,Helvetica,sans-serif;color:${INK}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FBF6F3;padding:24px 12px">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:20px;overflow:hidden">
<tr><td style="background:${BORDO};padding:28px 32px">
<img src="${absoluteUrl("/images/logo-white.png")}" width="140" alt="${escapeHtml(siteConfig.name)}" style="display:block;border:0">
</td></tr>
<tr><td style="padding:32px;font-size:15px;line-height:1.6">${content}</td></tr>
</table>
</td></tr></table>
</body></html>`;

const button = (href: string, label: string) =>
  `<a href="${href}" style="display:inline-block;background:${BORDO};color:#ffffff;text-decoration:none;font-weight:bold;padding:14px 24px;border-radius:999px">${escapeHtml(label)}</a>`;

function internalEmail(lead: LeadInput) {
  const interest = interestLabel(lead.interes);
  const rows: [string, string][] = [
    ["Nombre", lead.nombre],
    ["WhatsApp", lead.whatsapp],
    ["Email", lead.email],
    ["Interés", interest],
    ["Experiencia", levelLabel(lead.nivel)],
    ["Objetivo", lead.objetivo ?? "—"],
  ];
  const table = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px 8px 0;color:${MUTED};vertical-align:top;white-space:nowrap">${label}</td><td style="padding:8px 0;font-weight:bold">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  const html = layout(`
<h1 style="margin:0 0 16px;font-size:22px">Nueva consulta web</h1>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:24px">${table}</table>
${button(whatsappLink(lead.whatsapp), "Escribirle por WhatsApp")}
<p style="margin:16px 0 0;color:${MUTED};font-size:13px">Respondé este email para escribirle directo a ${escapeHtml(lead.email)}.</p>`);
  const text = `Nueva consulta web\n\n${rows.map(([l, v]) => `${l}: ${v}`).join("\n")}\n\nWhatsApp: ${whatsappLink(lead.whatsapp)}`;
  return { subject: `Nueva consulta web — ${interest} — ${lead.nombre}`, html, text };
}

function confirmationEmail(lead: LeadInput) {
  const firstName = lead.nombre.split(/\s+/)[0];
  const scheduleRows = schedule
    .map((slot) => `<li style="margin:0 0 6px"><strong>${escapeHtml(slot.daysLabel)}</strong> · ${slot.time} · ${escapeHtml(slot.coachesLabel)}</li>`)
    .join("");
  const html = layout(`
<p style="margin:0 0 8px">Hola, ${escapeHtml(firstName)}:</p>
<h1 style="margin:0 0 12px;font-size:22px;color:${BORDO}">¡Gracias por escribirnos!</h1>
<p style="margin:0 0 24px">Te vamos a contactar en las próximas 48 h hábiles.</p>
<h2 style="margin:0 0 8px;font-size:16px">Días y horarios</h2>
<ul style="margin:0 0 8px;padding-left:18px">${scheduleRows}</ul>
<p style="margin:0 0 24px;color:${MUTED}">${escapeHtml(trainingLocation.venue)} del ${escapeHtml(trainingLocation.name)} · ${escapeHtml(trainingLocation.address)}</p>
${button(siteConfig.contact.whatsapp.url, "Escribinos por WhatsApp")}`);
  const text = `¡Gracias por escribirnos! Te vamos a contactar en las próximas 48 h hábiles.\n\nDías y horarios:\n${schedule
    .map((s) => `${s.daysLabel} · ${s.time} · ${s.coachesLabel}`)
    .join("\n")}\n\nWhatsApp: ${siteConfig.contact.whatsapp.url}`;
  return { subject: `¡Gracias por escribirnos! — ${siteConfig.name}`, html, text };
}

/** Manda la notificación interna y la confirmación. Nunca lanza: solo loguea los errores. */
export async function sendLeadEmails(lead: LeadInput) {
  const resend = getResend();
  if (!resend) return;
  const internal = internalEmail(lead);
  const confirmation = confirmationEmail(lead);
  const results = await Promise.allSettled([
    resend.client.emails.send({
      from: resend.from,
      to: siteConfig.contact.email,
      replyTo: lead.email,
      ...internal,
    }),
    resend.client.emails.send({
      from: resend.from,
      to: lead.email,
      replyTo: siteConfig.contact.email,
      ...confirmation,
    }),
  ]);
  results.forEach((result, i) => {
    const kind = i === 0 ? "notificación interna" : "confirmación al lead";
    if (result.status === "rejected") console.error(`[email] Falló la ${kind}:`, result.reason);
    else if (result.value.error) console.error(`[email] Resend rechazó la ${kind}:`, result.value.error);
  });
}
