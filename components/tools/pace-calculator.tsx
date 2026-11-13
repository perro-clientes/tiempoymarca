"use client";

import { useId, useState, type ReactNode } from "react";
import {
  RACE_DISTANCES,
  distanceFrom,
  formatDuration,
  formatKcal,
  formatKm,
  formatSpeed,
  paceFrom,
  parseInput,
  predictTime,
  runningCalories,
  speedKmh,
  timeFrom,
  toSeconds,
} from "@/lib/tools/running";
import { cn } from "@/lib/utils";

const inputClass =
  "h-12 w-full rounded-xl border border-input bg-cream px-3 text-center text-lg font-bold text-ink placeholder:font-normal placeholder:text-muted-foreground focus-visible:border-bordo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-destructive";

const chipClass =
  "inline-flex min-h-11 items-center rounded-full border-[1.5px] border-input bg-white px-4 text-sm font-medium text-bordo transition-colors peer-checked:border-bordo peer-checked:bg-bordo peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 hover:border-bordo";

// ---------- Piezas de formulario ----------

type Parsed = { value: number; invalid: boolean; empty: boolean };

function read(text: string, max?: number): Parsed {
  const value = parseInput(text);
  if (value === null) return { value: 0, invalid: false, empty: true };
  const invalid = Number.isNaN(value) || (max !== undefined && value >= max);
  return { value: invalid ? 0 : value, invalid, empty: false };
}

function Card({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-6 rounded-[28px] border border-line bg-white p-6 md:p-9">
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-title font-extrabold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  );
}

function NumberBox({
  label,
  value,
  onChange,
  invalid,
  placeholder = "0",
  decimal = false,
  className,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  invalid?: boolean;
  placeholder?: string;
  decimal?: boolean;
  className?: string;
}) {
  const id = useId();
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode={decimal ? "decimal" : "numeric"}
        autoComplete="off"
        placeholder={placeholder}
        aria-invalid={invalid || undefined}
        className={inputClass}
      />
      <label htmlFor={id} className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
    </div>
  );
}

type TimeValue = { h: string; m: string; s: string };

function TimeFields({
  legend,
  value,
  onChange,
  invalid,
}: {
  legend: string;
  value: TimeValue;
  onChange: (value: TimeValue) => void;
  invalid: { m: boolean; s: boolean };
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3 font-bold">{legend}</legend>
      <div className="grid grid-cols-3 gap-2">
        <NumberBox label="Horas" value={value.h} onChange={(h) => onChange({ ...value, h })} />
        <NumberBox label="Min" value={value.m} onChange={(m) => onChange({ ...value, m })} invalid={invalid.m} />
        <NumberBox label="Seg" value={value.s} onChange={(s) => onChange({ ...value, s })} invalid={invalid.s} />
      </div>
    </fieldset>
  );
}

function PaceFields({
  value,
  onChange,
  invalidSeconds,
}: {
  value: { m: string; s: string };
  onChange: (value: { m: string; s: string }) => void;
  invalidSeconds: boolean;
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3 font-bold">Ritmo por kilómetro</legend>
      <div className="grid grid-cols-2 gap-2">
        <NumberBox label="Min / km" value={value.m} onChange={(m) => onChange({ ...value, m })} />
        <NumberBox label="Seg / km" value={value.s} onChange={(s) => onChange({ ...value, s })} invalid={invalidSeconds} />
      </div>
    </fieldset>
  );
}

function DistanceField({
  value,
  onChange,
  invalid,
}: {
  value: string;
  onChange: (value: string) => void;
  invalid: boolean;
}) {
  const id = useId();
  const current = parseInput(value);
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="font-bold">
        Distancia
      </label>
      <div className="flex items-center gap-3">
        <input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          inputMode="decimal"
          autoComplete="off"
          placeholder="0"
          aria-invalid={invalid || undefined}
          aria-describedby={`${id}-unit`}
          className={cn(inputClass, "max-w-[9rem]")}
        />
        <span id={`${id}-unit`} className="font-bold text-muted-foreground">
          km
        </span>
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Distancias frecuentes">
        {RACE_DISTANCES.map((race) => (
          <button
            key={race.id}
            type="button"
            aria-pressed={current === race.km}
            onClick={() => onChange(String(race.km).replace(".", ","))}
            className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-input bg-white px-4 text-sm font-medium text-bordo transition-colors hover:border-bordo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-pressed:border-bordo aria-pressed:bg-bordo aria-pressed:text-white"
          >
            {race.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Result({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-bordo p-6 text-white">
      <span className="text-sm font-bold uppercase tracking-[0.14em] text-pink">{label}</span>
      <span className="font-display text-5xl font-black leading-none">{value}</span>
      {detail && <span className="text-on-dark">{detail}</span>}
    </div>
  );
}

function Hint({ children, error }: { children: ReactNode; error?: boolean }) {
  return (
    <p className={cn("rounded-2xl border border-dashed p-6 text-center", error ? "border-destructive text-destructive" : "border-line text-muted-foreground")}>
      {children}
    </p>
  );
}

const outOfRange = "Los minutos y los segundos van de 0 a 59.";

// ---------- 1. Ritmo, tiempo y distancia ----------

type Mode = "ritmo" | "tiempo" | "distancia";
const modes: { value: Mode; label: string }[] = [
  { value: "ritmo", label: "Ritmo" },
  { value: "tiempo", label: "Tiempo" },
  { value: "distancia", label: "Distancia" },
];

function PaceTimeDistance() {
  const [mode, setMode] = useState<Mode>("ritmo");
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState<TimeValue>({ h: "", m: "", s: "" });
  const [pace, setPace] = useState({ m: "", s: "" });
  const name = useId();

  const dist = read(distance);
  const th = read(time.h);
  const tm = read(time.m, 60);
  const ts = read(time.s, 60);
  const pm = read(pace.m);
  const ps = read(pace.s, 60);
  const timeSec = toSeconds(th.value, tm.value, ts.value);
  const paceSec = toSeconds(0, pm.value, ps.value);

  const usesDistance = mode !== "distancia";
  const usesTime = mode !== "tiempo";
  const usesPace = mode !== "ritmo";
  const invalid =
    (usesDistance && dist.invalid) ||
    (usesTime && (th.invalid || tm.invalid || ts.invalid)) ||
    (usesPace && (pm.invalid || ps.invalid));
  const rangeError = (usesTime && (tm.invalid || ts.invalid)) || (usesPace && ps.invalid);

  let result: ReactNode;
  if (invalid) {
    result = <Hint error>{rangeError ? outOfRange : "Revisá los datos: usá solo números."}</Hint>;
  } else if (mode === "ritmo" && dist.value > 0 && timeSec > 0) {
    const p = paceFrom(timeSec, dist.value);
    result = <Result label="Tu ritmo" value={`${formatDuration(p)} /km`} detail={`${formatSpeed(speedKmh(p))} km/h`} />;
  } else if (mode === "tiempo" && dist.value > 0 && paceSec > 0) {
    result = (
      <Result
        label="Tu tiempo"
        value={formatDuration(timeFrom(paceSec, dist.value))}
        detail={`${formatKm(dist.value)} km a ${formatDuration(paceSec)} /km`}
      />
    );
  } else if (mode === "distancia" && timeSec > 0 && paceSec > 0) {
    result = (
      <Result
        label="Tu distancia"
        value={`${formatKm(distanceFrom(timeSec, paceSec))} km`}
        detail={`${formatSpeed(speedKmh(paceSec))} km/h`}
      />
    );
  } else {
    const needs = { ritmo: "la distancia y el tiempo", tiempo: "la distancia y el ritmo", distancia: "el tiempo y el ritmo" }[mode];
    result = <Hint>Completá {needs} para ver el resultado.</Hint>;
  }

  return (
    <Card title="Ritmo, tiempo y distancia" description="Elegí qué querés calcular y completá los otros dos datos.">
      <fieldset>
        <legend className="mb-3 font-bold">¿Qué querés calcular?</legend>
        <div className="flex flex-wrap gap-2">
          {modes.map((option) => (
            <label key={option.value} className="cursor-pointer">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={mode === option.value}
                onChange={() => setMode(option.value)}
                className="peer sr-only"
              />
              <span className={chipClass}>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 md:grid-cols-2">
        {usesDistance && <DistanceField value={distance} onChange={setDistance} invalid={dist.invalid} />}
        {usesTime && <TimeFields legend="Tiempo" value={time} onChange={setTime} invalid={{ m: tm.invalid, s: ts.invalid }} />}
        {usesPace && <PaceFields value={pace} onChange={setPace} invalidSeconds={ps.invalid} />}
      </div>

      <div role="status">
        {result}
      </div>
    </Card>
  );
}

// ---------- 2. Tu marca en otras distancias ----------

function RacePredictor() {
  const [base, setBase] = useState(RACE_DISTANCES[1].id);
  const [time, setTime] = useState<TimeValue>({ h: "", m: "", s: "" });
  const name = useId();

  const th = read(time.h);
  const tm = read(time.m, 60);
  const ts = read(time.s, 60);
  const timeSec = toSeconds(th.value, tm.value, ts.value);
  const baseRace = RACE_DISTANCES.find((race) => race.id === base) ?? RACE_DISTANCES[0];
  const invalid = th.invalid || tm.invalid || ts.invalid;

  return (
    <Card title="Tu marca en otras distancias" description="Con tu marca actual estimamos cuánto tardarías en otras distancias.">
      <fieldset>
        <legend className="mb-3 font-bold">Distancia de tu marca</legend>
        <div className="flex flex-wrap gap-2">
          {RACE_DISTANCES.map((race) => (
            <label key={race.id} className="cursor-pointer">
              <input
                type="radio"
                name={name}
                value={race.id}
                checked={base === race.id}
                onChange={() => setBase(race.id)}
                className="peer sr-only"
              />
              <span className={chipClass}>{race.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <TimeFields legend="Tu tiempo" value={time} onChange={setTime} invalid={{ m: tm.invalid, s: ts.invalid }} />

      <div role="status">
        {invalid ? (
          <Hint error>{tm.invalid || ts.invalid ? outOfRange : "Revisá los datos: usá solo números."}</Hint>
        ) : timeSec > 0 ? (
          <table className="w-full text-left">
            <caption className="sr-only">Tiempos estimados</caption>
            <thead>
              <tr className="border-b border-line text-sm text-muted-foreground">
                <th scope="col" className="pb-2 font-medium">Distancia</th>
                <th scope="col" className="pb-2 font-medium">Tiempo</th>
                <th scope="col" className="pb-2 text-right font-medium">Ritmo</th>
              </tr>
            </thead>
            <tbody>
              {RACE_DISTANCES.map((race) => {
                const predicted = predictTime(timeSec, baseRace.km, race.km);
                const isBase = race.id === baseRace.id;
                return (
                  <tr key={race.id} className={cn("border-b border-line last:border-0", isBase && "text-bordo")}>
                    <th scope="row" className="py-3 font-bold">
                      {race.label}
                      {isBase && <span className="ml-2 text-xs font-medium uppercase tracking-wider">Tu marca</span>}
                    </th>
                    <td className="py-3 font-display text-xl font-black">{formatDuration(predicted)}</td>
                    <td className="py-3 text-right text-muted-foreground">{formatDuration(paceFrom(predicted, race.km))} /km</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <Hint>Completá tu tiempo para ver las estimaciones.</Hint>
        )}
      </div>
    </Card>
  );
}

// ---------- 3. Calorías ----------

function CalorieEstimator() {
  const [weight, setWeight] = useState("");
  const [distance, setDistance] = useState("");
  const weightId = useId();
  const w = read(weight);
  const dist = read(distance);
  const invalid = w.invalid || dist.invalid;

  return (
    <Card title="Calorías" description="Una estimación de lo que gastás corriendo, según tu peso y la distancia.">
      <div className="flex flex-col gap-3">
        <label htmlFor={weightId} className="font-bold">
          Tu peso
        </label>
        <div className="flex items-center gap-3">
          <input
            id={weightId}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            inputMode="decimal"
            autoComplete="off"
            placeholder="0"
            aria-invalid={w.invalid || undefined}
            className={cn(inputClass, "max-w-[9rem]")}
          />
          <span className="font-bold text-muted-foreground">kg</span>
        </div>
      </div>
      <DistanceField value={distance} onChange={setDistance} invalid={dist.invalid} />
      <div role="status">
        {invalid ? (
          <Hint error>Revisá los datos: usá solo números.</Hint>
        ) : w.value > 0 && dist.value > 0 ? (
          <Result label="Gasto estimado" value={`${formatKcal(runningCalories(w.value, dist.value))} kcal`} />
        ) : (
          <Hint>Completá tu peso y la distancia para ver el resultado.</Hint>
        )}
      </div>
    </Card>
  );
}

export function PaceCalculator() {
  return (
    <div className="flex flex-col gap-5">
      <PaceTimeDistance />
      <div className="grid gap-5 lg:grid-cols-2">
        <RacePredictor />
        <CalorieEstimator />
      </div>
    </div>
  );
}
