import { privacyIntro } from "@/content/legal";
import { ogImage } from "@/lib/og";

export const alt = "Política de privacidad de Tiempo & Marca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({ variant: "site", title: "Política de privacidad", description: privacyIntro });
}
