// Calculadora de intensidades (planilla "calculador de intensidades.xlsx" del equipo).
// A partir del ritmo de VO2 máx (test de 2000 m) y un porcentaje de intensidad,
// calcula el ritmo de trabajo por kilómetro y el tiempo de cada pasada.

/** Velocidad en m/s para un ritmo en segundos por kilómetro. */
export const speedFromPace = (paceSecPerKm: number) => 1000 / paceSecPerKm;

/** Ritmo de trabajo (s/km): la velocidad de VO2 máx al porcentaje indicado. */
export const workPace = (vo2PaceSecPerKm: number, percent: number) =>
  1000 / ((speedFromPace(vo2PaceSecPerKm) * percent) / 100);

/** Tiempo de una pasada (s) a un ritmo dado. */
export const repTime = (paceSecPerKm: number, meters: number) => (paceSecPerKm * meters) / 1000;

/** 88,42 → "1:28,4" (minutos y segundos con décimas, como se mide en pista). */
export function formatWithTenths(totalSec: number): string {
  const tenths = Math.round(totalSec * 10);
  const minutes = Math.floor(tenths / 600);
  const rest = tenths - minutes * 600;
  const seconds = Math.floor(rest / 10);
  const decimal = rest % 10;
  return `${minutes}:${String(seconds).padStart(2, "0")},${decimal}`;
}
