import { cn } from "@/lib/utils";

export type Step = { title: string; description: string };

const number = (i: number) => String(i + 1).padStart(2, "0");

/** Pasos numerados en columna, separados por líneas (¿Cómo es una clase?). */
export function StepsList({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className="border-t border-line">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-6 border-b border-line py-5">
          <span aria-hidden className="font-display text-3xl font-black leading-none text-bordo">
            {number(i)}
          </span>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-bold">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Pasos en fila con línea superior bordó (Cómo sumarte). */
export function StepsRow({ steps, className }: { steps: readonly Step[]; className?: string }) {
  return (
    <ol className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5", className)}>
      {steps.map((step, i) => (
        <li key={step.title} className="flex flex-col gap-3 border-t-[3px] border-bordo pt-6">
          <span aria-hidden className="font-display text-4xl font-black leading-none text-bordo">
            {number(i)}
          </span>
          <h3 className="text-lg font-bold">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
