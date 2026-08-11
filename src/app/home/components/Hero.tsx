import Link from "next/link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 lg:px-8 lg:pt-28">
        <p className="eyebrow">A pan-African movement · Founded by Lucy Quist</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-extrabold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
          Africa's future will be <span className="text-gold">built by Africans.</span>
        </h1>
        <div className="kente-band mt-8 max-w-xl" aria-hidden="true" />
        <p className="mt-8 max-w-2xl text-lg text-ivory/85">
          Bold New Normal turns ambition into enterprise — connecting founders, leaders
          and builders who are creating, leading and scaling African solutions.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/community" className="btn btn-gold">Join the Community</Link>
          <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-forest">
            Buy the Book
          </a>
          <Link href="/partner" className="btn btn-outline text-ivory">Partner With Us</Link>
        </div>
      </div>
    </section>
  );
}
