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
        <li key={item} className="flex items-start gap-3 text-sm">
          <span
            aria-hidden
            className="mt-px flex size-5 shrink-0 items-center justify-center rounded-sm bg-brand text-brand-foreground"
          >
            <Check className="size-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
