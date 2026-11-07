/**
 * URL pública del sitio, sin barra final. En producción sale de NEXT_PUBLIC_SITE_URL;
 * si falta, usa el dominio de producción que expone Vercel y, en local, localhost.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const absoluteUrl = (path = "/") => `${siteUrl}${path}`;
