import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import Reveal from "@/components/reveal";

export default function WhatIsBNN() {
  return (
    <section id="intro" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <span className="inline-flex mb-2 items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
            What is the Bold New Normal?
          </span>
          <p className="mt-4 tracking-tight font-medium text-3xl leading-tight sm:text-4xl ">
            A movement that refuses the old story about Africa.
          </p>
          <p className="mt-4 text-sm   text-ink/70 sm:text-sm">
            The bold new normal is a simple, radical idea: Africans everywhere
            on the continent and across the diaspora building, leading and
            scaling the solutions Africa needs. Not waiting for change. Creating
            it, sector by sector, enterprise by enterprise.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 font-semibold text-forest transition-colors hover:text-forest-deep"
          >
            Read the BNN story
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/images/img_lucy.jpg"
              alt="Lucy Quist, founder of Bold New Normal"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-60 bg-ink p-6 shadow-[8px_8px_0_0_var(--color-gold)] sm:block">
            <p className="font-display text-4xl text-[#d6ac63]">5</p>
            <p className="mt-1 text-sm text-ivory/70">
              sector communities building across the continent
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
