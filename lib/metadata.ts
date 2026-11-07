import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

const ogImage = {
  url: "/images/og.jpg",
  width: 1200,
  height: 630,
  alt: "Integrantes de Tiempo & Marca con la bandera del equipo en el parque",
};

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
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage.url] },
  };
}
