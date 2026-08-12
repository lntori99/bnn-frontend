"use client";

interface Props {
  page: number;
  pageCount: number;
  onChange: (p: number) => void;
}

export default function Pagination({ page, pageCount, onChange }: Props) {
  if (pageCount <= 1) return null;
  return (
    <nav aria-label="Pagination" className="mt-10 flex justify-center gap-2">
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          aria-current={p === page ? "page" : undefined}
          className={`h-10 w-10 font-display text-sm font-bold ${p === page ? "bg-forest text-ivory" : "bg-sand hover:bg-gold"}`}
        >
          {p}
        </button>
      ))}
    </nav>
  );
}
