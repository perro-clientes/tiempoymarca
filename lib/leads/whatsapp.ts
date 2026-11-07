/**
 * Normaliza un celular argentino al formato que usa wa.me (sin + ni 549): código de área + número.
 * Acepta entradas como "11 1234-5678", "+54 9 11 1234 5678", "011 15 1234-5678".
 */
export function normalizeArgentineMobile(input: string): string {
  let digits = input.replace(/\D/g, "");
  if (digits.startsWith("54")) digits = digits.slice(2);
  if (digits.startsWith("9")) digits = digits.slice(1);
  if (digits.startsWith("0")) digits = digits.slice(1);
  // "11 15 1234-5678" o "221 15 456-7890": el 15 que sigue al código de área (de 2 a 4 dígitos)
  // no va en el número internacional.
  if (digits.length === 12) {
    const at = [2, 3, 4].find((i) => digits.slice(i, i + 2) === "15");
    if (at !== undefined) digits = digits.slice(0, at) + digits.slice(at + 2);
  }
  return digits;
}

export const whatsappLink = (input: string) => `https://wa.me/549${normalizeArgentineMobile(input)}`;
