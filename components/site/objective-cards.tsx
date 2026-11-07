import { Heart, House, Mountain, Timer, type LucideIcon } from "lucide-react";
import type { Objective, ObjectiveIcon } from "@/content/types";

const icons: Record<ObjectiveIcon, LucideIcon> = {
  calle: House,
  pista: Timer,
  trail: Mountain,
  salud: Heart,
};

export function ObjectiveCards({ items }: { items: readonly Objective[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = icons[item.icon];
        return (
          <li key={item.id} className="flex flex-col gap-3 rounded-3xl border border-line bg-white p-7">
            <Icon aria-hidden className="size-8 text-bordo" strokeWidth={1.75} />
            <h3 className="font-display text-title font-extrabold">{item.title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
