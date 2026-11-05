import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckList } from "./check-list";
import { CtaLink } from "./cta-link";

type PlanCardProps = {
  name: string;
  description: string;
  features: readonly string[];
  cta: { label: string; href: string };
  price?: string;
  period?: string;
  image?: { src: string; alt: string };
  className?: string;
};

export function PlanCard({
  name,
  description,
  features,
  cta,
  price,
  period,
  image,
  className,
}: PlanCardProps) {
  return (
    <Card
      className={cn(
        "grid gap-6 p-6 md:p-10",
        image && "md:grid-cols-[1fr_minmax(0,40%)] md:gap-8",
        className,
      )}
    >
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-title">{name}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        {price && (
          <p className="flex items-baseline gap-2">
            <span className="text-title">{price}</span>
            {period && (
              <span className="text-sm text-muted-foreground">{period}</span>
            )}
          </p>
        )}
        <CtaLink href={cta.href}>{cta.label}</CtaLink>
        <CheckList items={features} className="mt-auto pt-4" />
      </div>
      {image && (
        <div className="relative order-first aspect-[4/3] overflow-hidden rounded-lg md:order-none md:aspect-auto">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 20vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
    </Card>
  );
}
