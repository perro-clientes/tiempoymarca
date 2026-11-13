import type { ReactNode } from "react";
import { Eyebrow } from "@/components/site/eyebrow";
import { Container } from "@/components/site/section";

/** Encabezado de las páginas de herramientas. */
export function ToolHeader({ title, description }: { title: string; description: ReactNode }) {
  return (
    <Container className="flex flex-col gap-4 pb-10 pt-14 md:pb-14 md:pt-20">
      <Eyebrow>Herramientas</Eyebrow>
      <h1 className="font-display text-display font-black uppercase">{title}</h1>
      <p className="max-w-2xl text-lead text-muted-foreground">{description}</p>
    </Container>
  );
}
