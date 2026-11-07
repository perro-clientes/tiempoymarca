# TODO: datos pendientes del cliente

Todo lo que está entre [CORCHETES] se ve tal cual en el sitio hasta que se complete.

## Placeholders visibles

| Placeholder | Dónde aparece | Archivo |
|---|---|---|
| `[Texto “Quiénes somos” del equipo — 300 a 400 caracteres: …]` | Home › Los profes | `content/coaches.ts` |
| `[Bio breve: formación y experiencia — hasta 180 caracteres]` (×3) | Home › Los profes | `content/coaches.ts` |
| `[Apellido]` de Marcelo | Home › Los profes | `content/coaches.ts` |
| `[PRECIO]` del plan autoguiado | Running Team › Planes | `content/plans.ts` |
| `[RESPUESTA]` (×7) | Home › FAQ | `content/faqs.ts` |
| `[RESPUESTA]` (×4) | Running Team › FAQ | `content/faqs.ts` |
| `[FECHA]` de última actualización | Términos y Privacidad | `content/legal.tsx` |
| `[DOMINIO]` | Términos › 1. Alcance | `content/legal.tsx` |
| `[RAZÓN SOCIAL O NOMBRE DEL TITULAR]`, `[CUIT]`, `[DOMICILIO LEGAL]` | Términos › 2 y Privacidad › 1 | `content/legal.tsx` |
| `[X]` meses de conservación de datos | Privacidad › 6 | `content/legal.tsx` |
| `[INDICAR HERRAMIENTA, si se usa]` | Privacidad › 9. Cookies | `content/legal.tsx` |

## A confirmar con el cliente

- **Apellido de Marcelo:** el diseño dice "Marcelo Acosta" (igual que Florencia); el brief pide dejarlo como `[Apellido]`.
- **Respuestas de las FAQ:** en el export las preguntas están cerradas y no se ven las respuestas.
- **Privacidad › 8. Seguridad:** dice que el acceso usa "doble factor de autenticación". Hoy el login de staff no tiene 2FA: activarlo en Supabase o ajustar el texto.
- **Privacidad › 9. Cookies:** el sitio ya usa Vercel Web Analytics y Speed Insights (no usan cookies). Conviene nombrarlas en lugar del placeholder.
- **"Cómo llegar" y "Abrir en Google Maps":** apuntan a una búsqueda en Google Maps de la pista. Si tienen el link exacto del lugar, reemplazarlo en `content/schedule.ts`.
- **Instagram de cursos:** se asumió `https://www.instagram.com/cursostiempoymarca/` a partir del usuario @cursostiempoymarca.
- **"Avisame cuando salga" y "Quiero info del curso":** llevan a /contacto. Si quieren que el formulario venga con el interés preseleccionado, es un cambio chico.
- **Textos de interfaz que no estaban en el diseño:** mensajes de validación del formulario, mensaje de error ("No pudimos enviar tu consulta…"), límite de envíos y la segunda línea del mensaje de éxito ("Te vamos a contactar en las próximas 48 h hábiles.", tomada del email de confirmación). Revisarlos.
- **Logo:** `public/images/logo-bordo.png` y `logo-white.png` se generaron a partir de `public/brand/brand-logo.png`. Pedir el wordmark oficial en SVG y reemplazarlos.
- **Fotos:** se usaron las de `public/others`, optimizadas en `public/images`. Confirmar permiso de uso de las personas que aparecen y del evento (Expo, logos de terceros).

## Configuración pendiente

- **Resend:** `RESEND_API_KEY` en `.env.local` todavía tiene el valor de ejemplo. Cargar la key real, verificar el dominio en Resend y completar `RESEND_FROM_EMAIL` (local y Vercel).
- **URL del sitio:** completar `NEXT_PUBLIC_SITE_URL` con el dominio de producción (local y Vercel).
- **Base de datos:** aplicar `supabase/migrations/20261106120000_create_leads.sql`.
- **Repo:** `public/others` tiene los originales (hasta 14 MB por foto). Ya no se usan: decidir si se borran antes de commitear.
