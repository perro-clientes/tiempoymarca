import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = ComponentProps<"p"> & { variant?: "text" | "pill" };

export function Eyebrow({ variant = "text", className, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs font-bold uppercase tracking-[0.16em] md:text-sm",
        variant === "text" && "text-brand-text",
        variant === "pill" &&
          "inline-flex w-fit rounded-full bg-bordo px-3.5 py-2 text-white",
        className,
      )}
      {...props}
    />
  );
}
