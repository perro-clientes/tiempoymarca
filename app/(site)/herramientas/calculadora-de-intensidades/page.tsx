import type { Metadata } from "next";
import { Container } from "@/components/site/section";
import { IntensityCalculator } from "@/components/tools/intensity-calculator";
import { ToolHeader } from "@/components/tools/tool-header";

// Versión de prueba para el equipo: no está en el menú, en /herramientas ni en el sitemap,
// y no se indexa. Para publicarla, sumarla a content/tools.ts y sacar el noindex.
export const metadata: Metadata = {
  title: "Calculadora de intensidades (prueba)",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function CalculadoraDeIntensidadesPage() {
  return (
    <>
      <ToolHeader
        title="Calculadora de intensidades"
        description="A partir de tu ritmo de VO2 máx (test de 2000 m) y un porcentaje de intensidad, calculá tu ritmo de trabajo y el tiempo de cada pasada."
      />
      <Container className="flex flex-col gap-6 pb-16 md:pb-28">
        <IntensityCalculator />
      </Container>
    </>
  );
}
