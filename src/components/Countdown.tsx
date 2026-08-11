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

export default function Countdown({ target, className = "" }: { target: string; className?: string }) {
  const [left, setLeft] = useState<ReturnType<typeof diff> | undefined>(undefined);

  useEffect(() => {
    setLeft(diff(target));
    const t = setInterval(() => setLeft(diff(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  if (left === undefined) {
    return <p className={`font-display text-sm ${className}`} aria-hidden="true">&nbsp;</p>;
  }

  // Countdown expires automatically after event start
  if (left === null) {
    return (
      <p className={`font-display text-lg font-bold text-gold ${className}`} role="status">
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
    <div className={`flex gap-3 ${className}`} role="timer" aria-label="Time until event starts">
      {cells.map((c) => (
        <div key={c.l} className="min-w-16 border border-gold/40 bg-ink px-2 py-2 text-center">
          <span className="block font-mono text-2xl font-bold tabular-nums text-gold">
            {String(c.v).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-ivory/70">{c.l}</span>
        </div>
      ))}
    </div>
  );
}
