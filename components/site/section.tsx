import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Contenedor de 1240 px de contenido con 24 px de margen lateral. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1288px] px-6", className)}
      {...props}
    />
  );
}

const tones = {
  cream: "bg-background text-foreground",
  pink: "bg-pink text-ink",
  // .dark invierte los tokens dentro de la sección.
  dark: "dark bg-background text-foreground",
  brand: "dark bg-bordo text-white",
};

export type SectionTone = keyof typeof tones;

type SectionProps = ComponentProps<"section"> & {
  tone?: SectionTone;
  containerClassName?: string;
};

export function Section({
  tone = "cream",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-28", tones[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
