export type BeforeAfter = { before: string; after: string };

export function BeforeAfterCards({ items }: { items: readonly BeforeAfter[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.after} className="flex flex-col gap-3 rounded-3xl border border-line bg-white p-7">
          <p className="text-sm text-muted-foreground">
            <span className="sr-only">Antes: </span>
            <s>{item.before}</s>
          </p>
          <p className="font-display text-title font-extrabold">
            <span className="sr-only">Ahora: </span>
            {item.after}
          </p>
        </li>
      ))}
    </ul>
  );
}
