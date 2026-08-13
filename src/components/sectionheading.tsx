interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  onDark?: boolean;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  onDark,
  light,
  center,
}: Props) {
  const dark = onDark || light;
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex  items-center gap-2 rounded-full border border-gold/50 bg-ivory/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-gold backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--color-gold)]" />
          {eyebrow}
        </span>
      )}
      <p className={`mt-2 text-2xl font-medium tracking-tight sm:text-3xl ${dark ? "text-ivory" : ""}`}>{title}</p>
      <div
        className={`kente-band kente-band--thin mt-4 max-w-40 ${center ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {intro && (
        <p className={`mt-5 text-sm ${dark ? "text-ivory/70" : "opacity-80"}`}>{intro}</p>
      )}
    </div>
  );
}
