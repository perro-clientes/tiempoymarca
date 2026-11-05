import type { ComponentProps } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CtaLinkProps = ComponentProps<typeof Link> &
  Pick<ComponentProps<typeof Button>, "variant" | "size">;

export function CtaLink({
  variant,
  size = "lg",
  children,
  ...props
}: CtaLinkProps) {
  return (
    <Button asChild variant={variant} size={size}>
      <Link {...props}>
        {children}
        <ArrowRight aria-hidden />
      </Link>
    </Button>
  );
}
