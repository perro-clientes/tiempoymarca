import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/running-team", priority: 0.9 },
    { path: "/contacto", priority: 0.8 },
    { path: "/terminos", priority: 0.2 },
    { path: "/privacidad", priority: 0.2 },
  ];
  return routes.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority,
  }));
}
