// Opciones del formulario de contacto. Se guardan por valor; las etiquetas son las del diseño.

export const interestOptions = [
  { value: "grupos_presenciales", label: "Grupos presenciales" },
  { value: "plan_distancia", label: "Plan a distancia" },
  { value: "curso_tecnica", label: "Curso de técnica" },
  { value: "plan_autoguiado", label: "Plan autoguiado" },
] as const;

export const levelOptions = [
  { value: "empezando", label: "Estoy empezando" },
  { value: "menos_de_un_anio", label: "Corro hace menos de un año" },
  { value: "mas_de_un_anio", label: "Corro hace más de un año" },
  { value: "compite", label: "Compito regularmente" },
] as const;

export type InterestValue = (typeof interestOptions)[number]["value"];
export type LevelValue = (typeof levelOptions)[number]["value"];

export const interestLabel = (value: string) =>
  interestOptions.find((o) => o.value === value)?.label ?? value;
export const levelLabel = (value: string) =>
  levelOptions.find((o) => o.value === value)?.label ?? value;
