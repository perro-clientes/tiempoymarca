import { CtaBanner } from "@/components/site/cta-banner";
import { Container } from "@/components/site/section";
import { PaceCalculator } from "@/components/tools/pace-calculator";
import { ToolHeader } from "@/components/tools/tool-header";
import { paceCalculatorDescription as description, SHOW_PACE_ESTIMATES } from "@/content/tools";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Calculadora de ritmos para running",
  description,
  path: "/herramientas/calculadora-de-ritmos",
});

export default function CalculadoraDeRitmosPage() {
  return (
    <>
      <ToolHeader title="Calculadora de ritmos" description={description} />
      <Container className="flex flex-col gap-6 pb-16 md:pb-28">
        <PaceCalculator showEstimates={SHOW_PACE_ESTIMATES} />
        <p className="max-w-3xl text-sm text-muted-foreground">
          {SHOW_PACE_ESTIMATES
            ? "Los resultados son estimaciones. Las marcas en otras distancias se calculan con la fórmula de Riegel y suponen un entrenamiento acorde a cada distancia; las calorías, con un promedio de 1 kcal por kilo por kilómetro. Antes de empezar a entrenar o de subir la intensidad, hacete un chequeo médico."
            : "Antes de empezar a entrenar o de subir la intensidad, hacete un chequeo médico."}
        </p>
      </Container>
      <CtaBanner />
    </>
  );
}
