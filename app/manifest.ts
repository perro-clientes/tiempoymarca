import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Datos para guardar el sitio como acceso directo en el celular.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.tagline,
    lang: "es-AR",
    start_url: "/",
    display: "standalone",
    background_color: "#861F52",
    theme_color: "#FBF6F3",
    icons: [
      { src: "/meta/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/meta/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/meta/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
