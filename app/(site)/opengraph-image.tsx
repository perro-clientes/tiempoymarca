import { pages } from "@/content/pages";
import { ogImage } from "@/lib/og";

export const alt = "Tiempo & Marca: entrenamiento de running en Lomas de Zamora";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({ variant: "site", title: "Corré mejor. Corré en equipo.", description: pages.home.description });
}
