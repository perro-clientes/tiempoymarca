import type { Coach } from "@/content/types";

export function CoachesList({ coaches }: { coaches: readonly Coach[] }) {
  return (
    <ul className="border-t border-line">
      {coaches.map((coach) => (
        <li key={coach.id} className="flex flex-col gap-1.5 border-b border-line py-5">
          <h3 className="font-display text-title font-extrabold">{coach.name}</h3>
          <p className="text-muted-foreground">{coach.bio}</p>
        </li>
      ))}
    </ul>
  );
}
