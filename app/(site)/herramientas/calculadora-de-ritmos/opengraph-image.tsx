import { paceCalculatorDescription } from "@/content/tools";
import { ogImage } from "@/lib/og";

export const alt = "Calculadora de ritmos de Tiempo & Marca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({ variant: "tools", title: "Calculadora de ritmos", description: paceCalculatorDescription });
}
