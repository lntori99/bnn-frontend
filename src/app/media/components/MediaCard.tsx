"use client";

import { useState } from "react";
import { HiPlay, HiSpeakerWave } from "react-icons/hi2";
import { MediaItem } from "@/models/response/media-response";

export default function MediaCard({ item }: { item: MediaItem }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="flex h-full flex-col border border-ink/15 bg-ivory">
      <div className="relative aspect-video bg-ink">
        {playing ? (
          // Lightweight embed: iframe only loads after the person chooses to play
          <iframe
            src={item.embedUrl}
            title={item.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center bg-forest-deep"
            aria-label={`Play: ${item.title}`}
          >
            {item.type === "video" ? (
              <HiPlay className="h-14 w-14 text-gold transition group-hover:scale-110" aria-hidden="true" />
            ) : (
              <HiSpeakerWave className="h-14 w-14 text-gold transition group-hover:scale-110" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-forest">
          {item.event} · {item.year} · {item.type}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3>
        {item.speaker && <p className="mt-1 text-sm font-semibold opacity-70">{item.speaker}</p>}
        {item.description && <p className="mt-2 text-sm opacity-75">{item.description}</p>}
      </div>
    </article>
  );
}
