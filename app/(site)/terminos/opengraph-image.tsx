import { termsIntro } from "@/content/legal";
import { ogImage } from "@/lib/og";

export const alt = "Términos y condiciones de Tiempo & Marca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({ variant: "site", title: "Términos y condiciones", description: termsIntro });
}
