"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "@/components/SectionHeading";
import { MediaItem } from "@/models/response/media-response";
import { HiPlay, HiSpeakerWave } from "react-icons/hi2";

export default function MediaFeature({ items }: { items: MediaItem[] }) {
  return (
    <section className="on-dark bg-ink py-20 text-ivory">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="From the archive" title="Watch & listen" />
          <Link href="/media" className="btn btn-outline text-ivory">Full media library</Link>
        </div>
        <Swiper
          className="mt-10"
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
        >
          {items.map((m) => (
            <SwiperSlide key={m.id} className="pb-10">
              <Link href="/media" className="group block border border-ivory/15 bg-ink-soft">
                <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-forest-deep">
                  {m.thumbnail && (
                    <Image
                      src={m.thumbnail}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover opacity-70 transition group-hover:opacity-50"
                    />
                  )}
                  {m.type === "video" ? (
                    <HiPlay className="relative h-12 w-12 text-gold drop-shadow-lg transition group-hover:scale-110" aria-hidden="true" />
                  ) : (
                    <HiSpeakerWave className="relative h-12 w-12 text-gold drop-shadow-lg transition group-hover:scale-110" aria-hidden="true" />
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {m.event} · {m.year}
                  </p>
                  <h3 className="mt-1 font-display text-base font-bold">{m.title}</h3>
                  <p className="mt-1 text-sm text-ivory/70">{m.speaker}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
