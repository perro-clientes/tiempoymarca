import type { MetadataRoute } from "next";
import { toolHref, tools } from "@/content/tools";
import { absoluteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/running-team", priority: 0.9 },
    { path: "/contacto", priority: 0.8 },
    { path: "/herramientas", priority: 0.6 },
    ...tools.map((tool) => ({ path: toolHref(tool), priority: 0.6 })),
    { path: "/terminos", priority: 0.2 },
    { path: "/privacidad", priority: 0.2 },
  ];
  return routes.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority,
  }));
}
