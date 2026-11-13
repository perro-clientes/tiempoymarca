// Herramientas para corredores. Para sumar una nueva, agregala acá y creá su página en /herramientas/<slug>.

export type ToolIcon = "calculadora";

export type Tool = {
  slug: string;
  title: string;
  description: string;
  icon: ToolIcon;
};

export const tools: Tool[] = [
  {
    slug: "calculadora-de-ritmos",
    title: "Calculadora de ritmos",
    description:
      "Calculá tu ritmo, tiempo o distancia, estimá tu marca en otras distancias y las calorías que gastás corriendo.",
    icon: "calculadora",
  },
];

export const toolHref = (tool: Tool) => `/herramientas/${tool.slug}`;
