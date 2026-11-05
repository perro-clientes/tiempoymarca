import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqListProps = {
  items: readonly { question: string; answer: ReactNode }[];
  className?: string;
};

export function FaqList({ items, className }: FaqListProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={className ?? "mx-auto flex max-w-3xl flex-col gap-3"}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.question}
          value={item.question}
          className="rounded-lg border-0 bg-card px-5 text-card-foreground"
        >
          <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
