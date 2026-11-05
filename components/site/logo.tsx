import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: number;
  className?: string;
};

export function Logo({ size = 56, className }: LogoProps) {
  return (
    <Image
      src="/brand/brand-logo.png"
      alt={siteConfig.name}
      width={size}
      height={size}
      className={cn("rounded-lg", className)}
    />
  );
}
