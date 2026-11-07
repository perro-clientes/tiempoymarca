import { siteConfig } from "@/lib/site-config";
import { CtaLink } from "./cta-link";
import { Logo } from "./logo";
import { Container } from "./section";

/** Banner final: "Tu próxima marca empieza con una clase". */
export function CtaBanner() {
  return (
    <section className="pb-20 md:pb-28">
      <Container className="max-w-[1368px]">
        <div className="dark flex flex-col items-center gap-6 rounded-[32px] bg-bordo px-6 py-14 text-center text-white md:py-[72px]">
          <Logo color="white" width={210} />
          <h2 className="max-w-4xl font-display text-heading font-black uppercase">
            Tu próxima marca empieza con una clase
          </h2>
          <p className="max-w-xl text-lead">
            Vení a probar, conocé al grupo y armamos juntos el camino hacia tu objetivo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CtaLink href="/contacto">Reservá tu clase de prueba</CtaLink>
            <CtaLink href={siteConfig.contact.whatsapp.url} variant="outline">
              Escribinos por WhatsApp
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
