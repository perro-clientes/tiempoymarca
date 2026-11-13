# TODO: datos pendientes del cliente

Todo lo que está entre [CORCHETES] se ve tal cual en el sitio hasta que se complete.

## Placeholders visibles

| Placeholder | Dónde aparece | Archivo |
|---|---|---|
| `[PRECIO]` del plan autoguiado | Running Team › Planes | `content/plans.ts` |
| `[FECHA]` de última actualización | Términos y Privacidad | `content/legal.tsx` |
| `[DOMINIO]` | Términos › 1. Alcance | `content/legal.tsx` |
| `[RAZÓN SOCIAL O NOMBRE DEL TITULAR]`, `[CUIT]`, `[DOMICILIO LEGAL]` | Términos › 2 y Privacidad › 1 | `content/legal.tsx` |
| `[X]` meses de conservación de datos | Privacidad › 6 | `content/legal.tsx` |
| `[INDICAR HERRAMIENTA, si se usa]` | Privacidad › 9. Cookies | `content/legal.tsx` |

## A confirmar con el cliente

- **Privacidad › 8. Seguridad:** dice que el acceso usa "doble factor de autenticación". Hoy el login de staff no tiene 2FA: activarlo en Supabase o ajustar el texto.
- **Privacidad › 9. Cookies:** el sitio ya usa Vercel Web Analytics y Speed Insights (no usan cookies). Conviene nombrarlas en lugar del placeholder.
- **"Cómo llegar" y "Abrir en Google Maps":** apuntan a una búsqueda en Google Maps de la pista. Si tienen el link exacto del lugar, reemplazarlo en `content/schedule.ts`.
- **Instagram de cursos:** se asumió `https://www.instagram.com/cursostiempoymarca/` a partir del usuario @cursostiempoymarca.
- **"Avisame cuando salga":** lleva a /contacto. Si quieren que el formulario venga con el interés preseleccionado, es un cambio chico.
- **Textos de interfaz que no estaban en el diseño:** mensajes de validación del formulario, mensaje de error ("No pudimos enviar tu consulta…"), límite de envíos y la segunda línea del mensaje de éxito ("Te vamos a contactar en las próximas 48 h hábiles.", tomada del email de confirmación). Revisarlos.
- **Logo:** `public/images/logo-bordo.png` y `logo-white.png` se generaron a partir de `public/brand/brand-logo.png`. Pedir el wordmark oficial en SVG y reemplazarlos.
- **Fotos:** se usaron las de `public/others`, optimizadas en `public/images`. Confirmar permiso de uso de las personas que aparecen y del evento (Expo, logos de terceros).

- **Calculadora de ritmos:** los bloques "Tu marca en otras distancias" y "Calorías" están ocultos hasta confirmar los datos. Para mostrarlos, poner `SHOW_PACE_ESTIMATES = true` en `content/tools.ts`.
- **Herramientas:** los textos de /herramientas y de la calculadora de ritmos (títulos, descripciones, ayudas y el aviso de salud) no venían de un diseño aprobado. Revisarlos. Para sumar otra herramienta: agregarla en `content/tools.ts` y crear su página en `app/(site)/herramientas/<slug>`.

## Configuración pendiente

- **Vercel:** cargar `RESEND_API_KEY`, `RESEND_FROM_EMAIL` y `NEXT_PUBLIC_SITE_URL` en las variables del proyecto (en local ya están).
- **URL canónica:** `tiempoymarca.ar` redirige a `www.tiempoymarca.ar`. Usar `NEXT_PUBLIC_SITE_URL=https://www.tiempoymarca.ar` o hacer principal el dominio sin `www` en Vercel.
- **Repo:** `public/others` tiene los originales (hasta 14 MB por foto). Ya no se usan: decidir si se borran.
