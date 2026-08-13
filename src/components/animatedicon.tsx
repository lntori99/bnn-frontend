"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Tones use the tokens actually defined in globals.css @theme.
 *  (Note: `brand` is used elsewhere in the app but has no --color-brand token,
 *  so those utilities generate no CSS — forest/gold are the real ones.) */
const TONES = {
  /** Brand blue on a light card. */
  forest: "bg-forest/10 text-forest",
  /** Sahel gold on a light card. */
  gold: "bg-[#d6ac63]/15 text-[#d6ac63]",
  /** Gold on ink/forest-deep cards, where a tinted fill would disappear. */
  onDark: "bg-white/10 text-[#d6ac63]",
} as const;

const SIZES = {
  sm: "h-7 w-7 text-[0.7rem]",
  md: "h-11 w-11 text-lg",
} as const;

export default function AnimatedIcon({
  children,
  tone = "forest",
  size = "md",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  tone?: keyof typeof TONES;
  size?: keyof typeof SIZES;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const tile = `grid shrink-0 place-items-center rounded-full ${SIZES[size]} ${TONES[tone]} ${className}`;

  // The glyph carries the hover transform via CSS rather than framer-motion, so
  // hovering anywhere on a `group` card animates it — and it cannot fight the
  // inline transform framer leaves behind after the entrance spring.
  const glyph = (
    <span className="transition-transform duration-300 ease-out group-hover:scale-110">
      {children}
    </span>
  );

  if (reduce) return <span className={tile}>{glyph}</span>;

  return (
    <motion.span
      className={tile}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 300, damping: 18, delay }}
    >
      {glyph}
    </motion.span>
  );
}
