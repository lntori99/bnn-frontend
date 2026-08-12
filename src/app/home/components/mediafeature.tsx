"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { HiPlay, HiSpeakerWave } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "@/components/reveal";
import { MediaItem } from "@/models/response/media-response";

export default function MediaFeature({ items }: { items: MediaItem[] }) {
  return (
    <section className="on-dark overflow-hidden bg-ink py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="inline-flex mb-4 items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
              From the stage
            </span>
            <p className="mt-4 max-w-xl text-3xl font-medium tracking-tight text-ivory sm:text-4xl">
              Watch and listen to the movement in motion.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/media"
              className="inline-flex text-sm items-center gap-2 rounded-full border border-current px-5 py-2 font-medium text-ivory transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              Open the media library
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            loop
            className="media-swiper pb-12!"
          >
            {items.map((m) => (
              <SwiperSlide key={m.id}>
                <Link
                  href="/media"
                  className="group block overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/3"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {m.thumbnail && (
                      <Image
                        src={m.thumbnail}
                        alt={m.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/10" />
                    <span className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-xl text-ink transition-transform duration-300 group-hover:scale-110">
                      {m.type === "video" ? (
                        <HiPlay className="ml-0.5" />
                      ) : (
                        <HiSpeakerWave />
                      )}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase text-gold">
                      {m.event} · {m.year}
                    </p>
                    <p className="mt-2 line-clamp-2  text-base leading-snug text-ivory">
                      {m.title}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
