import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = { title: "Planes" };

export default function PlanesPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <SectionHeading as="h1" title="Planes" />
    </Section>
  );
}
