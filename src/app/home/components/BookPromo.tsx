import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function BookPromo() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8" aria-label="The book">
      <Reveal>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="mx-auto flex aspect-[3/4] w-64 items-center justify-center border-8 border-ink bg-forest p-6 text-center shadow-[12px_12px_0_0_var(--color-gold)]">
            <p className="font-display text-2xl font-extrabold uppercase leading-tight text-ivory">
              The Bold<br />New<br />Normal
              <span className="mt-4 block text-sm font-medium normal-case text-gold">Lucy Quist</span>
            </p>
          </div>
          <div>
            <p className="eyebrow">The book that started it</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">The Bold New Normal</h2>
            <div className="kente-band kente-band--thin mt-4 max-w-40" aria-hidden="true" />
            <p className="mt-5 text-lg opacity-80">
              Lucy Quist's blueprint for changing the African narrative: why prosperity
              must be created by Africans, and how a new normal of ambition, leadership
              and enterprise becomes possible.
            </p>
            <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-8">
              Buy the Book
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
