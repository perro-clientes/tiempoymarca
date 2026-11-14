import Link from "next/link";
import { ArrowRight, Calculator, type LucideIcon } from "lucide-react";
import { CtaBanner } from "@/components/site/cta-banner";
import { Container } from "@/components/site/section";
import { ToolHeader } from "@/components/tools/tool-header";
import { toolHref, tools, type ToolIcon } from "@/content/tools";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

const { description } = pages.herramientas;

export const metadata = pageMetadata({
  title: pages.herramientas.seo.title,
  description: pages.herramientas.seo.description,
  path: "/herramientas",
});

const icons: Record<ToolIcon, LucideIcon> = { calculadora: Calculator };

export default function HerramientasPage() {
  return (
    <>
      <ToolHeader title={pages.herramientas.title} description={description} />
      <Container className="pb-16 md:pb-28">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = icons[tool.icon];
            return (
              <li key={tool.slug}>
                <Link
                  href={toolHref(tool)}
                  className="group flex h-full flex-col gap-4 rounded-[28px] border border-line bg-white p-7 transition-colors hover:border-bordo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-pink text-bordo">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h2 className="font-display text-title font-extrabold">{tool.title}</h2>
                  <p className="text-muted-foreground">{tool.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 font-bold text-bordo">
                    Abrir
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
      <CtaBanner />
    </>
  );
}
