# Design system: Tiempo & Marca

Fuente de verdad visual: el diseño aprobado (Home, Running Team, Contacto, Términos, Privacidad).

## Dónde vive

- Tokens semánticos: `app/globals.css`
- Paleta, tipografía y escala: `tailwind.config.ts`
- Componentes de marca: `components/site`
- Componentes base (shadcn): `components/ui`
- Contenido tipado (horarios, planes, profes, FAQ, opciones del formulario): `content/`
- Navegación y datos de contacto: `lib/site-config.ts`

## Color

| Nombre | Hex | Uso |
|---|---|---|
| `bordo` | `#861F52` | Primario: botones, eyebrows, íconos, hero de la Home |
| `bordo-dark` | `#5E1239` | Hover de botones |
| `aubergine` | `#2B0F1F` | Fondos oscuros, footer |
| `aubergine-2` | `#3D1A2D` | Cards sobre oscuro |
| `cream` | `#FBF6F3` | Fondo |
| `pink` | `#F6DCE7` | Fondo de acento (Técnica de carrera) |
| `pink-strong` | `#F2A9C8` | Eyebrows sobre oscuro |
| `ink` | `#1E1418` | Texto |
| `muted-foreground` | `#5E4E56` | Texto secundario (en oscuro: `#E7CFDA`) |
| `line` | `#EADCE2` | Bordes |

Todos los pares de texto cumplen AA. `.dark` invierte los tokens solo dentro de la sección que la lleva:

```tsx
<Section tone="dark">…</Section>  // aubergine
<Section tone="pink">…</Section>
```

Dentro de `.dark`, el botón por defecto pasa a blanco con texto bordó, como en el diseño.

## Tipografía

- Display: Fraunces 800/900, siempre en mayúsculas en titulares (`font-display text-display` o `text-heading`).
- Texto: DM Sans 400/500/700.
- Los titulares usan `clamp()` y bajan de tamaño en mobile.

## Forma y espacio

- Botones pill, de 48 px (`default`) o 52 px (`lg`).
- Cards con radio de 24 a 28 px.
- Contenedor de 1240 px con 24 px de margen; secciones de 112 px en desktop y 64 px en mobile.
- Íconos de trazo de lucide-react.

## Componentes

| Componente | Uso |
|---|---|
| `SiteHeader`, `SiteFooter` | Layout compartido (marca la página activa con `aria-current`) |
| `Section`, `Container` | Estructura y tono |
| `SectionHeading` | Eyebrow, título y descripción (`stack`, `center`, `split`) |
| `SplitHero` | Hero con texto y foto (bordó u oscuro) |
| `CtaLink` | Link con forma de botón; los externos abren en otra pestaña |
| `ObjectiveCards`, `BeforeAfterCards`, `FeatureGrid` | Grillas de cards |
| `StepsList`, `StepsRow` | Pasos numerados |
| `ScheduleGrid`, `LocationCard` | Horarios y ubicación |
| `PlanCard` | Planes (`default`, `featured`, `soon`) |
| `CoachesList`, `FaqList`, `CtaBanner` | Profes, preguntas frecuentes y banner final |
| `LegalPage` | Hero, índice y artículo numerado |
