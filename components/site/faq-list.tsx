"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import type { Faq } from "@/content/types";

export function FaqList({ items }: { items: readonly Faq[] }) {
  return (
    <Accordion.Root type="single" collapsible className="mx-auto flex max-w-[900px] flex-col gap-3">
      {items.map((item) => (
        <Accordion.Item
          key={item.question}
          value={item.question}
          className="rounded-2xl border border-line bg-white text-ink"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center gap-3 rounded-2xl px-6 py-5 text-left font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <ChevronRight
                aria-hidden
                className="size-4 shrink-0 text-bordo transition-transform group-data-[state=open]:rotate-90"
                strokeWidth={2.5}
              />
              {item.question}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="px-6 pb-5 pl-[52px] text-muted-foreground">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
