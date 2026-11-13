import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  return {
    title: title ?? { absolute: siteConfig.name },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
    },
    // La imagen sale del opengraph-image de cada ruta; X usa la misma si no hay twitter:image.
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
