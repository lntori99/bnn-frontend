"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { site } from "@/data/site";

const slides = [
  {
    image: "/images/img_cta_lucy-quist.jpg",
    title: "Join the Community",
    description: "Pick a sector. Build with peers across the continent.",
    href: "/community",
    cta: "Choose your sector",
  },
  {
    image: "/images/img_cta_lucy-quist-2.jpg",
    title: "Partner With Us",
    description: "Fund, sponsor or collaborate on the movement's work.",
    href: "/partner",
    cta: "Start a conversation",
  },
  {
    image: "/images/img_cta_lucy-quist-3.jpg",
    title: "Join the Team",
    description: "Bring your skills to Bold New Normal itself.",
    href: "/join-team",
    cta: "Express interest",
  },
];

export default function CTASection() {
  return (
    <section className="on-dark bg-forest-deep text-ivory">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="cta-swiper"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.title}>
            <div className="relative flex items-center overflow-hidden py-16">
              <Image
                src={s.image}
                alt=""
                aria-hidden="true"
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/60" />
              <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                  <p className=" text-3xl font-medium tracking-tight sm:text-4xl">
                    {s.title}
                  </p>
                  <p className="mt-4 text-base text-ivory/80">
                    {s.description}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 rounded-full bg-[#d6ac63] px-4 py-2 text-sm font-medium text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-[#d6ac63]-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
                    >
                      {s.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
