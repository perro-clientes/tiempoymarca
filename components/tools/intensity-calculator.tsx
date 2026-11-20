"use client";

import { useId, useState } from "react";
import { formatWithTenths, repTime, workPace } from "@/lib/tools/intensity";
import { formatDuration, formatSpeed, speedKmh, toSeconds } from "@/lib/tools/running";
import { cn } from "@/lib/utils";
import { Card, Hint, NumberBox, Result, inputClass, read } from "./pace-calculator";

const REP_DISTANCES = [200, 400, 600, 800, 1000, 1200, 2000];

export function IntensityCalculator() {
  const [pace, setPace] = useState({ m: "", s: "" });
  const [percent, setPercent] = useState("");
  const [meters, setMeters] = useState("400");
  const percentId = useId();
  const metersId = useId();

  const pm = read(pace.m);
  const ps = read(pace.s, 60);
  const pct = read(percent);
  const dist = read(meters);
  const vo2Pace = toSeconds(0, pm.value, ps.value);
  const invalid = pm.invalid || ps.invalid || pct.invalid || dist.invalid;
  const ready = !invalid && vo2Pace > 0 && pct.value > 0 && dist.value > 0;
  const pace100 = ready ? workPace(vo2Pace, pct.value) : 0;

  return (
    <Card title="Ritmo de trabajo y pasadas" description="Completá tu ritmo de VO2 máx, la intensidad y el largo de la pasada.">
      <div className="grid gap-6 md:grid-cols-3">
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 font-bold">Ritmo VO2 máx (test de 2000 m)</legend>
          <div className="grid grid-cols-2 gap-2">
            <NumberBox label="Min / km" value={pace.m} onChange={(m) => setPace({ ...pace, m })} invalid={pm.invalid} />
            <NumberBox label="Seg / km" value={pace.s} onChange={(s) => setPace({ ...pace, s })} invalid={ps.invalid} />
          </div>
        </fieldset>

        <div className="flex flex-col gap-3">
          <label htmlFor={percentId} className="font-bold">
            Intensidad
          </label>
          <div className="flex items-center gap-3">
            <input
              id={percentId}
              value={percent}
              onChange={(e) => setPercent(e.target.value)}
              inputMode="decimal"
              autoComplete="off"
              placeholder="0"
              aria-invalid={pct.invalid || undefined}
              className={cn(inputClass, "max-w-[8rem]")}
            />
            <span className="font-bold text-muted-foreground">%</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor={metersId} className="font-bold">
            Pasada
          </label>
          <div className="flex items-center gap-3">
            <input
              id={metersId}
              value={meters}
              onChange={(e) => setMeters(e.target.value)}
              inputMode="numeric"
              autoComplete="off"
              placeholder="0"
              aria-invalid={dist.invalid || undefined}
              className={cn(inputClass, "max-w-[8rem]")}
            />
            <span className="font-bold text-muted-foreground">metros</span>
          </div>
        </div>
      </div>

      <div role="status">
        {invalid ? (
          <Hint error>{ps.invalid ? "Los segundos van de 0 a 59." : "Revisá los datos: usá solo números."}</Hint>
        ) : ready ? (
          <div className="flex flex-col gap-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <Result label="Ritmo de trabajo" value={`${formatDuration(pace100)} /km`} detail={`${formatSpeed(speedKmh(pace100))} km/h`} />
              <Result
                label={`Pasada de ${dist.value} m`}
                value={formatWithTenths(repTime(pace100, dist.value))}
                detail={`Al ${pct.value}% de ${formatDuration(vo2Pace)} /km`}
              />
            </div>
            <table className="w-full text-left">
              <caption className="mb-2 text-left font-bold">Otras pasadas a este ritmo</caption>
              <thead>
                <tr className="border-b border-line text-sm text-muted-foreground">
                  <th scope="col" className="pb-2 font-medium">Pasada</th>
                  <th scope="col" className="pb-2 text-right font-medium">Tiempo</th>
                </tr>
              </thead>
              <tbody>
                {REP_DISTANCES.map((m) => (
                  <tr key={m} className={cn("border-b border-line last:border-0", m === dist.value && "text-bordo")}>
                    <th scope="row" className="py-2.5 font-bold">{m} m</th>
                    <td className="py-2.5 text-right font-display text-xl font-black">{formatWithTenths(repTime(pace100, m))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Hint>Completá tu ritmo de VO2 máx y la intensidad para ver el resultado.</Hint>
        )}
      </div>
    </Card>
  );
}
