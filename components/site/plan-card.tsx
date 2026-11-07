import type { Plan } from "@/content/types";
import { cn } from "@/lib/utils";
import { CheckList } from "./check-list";
import { CtaLink } from "./cta-link";

const styles = {
  default: "border border-line bg-white text-ink",
  featured: "dark bg-bordo text-white",
  soon: "border border-dashed border-pink-strong bg-white text-ink",
};

export function PlanCard({ plan, className }: { plan: Plan; className?: string }) {
  return (
    <article
      className={cn(
        "flex flex-col gap-6 rounded-[28px] p-7 md:p-9",
        styles[plan.style],
        className,
      )}
    >
      <div className="flex flex-col items-start gap-3">
        {plan.badge && (
          <span
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em]",
              plan.style === "featured" ? "bg-white text-bordo" : "bg-pink text-bordo",
            )}
          >
            {plan.badge}
          </span>
        )}
        <h3 className="font-display text-title font-extrabold">{plan.name}</h3>
        <p className="text-muted-foreground">{plan.description}</p>
      </div>
      <p className="flex flex-wrap items-baseline gap-x-2">
        <span className="font-display text-[clamp(2.5rem,2rem+1.5vw,3.25rem)] font-black leading-none">
          {plan.priceLabel}
        </span>
        <span className="text-muted-foreground">{plan.period}</span>
      </p>
      <CheckList items={plan.features} />
      <CtaLink
        href={plan.cta.href}
        variant={plan.cta.variant}
        className="mt-auto w-full"
      >
        {plan.cta.label}
      </CtaLink>
    </article>
  );
}
