import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "./section";

type HeroProps = {
  title: ReactNode;
  tagline?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  image?: { src: string; alt: string; position?: string };
};

export function Hero({ title, tagline, description, action, image }: HeroProps) {
  return (
    <section
      className={cn(
        "dark relative isolate flex min-h-svh overflow-hidden bg-brand text-white",
        // Sin foto, el fondo es de marca: el botón pasa a blanco para distinguirse.
        !image && "[--cta-foreground:0_0%_0%] [--cta:0_0%_100%]",
      )}
    >
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
            style={{ objectPosition: image.position }}
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />
        </>
      )}
      <Container className="flex flex-col justify-between gap-12 pb-10 pt-28 md:pb-12">
        <h1 className="text-display uppercase">{title}</h1>
        <div className="grid items-end gap-8 md:grid-cols-2">
          {tagline && <p className="max-w-md text-title">{tagline}</p>}
          {(description || action) && (
            <div className="flex flex-col items-start gap-6 md:col-start-2 md:ml-auto md:max-w-sm">
              {description && <p>{description}</p>}
              {action}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
