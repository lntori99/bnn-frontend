"use client";

import { useEffect, useState } from "react";

function diff(target: string) {
  const ms = new Date(target).getTime() - Date.now();
  if (ms <= 0) return null;
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export default function Countdown({
  target,
  className = "",
}: {
  target: string;
  className?: string;
}) {
  const [left, setLeft] = useState<ReturnType<typeof diff> | undefined>(
    undefined,
  );

  useEffect(() => {
    setLeft(diff(target));
    const t = setInterval(() => setLeft(diff(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  if (left === undefined) {
    return (
      <div
        className={`grid w-full max-w-96 grid-cols-4 gap-2 sm:gap-3 ${className}`}
        aria-hidden="true"
      >
        {["Days", "Hours", "Min", "Sec"].map((label) => (
          <div
            key={label}
            className="min-w-0 rounded-xl border border-gold/40 bg-ink px-1.5 py-2 text-center sm:rounded-2xl sm:px-2"
          >
            <span className="block text-xl font-bold tabular-nums text-gold sm:text-2xl">
              --
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ivory/70 sm:text-[10px] sm:tracking-widest">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Countdown expires automatically after event start
  if (left === null) {
    return (
      <p
        className={`text-lg font-medium tracking-tight text-gold ${className}`}
        role="status"
      >
        Happening now
      </p>
    );
  }

  const cells = [
    { v: left.days, l: "Days" },
    { v: left.hours, l: "Hours" },
    { v: left.minutes, l: "Min" },
    { v: left.seconds, l: "Sec" },
  ];

  return (
    <div
      className={`grid w-full max-w-96 grid-cols-4 gap-2 sm:gap-3 ${className}`}
      role="timer"
      aria-label="Time until event starts"
    >
      {cells.map((c) => (
        <div
          key={c.l}
          className="min-w-0 rounded-xl border border-gold/40 bg-ink px-1.5 py-2 text-center sm:rounded-2xl sm:px-2"
        >
          {/* tabular-nums keeps Inter's digits fixed-width so the timer doesn't jitter */}
          <span className="block text-xl font-bold tabular-nums text-gold sm:text-2xl">
            {String(c.v).padStart(2, "0")}
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ivory/70 sm:text-[10px] sm:tracking-widest">
            {c.l}
          </span>
        </div>
      ))}
    </div>
  );
}
