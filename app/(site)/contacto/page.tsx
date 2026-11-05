import type { Metadata } from "next";
import { CtaLink } from "@/components/site/cta-link";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <SectionHeading
        as="h1"
        title="Contacto"
        description="Escribinos por WhatsApp o Instagram."
      />
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <CtaLink
          href={siteConfig.social.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </CtaLink>
        <CtaLink
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noreferrer"
          variant="outline"
        >
          Instagram
        </CtaLink>
      </div>
    </Section>
  );
}
