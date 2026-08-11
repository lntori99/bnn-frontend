interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
}

export default function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="on-dark bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-2 max-w-4xl text-4xl font-bold uppercase sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-ivory/80">{intro}</p>}
      </div>
      <div className="kente-band" aria-hidden="true" />
    </section>
  );
}
