"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { EventItem } from "@/models/response/event-response";

const CLOUDINARY_BASE = "https://res.cloudinary.com/djmddrfv2/video/upload";
const VIDEO_ID =
  "v1786548844/S9._The_Masterclass_Leadership_Responsibility_the_Future_We_Are_Building_-_Lucy_Quist_720p_h264_youtube_retmqw";

const SEGMENT_SECONDS = 20;

/** Start offsets spread across the ~780s source, one picked per page load.
 *
 *  Deliberately a fixed list rather than a random number: every distinct
 *  transformation URL is a Cloudinary derivative that gets transcoded and stored
 *  on first request, so a truly random offset would mean a cold transcode on
 *  every refresh and unbounded derivative growth. Ten stable URLs stay warm in
 *  the CDN and still give a different opening each visit. */
const SEGMENT_STARTS = [30, 105, 180, 255, 330, 405, 480, 555, 630, 705];

/** ac_none strips the audio track — the hero is muted, so it is pure weight.
 *  Trimming also takes the request from 85MB to ~1.5MB. */
const clipUrlFor = (start: number) =>
  `${CLOUDINARY_BASE}/so_${start},du_${SEGMENT_SECONDS},ac_none/${VIDEO_ID}.mp4`;

/** The marquee slides a duplicated row by -50%, so it needs enough items to
 *  overflow the viewport — otherwise a short list leaves a visible gap. */
const MIN_TICKER_ITEMS = 6;

function buildTicker(events: EventItem[]) {
  if (!events.length) return [];
  const repeats = Math.ceil(MIN_TICKER_ITEMS / events.length);
  const filled = Array.from({ length: repeats }, () => events).flat();
  return [...filled, ...filled]; // duplicated for the seamless -50% loop
}

function EventLine({
  event,
  showDiamond = true,
}: {
  event: EventItem;
  showDiamond?: boolean;
}) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="mx-8 flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
    >
      <span className="font-bold text-amber-400">
        {new Date(event.startsAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
        })}
      </span>
      {event.title}
      {/* Venues are long free text (no city field on EventItem), so it is dropped
          on narrow screens rather than pushing the row off-canvas. */}
      <span className="hidden text-white/40 sm:inline">
        — {event.isOnline ? "Online" : event.venue}
      </span>
      {showDiamond && <span className="text-white/20">◆</span>}
    </Link>
  );
}

export default function Hero1Cinematic({ events }: { events: EventItem[] }) {
  // Undefined on the server and on the first client render, so the markup matches
  // and hydration stays clean; the effect then picks the clip. Rendering a random
  // src directly would mismatch between server and client.
  const [clipUrl, setClipUrl] = useState<string>();
  const ticker = buildTicker(events);

  useEffect(() => {
    const start =
      SEGMENT_STARTS[Math.floor(Math.random() * SEGMENT_STARTS.length)];
    setClipUrl(clipUrlFor(start));
  }, []);

  // -mt-16 cancels main's pt-16 so the video runs up under the fixed navbar
  return (
    <section className="relative -mt-16 h-screen w-full overflow-hidden bg-black">
      {/* Video background */}
      <video
        key={clipUrl}
        className="absolute inset-0 h-full w-full object-cover"
        src={clipUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute bg-blend-luminosity inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex mb-4 items-center gap-2 rounded-full border border-[#d6ac63]/50 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-wide text-[#d6ac63] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d6ac63] shadow-[0_0_8px_#d6ac63]" />
          Bold New Normal
        </span>

        <h1 className="max-w-3xl uppercase font-light text-3xl  text-white sm:text-4xl lg:text-7xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15 * 0.12,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mr-3 inline-block"
          >
            Africa's Future,{" "}
            <span className="text-[#d6ac63]  italic">Built by Africans</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 max-w-2xl text-sm lg:text-base  text-white/70"
        >
          Bold New Normal turns ambition into enterprise — connecting founders,
          leaders and builders who are creating, leading and scaling African
          solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/community"
            className="rounded-full bg-[#d6ac63] px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            Join the community
          </Link>
          <a
            href={site.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Buy the book
          </a>
        </motion.div>
      </div>

      {/* Event ticker — absorbed the old FeaturedEvent block, so it carries the
          real event feed rather than placeholder copy. Hidden when there are none. */}
      {events.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15 bg-black/50 backdrop-blur-md">
          {events.length === 1 ? (
            // A single event scrolling would just read as the same line stuttering,
            // so it sits centred and still until there is more than one to cycle.
            <div className="flex justify-center py-3">
              <EventLine event={events[0]} showDiamond={false} />
            </div>
          ) : (
            <motion.div
              className="flex whitespace-nowrap py-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            >
              {ticker.map((e, i) => (
                <EventLine key={`${e.id}-${i}`} event={e} />
              ))}
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
}
