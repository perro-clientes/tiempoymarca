import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  children,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-black",
        className,
      )}
      {...props}
    >
      <span aria-hidden className="size-2 rounded-[2px] bg-brand" />
      {children}
    </span>
  );
}
