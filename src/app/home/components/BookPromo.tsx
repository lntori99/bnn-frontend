import Image from "next/image";
import Reveal from "@/components/reveal";
import { site } from "@/data/site";

export default function BookPromo() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8" aria-label="The book">
      <Reveal>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto aspect-163/261 w-56 shadow-[12px_12px_0_0_var(--color-gold)] sm:w-64">
            <Image
              src="/book/img_book_front.jpg"
              alt="The Bold New Normal, by Lucy Quist — book cover"
              fill
              sizes="(min-width: 640px) 256px, 224px"
              className="object-cover"
            />
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
            <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xs bg-gold px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 mt-8">
              Buy the Book
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
