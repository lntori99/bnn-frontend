import Image from "next/image";
import Reveal from "@/components/reveal";
import { site } from "@/data/site";

export default function BookPromo() {
  return (
    <section id="book" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[auto_1fr] lg:gap-20 lg:px-8">
        <Reveal className="mx-auto">
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-full bg-[#d6ac63]/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative aspect-163/261 w-60 overflow-hidden rounded-2xl shadow-2xl sm:w-72">
              <Image
                src="/book/img_book_front.jpg"
                alt="The Bold New Normal, by Lucy Quist — book cover"
                fill
                sizes="(min-width: 640px) 288px, 240px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <span className="inline-flex  items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
            Buy the book
          </span>
          <p className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl tracking-tight font-medium">
            Start where the movement started.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            <em>The Bold New Normal</em>, authored by Lucy Quist, is the
            foundational work that inspired the wider TBNN platform. Its ideas
            underpin TBNN's call for Africans to reject survival thinking and
            inherited limitations, and to intentionally create the
            institutions, enterprises, leadership cultures and opportunities
            required for shared prosperity.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href={site.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#d6ac63] px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-[#d6ac63]-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              Buy the Book
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-current px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              Why this book matters
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
