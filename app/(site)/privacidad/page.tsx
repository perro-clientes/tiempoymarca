import { LegalPage } from "@/components/site/legal-page";
import { privacyIntro, privacySections, privacyUpdatedAt } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Política de privacidad",
  description: privacyIntro,
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <LegalPage
      tone="dark"
      title="Política de privacidad"
      subtitle={<>Datos que nos enviás por el sitio · Última actualización: {privacyUpdatedAt}</>}
      intro={privacyIntro}
      sections={privacySections}
    />
  );
}
