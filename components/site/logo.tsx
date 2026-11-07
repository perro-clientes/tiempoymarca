import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const sources = {
  bordo: "/images/logo-bordo.png",
  white: "/images/logo-white.png",
};

type LogoProps = {
  color?: keyof typeof sources;
  /** Ancho en px; el alto se calcula con la proporción del wordmark. */
  width?: number;
  className?: string;
  priority?: boolean;
};

export function Logo({ color = "bordo", width = 112, className, priority }: LogoProps) {
  return (
    <Image
      src={sources[color]}
      alt={siteConfig.name}
      width={width}
      height={Math.round((width * 190) / 451)}
      className={cn("h-auto", className)}
      priority={priority}
    />
  );
}
