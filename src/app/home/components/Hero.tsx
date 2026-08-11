import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { placeholderImages } from "@/data/placeholder-images";

export default function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink text-ivory">
      {/* Backdrop sits behind a heavy scrim — the headline must stay legible over it. */}
      <Image
        src={placeholderImages.hero}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/40"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 lg:px-8 lg:pt-28">
        <p className="eyebrow">A pan-African movement · Founded by Lucy Quist</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold  leading-[1.05] sm:text-5xl lg:text-6xl">
          Africa's future will be <span className="text-gold">built by Africans.</span>
        </h2>
        <div className="kente-band mt-8 max-w-xl" aria-hidden="true" />
        <p className="mt-8 max-w-2xl text-base text-ivory/85">
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
