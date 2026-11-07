import type { LucideIcon } from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; description: string };

export function FeatureGrid({ items }: { items: readonly Feature[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
      {items.map(({ icon: Icon, title, description }) => (
        <li key={title} className="flex flex-col gap-2">
          <Icon aria-hidden className="mb-1 size-7 text-bordo" strokeWidth={1.75} />
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </li>
      ))}
    </ul>
  );
}
