import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1376px] px-4 md:px-8", className)}
      {...props}
    />
  );
}

const tones = {
  default: "bg-background text-foreground",
  muted: "bg-secondary text-secondary-foreground",
  // .dark invierte los tokens de todo lo que esté dentro de la sección.
  dark: "dark bg-background text-foreground",
  // Sobre el color de marca, el botón pasa a blanco y el gris muted se aclara para llegar a 4.5:1.
  brand:
    "dark bg-brand text-brand-foreground [--cta-foreground:0_0%_0%] [--cta:0_0%_100%] [--muted-foreground:0_0%_90%]",
};

type SectionProps = ComponentProps<"section"> & {
  tone?: keyof typeof tones;
};

export function Section({
  tone = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-section", tones[tone], className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
