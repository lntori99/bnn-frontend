"use client";

import { useEffect, useRef, useState } from "react";

const CLIP_SECONDS = 40;
const PLAYING = 1;

interface YTPlayer {
  getDuration: () => number;
  getCurrentTime: () => number;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  playVideo: () => void;
  mute: () => void;
  destroy: () => void;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        target: HTMLElement,
        options: {
          videoId: string;
          width?: string;
          height?: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { data: number; target: YTPlayer }) => void;
          };
        }
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export default function YouTubeBackground({ videoId, reduceMotion }: { videoId: string; reduceMotion: boolean | null }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (reduceMotion || !mountRef.current) return;
    let cancelled = false;
    let loopInterval: ReturnType<typeof setInterval> | null = null;

    function createPlayer() {
      if (cancelled || !mountRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(mountRef.current, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          playsinline: 1,
          loop: 1,
          playlist: videoId,
        },
        events: {
          onReady: (event) => {
            const player = event.target;
            const duration = player.getDuration();
            const maxStart = Math.max(0, duration - CLIP_SECONDS - 2);
            const start = Math.random() * maxStart;
            const end = start + CLIP_SECONDS;

            player.mute();
            player.seekTo(start, true);
            player.playVideo();

            loopInterval = setInterval(() => {
              const t = player.getCurrentTime();
              if (t >= end || t < start - 1) player.seekTo(start, true);
            }, 1000);
          },
          onStateChange: (event) => {
            if (event.data === PLAYING) setIsPlaying(true);
          },
        },
      });
    }

    if (window.YT?.Player) {
      createPlayer();
    } else {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        createPlayer();
      };
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      if (loopInterval) clearInterval(loopInterval);
      playerRef.current?.destroy();
    };
  }, [videoId, reduceMotion]);

  if (reduceMotion) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-ink">
      <div
        className={`absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:h-full [&>iframe]:w-full ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <div ref={mountRef} />
      </div>
    </div>
  );
}
