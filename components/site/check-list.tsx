import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckListProps = {
  items: readonly string[];
  className?: string;
};

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check
            aria-hidden
            className="mt-1 size-4 shrink-0 text-brand-text"
            strokeWidth={2.5}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
