interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  onDark?: boolean;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, intro, center }: Props) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
      <div className={`kente-band kente-band--thin mt-4 max-w-40 ${center ? "mx-auto" : ""}`} aria-hidden="true" />
      {intro && <p className="mt-5 text-base font-medium opacity-80">{intro}</p>}
    </div>
  );
}
