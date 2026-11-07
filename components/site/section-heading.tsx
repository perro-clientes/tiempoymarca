import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** split: título a la izquierda y descripción a la derecha en desktop. */
  layout?: "stack" | "center" | "split";
  as?: "h1" | "h2";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  layout = "stack",
  as: Heading = "h2",
  className,
  children,
}: SectionHeadingProps) {
  const heading = (
    <div
      className={cn(
        "flex flex-col gap-3",
        layout === "center" && "items-center text-center",
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="max-w-3xl font-display text-heading font-black uppercase">
        {title}
      </Heading>
    </div>
  );

  if (layout === "split") {
    return (
      <div
        className={cn(
          "flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12",
          className,
        )}
      >
        {heading}
        {description && (
          <p className="max-w-md text-lead text-muted-foreground md:pb-2">
            {description}
          </p>
        )}
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        layout === "center" && "items-center text-center",
        className,
      )}
    >
      {heading}
      {description && (
        <p className="max-w-2xl text-lead text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}
