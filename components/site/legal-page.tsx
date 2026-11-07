import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { Container } from "./section";

export type LegalSection = { id: string; title: string; tocLabel?: string; body: ReactNode };

type LegalPageProps = {
  tone: "brand" | "dark";
  title: string;
  subtitle: ReactNode;
  intro: ReactNode;
  sections: readonly LegalSection[];
};

export function LegalPage({ tone, title, subtitle, intro, sections }: LegalPageProps) {
  return (
    <>
      <section className={cn("dark text-white", tone === "brand" ? "bg-bordo" : "bg-aubergine")}>
        <Container className="flex flex-col gap-4 py-16 md:py-20">
          <Eyebrow className="text-white">Legal</Eyebrow>
          <h1 className="font-display text-heading font-black uppercase">{title}</h1>
          <p>{subtitle}</p>
        </Container>
      </section>
      <Container className="grid gap-10 py-14 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-12 md:py-20">
        <nav aria-labelledby="legal-toc" className="h-fit rounded-3xl border border-line bg-white p-6 md:sticky md:top-28">
          <h2 id="legal-toc" className="mb-4 font-bold">
            En esta página
          </h2>
          <ol className="flex flex-col gap-2.5 text-sm">
            {sections.map((section, i) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="rounded-sm text-bordo hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {i + 1}. {section.tocLabel ?? section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="flex max-w-3xl flex-col gap-10">
          <p className="text-lead text-muted-foreground">{intro}</p>
          {sections.map((section, i) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="flex flex-col gap-4">
              <h2 id={`${section.id}-title`} className="font-display text-title font-extrabold">
                {i + 1}. {section.title}
              </h2>
              <div className="legal-body flex flex-col gap-3 leading-relaxed text-ink [&_a]:text-bordo [&_a]:underline [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
                {section.body}
              </div>
            </section>
          ))}
        </article>
      </Container>
    </>
  );
}
