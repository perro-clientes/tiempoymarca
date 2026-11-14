import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
}: {
  /** Se completa con " | Tiempo & Marca". */
  title?: string;
  /** Título completo, sin agregarle el nombre del sitio. */
  absoluteTitle?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = absoluteTitle ?? (title ? `${title} | ${siteConfig.name}` : siteConfig.name);
  return {
    title: { absolute: fullTitle },
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
