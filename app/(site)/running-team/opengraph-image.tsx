import { pages } from "@/content/pages";
import { ogImage } from "@/lib/og";

export const alt = "TyM Running Team: entrená en equipo con Tiempo & Marca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({ variant: "site", title: pages.runningTeam.title, description: pages.runningTeam.description });
}
