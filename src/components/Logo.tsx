import Link from "next/link";

export default function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Bold New Normal — home">
      <span className="flex h-9 w-9 items-center justify-center bg-gold font-display text-sm font-extrabold text-ink">
        BN
      </span>
      <span className={`font-display text-sm font-bold uppercase leading-tight tracking-wide ${onDark ? "text-ivory" : "text-ink"}`}>
        Bold New<br />Normal
      </span>
    </Link>
  );
}
