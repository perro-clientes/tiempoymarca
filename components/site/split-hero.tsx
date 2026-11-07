import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "./section";

type SplitHeroProps = {
  tone: "brand" | "dark";
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actions: ReactNode;
  footnote?: ReactNode;
  image: { src: string; alt: string; width: number; height: number };
  /** bleed: la foto toca el borde inferior de la sección, como en la Home. */
  imageStyle?: "bleed" | "card";
};

export function SplitHero({
  tone,
  eyebrow,
  title,
  description,
  actions,
  footnote,
  image,
  imageStyle = "card",
}: SplitHeroProps) {
  const bleed = imageStyle === "bleed";
  return (
    <section
      className={cn(
        "dark text-foreground",
        tone === "brand" ? "bg-bordo" : "bg-background",
        // Sobre bordó, el gris on-dark no llega al contraste esperado: el texto va en blanco.
        tone === "brand" && "[--muted-foreground:0_0%_100%]",
      )}
    >
      <Container
        className={cn(
          "grid gap-10 pt-14 md:grid-cols-2 md:items-center md:gap-12 md:pt-20",
          bleed ? "pb-0" : "pb-16 md:pb-20",
        )}
      >
        <div className={cn("flex flex-col gap-6", bleed && "md:pb-20")}>
          {eyebrow}
          <h1 className="font-display text-display font-black uppercase">{title}</h1>
          <p className="max-w-xl text-lead">{description}</p>
          <div className="flex flex-wrap gap-3">{actions}</div>
          {footnote}
        </div>
        <div
          className={cn(
            "relative aspect-[586/560] w-full overflow-hidden",
            bleed ? "self-end rounded-t-[28px]" : "rounded-[28px]",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
