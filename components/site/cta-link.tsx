import type { ComponentProps } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type CtaLinkProps = ComponentProps<typeof Link> &
  Pick<ComponentProps<typeof Button>, "variant" | "size"> & {
    external?: boolean;
  };

/** Link con forma de botón pill. Los externos abren en otra pestaña. */
export function CtaLink({
  variant,
  size = "lg",
  external,
  children,
  className,
  ...props
}: CtaLinkProps) {
  const isExternal = external ?? /^https?:/.test(String(props.href));
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link
        {...props}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    </Button>
  );
}
