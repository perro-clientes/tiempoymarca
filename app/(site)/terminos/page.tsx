import { LegalPage } from "@/components/site/legal-page";
import { termsIntro, termsSections, termsUpdatedAt } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Términos y condiciones",
  description: termsIntro,
  path: "/terminos",
});

export default function TerminosPage() {
  return (
    <LegalPage
      tone="brand"
      title="Términos y condiciones"
      subtitle={<>Uso del sitio y de sus formularios · Última actualización: {termsUpdatedAt}</>}
      intro={termsIntro}
      sections={termsSections}
    />
  );
}
