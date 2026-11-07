import { cacheLife } from "next/cache";

/**
 * Año actual para el pie de página. Con Cache Components, la fecha tiene que leerse dentro de
 * "use cache": queda en el HTML estático y se recalcula una vez por día.
 */
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
