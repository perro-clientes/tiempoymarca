# Design system: Tiempo & Marca

Basado en el lenguaje visual de [Elite Fitness](https://elite-fitness.framer.website/), con el color y el isologo de la marca.

## Fuente de verdad

- Tokens de color: `app/globals.css`
- Tipografía, espaciado y mapeo a Tailwind: `tailwind.config.ts`
- Componentes base (shadcn): `components/ui`
- Componentes de marca: `components/site`
- Navegación y nombre del sitio: `lib/site-config.ts`

## Color

| Token | Claro | Sección oscura | Uso |
|---|---|---|---|
| `background` | `#FDFBF0` | `#000000` | Fondo de página o sección |
| `secondary`, `muted` | `#F5F3E8` | `#272727` | Superficie alternativa |
| `card` | `#FFFFFF` | `#272727` | Tarjetas |
| `cta` | `#861E53` | `#861E53` | Botón principal; blanco sobre fondos de marca |
| `primary` | `#861E53` | blanco | Badges, checkboxes y links de shadcn |
| `brand` | `#861E53` | `#861E53` | Fondos de marca y detalles |
| `brand-text` | `#861E53` | rosa claro | Texto en color de marca |

- Usá `text-brand-text` para texto de marca: `#861E53` no se lee sobre negro.
- No uses colores fijos en los componentes; usá tokens.

## Secciones oscuras

El sitio es siempre claro (`forcedTheme="light"`). La clase `.dark` invierte los tokens solo dentro del elemento que la tiene, y los componentes se adaptan solos:

```tsx
<Section tone="dark">
  <PlanCard {...plan} />
</Section>
```

Tonos de `Section`: `default`, `muted`, `dark`, `brand`.

## Tipografía

Inter Tight, por `next/font`. Los títulos grandes van en mayúsculas.

| Clase | Tamaño | Uso |
|---|---|---|
| `text-display uppercase` | 48 a 88 px, bold | Título del hero |
| `text-heading uppercase` | 32 a 48 px, medium | Título de sección |
| `text-title` | 24 a 32 px, medium | Título de tarjeta |
| `text-subtitle` | 20 px, medium | Subtítulo |
| `text-base`, `text-sm` | 16 y 14 px | Texto y detalles |

## Forma y espacio

- Radios: `rounded-lg` (8 px) en botones, inputs e imágenes; `rounded-2xl` (16 px) en tarjetas; `rounded-sm` (4 px) en íconos; `rounded-full` en pills.
- Sin sombras ni bordes en tarjetas: las separa el contraste de superficie.
- Secciones: `py-16 md:py-section` (64 y 100 px), ya incluido en `Section`.
- Ancho: `Container`, máximo 1376 px, con margen de 16 y 32 px.

## Componentes de marca

| Componente | Uso |
|---|---|
| `Section`, `Container` | Estructura y tono de cada bloque |
| `SectionHeading` | Etiqueta, título y descripción |
| `Eyebrow` | Pill blanca con punto de marca |
| `Hero` | Portada; fondo de marca, o foto si recibe `image` |
| `PlanCard` | Plan con características, CTA, y precio e imagen opcionales |
| `CheckList` | Lista con checks de marca |
| `CtaLink` | Link con forma de botón y flecha |
| `FaqList` | Preguntas frecuentes |
| `SiteHeader` | Navegación flotante; las páginas sin `Hero` necesitan espacio arriba |
| `SiteFooter` | Pie de página |
| `Logo` | Isologo |

## Botones

- `default`: acción principal, en color de marca. Sobre `Section tone="brand"` o un `Hero` sin foto pasa solo a blanco.
- `outline`, `secondary`, `ghost`, `link`: acciones secundarias.
- Tamaños: `lg` (48 px) en el sitio, `default` (40 px) en la plataforma.
