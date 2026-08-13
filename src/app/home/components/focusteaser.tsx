import Link from "next/link";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import Reveal from "@/components/reveal";
import { placeholderImages } from "@/data/placeholder-images";
import { FocusPage } from "@/models/response/content-response";

export default function FocusTeaser({ focus }: { focus: FocusPage }) {
  return (
    <section className="w-full ">
      <Reveal>
        <Link
          href={`/focus/${focus.year}/${focus.slug}`}
          className="on-dark group relative block overflow-hidden bg-ink"
        >
          <Image
            src={placeholderImages.focus}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/60 to-transparent" />
          <div className="relative mx-auto grid max-w-7xl gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="inline-flex mb-4 items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
                {focus.year} Focus
              </span>
              <p className="mt-4 max-w-2xl tracking-tight font-medium text-3xl leading-tight text-ivory sm:text-4xl">
                {focus.title}
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/70 sm:text-sm">
                {focus.intro}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 font-semibold text-[#d6ac63]">
              Explore the {focus.year} focus
              <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
