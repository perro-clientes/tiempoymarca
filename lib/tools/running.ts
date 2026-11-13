// Cálculos de running. Funciones puras: no dependen de React ni del navegador.

export type RaceDistance = { id: string; label: string; km: number };

export const RACE_DISTANCES: readonly RaceDistance[] = [
  { id: "5k", label: "5K", km: 5 },
  { id: "10k", label: "10K", km: 10 },
  { id: "21k", label: "Media maratón", km: 21.0975 },
  { id: "42k", label: "Maratón", km: 42.195 },
];

/** Exponente de Riegel: estima el tiempo en otra distancia a partir de una marca. */
export const RIEGEL_EXPONENT = 1.06;

/** Convierte lo que escribe el usuario en número. Acepta coma decimal. null = vacío; NaN = inválido. */
export function parseInput(value: string): number | null {
  const text = value.trim().replace(",", ".");
  if (text === "") return null;
  if (!/^\d*\.?\d*$/.test(text) || text === ".") return Number.NaN;
  return Number(text);
}

export const toSeconds = (hours: number, minutes: number, seconds: number) =>
  hours * 3600 + minutes * 60 + seconds;

/** Ritmo en segundos por kilómetro. */
export const paceFrom = (timeSec: number, km: number) => timeSec / km;
export const timeFrom = (paceSecPerKm: number, km: number) => paceSecPerKm * km;
export const distanceFrom = (timeSec: number, paceSecPerKm: number) => timeSec / paceSecPerKm;
export const speedKmh = (paceSecPerKm: number) => 3600 / paceSecPerKm;

/** Tiempo estimado en otra distancia (fórmula de Riegel). */
export const predictTime = (timeSec: number, fromKm: number, toKm: number) =>
  timeSec * Math.pow(toKm / fromKm, RIEGEL_EXPONENT);

/** Gasto aproximado corriendo: 1 kcal por kilo de peso por kilómetro. */
export const runningCalories = (weightKg: number, km: number) => weightKg * km;

const pad = (n: number) => String(n).padStart(2, "0");

/** 3725 → "1:02:05"; 300 → "5:00". */
export function formatDuration(totalSec: number): string {
  const rounded = Math.round(totalSec);
  const h = Math.floor(rounded / 3600);
  const m = Math.floor((rounded % 3600) / 60);
  const s = rounded % 60;
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

const numberFormat = (maxDecimals: number) =>
  new Intl.NumberFormat("es-AR", { maximumFractionDigits: maxDecimals });

export const formatKm = (km: number) => numberFormat(2).format(km);
export const formatSpeed = (kmh: number) => numberFormat(1).format(kmh);
export const formatKcal = (kcal: number) => numberFormat(0).format(Math.round(kcal));
