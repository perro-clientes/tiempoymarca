import { MapPin } from "lucide-react";
import type { ScheduleSlot, TrainingLocation } from "@/content/types";
import { cn } from "@/lib/utils";
import { CtaLink } from "./cta-link";

/** Tarjetas de horarios. Pensadas para fondos oscuros (.dark). */
export function ScheduleGrid({
  slots,
  size = "lg",
  className,
}: {
  slots: readonly ScheduleSlot[];
  size?: "lg" | "sm";
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-3",
        size === "lg" ? "sm:grid-cols-2 lg:grid-cols-4 lg:gap-4" : "grid-cols-1 sm:grid-cols-2",
        className,
      )}
    >
      {slots.map((slot) => (
        <li
          key={slot.id}
          className={cn("flex flex-col rounded-3xl bg-aubergine-2 text-white", size === "lg" ? "gap-2 p-7" : "gap-1 rounded-2xl p-4")}
        >
          <span
            className={cn(
              "font-bold text-pink-strong",
              size === "lg" ? "text-sm uppercase tracking-[0.14em]" : "text-[0.95rem]",
            )}
          >
            {slot.daysLabel}
          </span>
          {size === "lg" ? (
            <>
              <span className="font-display text-5xl font-black leading-none">{slot.time}</span>
              <span className="text-on-dark">Con {slot.coachesLabel}</span>
            </>
          ) : (
            <span>
              {slot.time} · {slot.coachesLabel}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function LocationCard({ location }: { location: TrainingLocation }) {
  return (
    <div className="dark flex flex-col gap-5 rounded-3xl bg-bordo p-6 text-white sm:flex-row sm:items-center sm:justify-between md:px-8">
      <div className="flex gap-4">
        <MapPin aria-hidden className="mt-0.5 size-6 shrink-0" strokeWidth={1.75} />
        <div>
          <p className="text-lg font-bold">{location.name}</p>
          <p>
            {location.venue} · {location.address}
          </p>
        </div>
      </div>
      <CtaLink href={location.mapsUrl} size="default" className="shrink-0">
        Cómo llegar
      </CtaLink>
    </div>
  );
}
