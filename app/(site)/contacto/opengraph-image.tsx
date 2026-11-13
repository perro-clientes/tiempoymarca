import { pages } from "@/content/pages";
import { ogImage } from "@/lib/og";

export const alt = "Contacto de Tiempo & Marca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({ variant: "site", title: "Probá una clase", description: pages.contacto.description });
}
