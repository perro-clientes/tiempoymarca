// Herramientas para corredores. Para sumar una nueva, agregala acá y creá su página en /herramientas/<slug>.

export type ToolIcon = "calculadora";

export type Tool = {
  slug: string;
  title: string;
  description: string;
  icon: ToolIcon;
};

/**
 * Bloques de la calculadora de ritmos que esperan confirmación de datos:
 * "Tu marca en otras distancias" y "Calorías". Con false quedan ocultos (el código sigue ahí).
 */
export const SHOW_PACE_ESTIMATES = false;

export const paceCalculatorDescription = SHOW_PACE_ESTIMATES
  ? "Calculá tu ritmo por kilómetro, el tiempo final o la distancia, estimá tu marca en otras distancias y las calorías que gastás corriendo."
  : "Calculá tu ritmo por kilómetro, el tiempo final o la distancia de tu entrenamiento o tu carrera.";

export const tools: Tool[] = [
  {
    slug: "calculadora-de-ritmos",
    title: "Calculadora de ritmos",
    description: SHOW_PACE_ESTIMATES
      ? "Calculá tu ritmo, tiempo o distancia, estimá tu marca en otras distancias y las calorías que gastás corriendo."
      : "Calculá tu ritmo, tu tiempo o la distancia que recorrés.",
    icon: "calculadora",
  },
];

export const toolHref = (tool: Tool) => `/herramientas/${tool.slug}`;
