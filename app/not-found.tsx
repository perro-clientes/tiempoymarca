import type { Metadata } from "next";
import { CtaLink } from "@/components/site/cta-link";
import { Eyebrow } from "@/components/site/eyebrow";
import { Container } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

// Next agrega noindex a esta página automáticamente.
export const metadata: Metadata = { title: "Página no encontrada" };

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <Container className="flex flex-col items-start gap-6 py-20 md:py-28">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="font-display text-display font-black uppercase">Esta página no existe</h1>
          <p className="max-w-xl text-lead text-muted-foreground">
            Puede que el link esté mal escrito o que la página se haya movido.
          </p>
          <div className="flex flex-wrap gap-3">
            <CtaLink href="/">Ir al inicio</CtaLink>
            <CtaLink href="/running-team" variant="outline">
              Ver el Running Team
            </CtaLink>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
