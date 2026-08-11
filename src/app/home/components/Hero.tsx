"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { HiArrowUpRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { site } from "@/data/site";
import YouTubeBackground from "./youtube-background";

const HERO_VIDEO_ID = "VetbxbM3cYo";
const SLIDE_DURATION = 7000;

const line: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.35 + i * 0.14,
    },
  }),
};

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.9 + i * 0.15,
    },
  }),
};

const content: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 80 : -80 }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    transition: { duration: 0.45, ease: "easeIn" },
  }),
};

interface Slide {
  headline: [string, string];
  paragraph: string;
  cta: React.ReactNode;
}

const slides: Slide[] = [
  {
    headline: ["Africa's future,", "built by Africans."],
    paragraph:
      "Bold New Normal turns ambition into enterprise — connecting founders, leaders and builders who are creating, leading and scaling African solutions.",
    cta: (
      <Link
        href="/community"
        className="inline-flex items-center gap-2 rounded-xs bg-gold px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
      >
        Join the Community
      </Link>
    ),
  },
  {
    headline: ["The book that started it,", "The Bold New Normal."],
    paragraph:
      "Lucy Quist's blueprint for changing the African narrative: why prosperity must be created by Africans, and how a new normal of ambition, leadership and enterprise becomes possible.",
    cta: (
      <a
        href={site.bookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xs bg-forest px-6 py-[0.8rem] text-[0.95rem] font-bold text-ivory transition duration-150 ease-out hover:-translate-y-px hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
      >
        Buy the Book
      </a>
    ),
  },
  {
    headline: ["Movements scale,", "on partnership."],
    paragraph:
      "Corporate partnerships, sponsorship, programme support and philanthropy — organisations and individuals powering BNN's work across the continent.",
    cta: (
      <Link
        href="/partner"
        className="group inline-flex items-center gap-2 rounded-xs border-2 border-current px-6 py-[0.8rem] text-[0.95rem] font-bold transition duration-150 ease-out hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 text-ivory"
      >
        Partner With Us
        <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    ),
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (nextIndex: number, dir: number) => {
    setSlide([(nextIndex + slides.length) % slides.length, dir]);
  };
  const goNext = () => goTo(index + 1, 1);
  const goPrev = () => goTo(index - 1, -1);

  useEffect(() => {
    if (reduceMotion) return;
    timerRef.current = setInterval(() => {
      setSlide(([i]) => [(i + 1) % slides.length, 1]);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reduceMotion, index]);

  const slide = slides[index];

  return (
    <section className="on-dark relative -mt-16 h-[85vh] min-h-130 w-full overflow-hidden bg-ink">
      <YouTubeBackground videoId={HERO_VIDEO_ID} reduceMotion={reduceMotion} />

      {/* Legibility scrims */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content is capped to the site's standard max width and centered in the frame */}
      <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-center px-6 sm:px-10 lg:px-14">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={reduceMotion ? undefined : content}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <h2 className="max-w-2xl text-3xl font-extrabold  leading-[0.95] tracking-wide text-ivory sm:text-4xl lg:text-5xl">
              {slide.headline.map((text, i) => (
                <span key={text} className="block overflow-hidden">
                  <motion.span
                    className={`block ${i === 1 ? "text-gold" : ""}`}
                    variants={line}
                    custom={i}
                    initial={reduceMotion ? false : "hidden"}
                    animate="show"
                  >
                    {text}
                  </motion.span>
                </span>
              ))}
            </h2>

            <div
              className="kente-band kente-band--thin mt-5 max-w-40"
              aria-hidden="true"
            />

            <motion.p
              className="mt-5 max-w-xl text-sm font-medium text-ivory/90 lg:mt-6 lg:text-base"
              variants={fade}
              custom={1}
              initial={reduceMotion ? false : "hidden"}
              animate="show"
            >
              {slide.paragraph}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={fade}
              custom={2}
              initial={reduceMotion ? false : "hidden"}
              animate="show"
            >
              {slide.cta}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / next arrows */}
      <button
        type="button"
        aria-label="Previous"
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-ivory/20 p-2 text-ivory transition-colors hover:border-gold hover:text-gold sm:left-6"
      >
        <HiChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={goNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-ivory/20 p-2 text-ivory transition-colors hover:border-gold hover:text-gold sm:right-6"
      >
        <HiChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-gold" : "w-2 bg-ivory/50 hover:bg-ivory/80"}`}
          />
        ))}
      </div>
    </section>
  );
}
