interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  onDark?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
}: Props) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex  items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
          {eyebrow}
        </span>
      )}
      <p className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">{title}</p>
      <div
        className={`kente-band kente-band--thin mt-4 max-w-40 ${center ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {intro && (
        <p className="mt-5 text-sm  opacity-80">{intro}</p>
      )}
    </div>
  );
}
