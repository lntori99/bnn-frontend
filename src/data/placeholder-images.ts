/**
 * TEMPORARY placeholder imagery — Unsplash, used until BNN supplies final assets.
 *
 * Every photo here has been checked to resolve and to be subject-appropriate for a
 * pan-African movement. When the real assets arrive, drop them in /public and delete
 * this file; the only consumers are `@/data/fallback` and the components listed below.
 *
 * Requires `images.unsplash.com` in next.config.ts remotePatterns.
 */

const UNSPLASH = "https://images.unsplash.com";

/** Unsplash serves resized/optimised derivatives from query params. */
function photo(id: string, w: number, h?: number) {
  const crop = h ? `&h=${h}` : "";
  return `${UNSPLASH}/${id}?auto=format&fit=crop&w=${w}${crop}&q=80`;
}

export const placeholderImages = {
  /** Black Star Square / Independence Arch, Accra — "Freedom and Justice, AD 1957". */
  hero: photo("photo-1630386226447-af0a955c1009", 2000, 1100),

  events: {
    /** 2022 — Taking Action, Creating Prosperity. */
    conference2022: photo("photo-1591115765373-5207764f72e7", 1200, 675),
    /** 2023 — Leveraging Opportunity. */
    conference2023: photo("photo-1560439514-4e9645039924", 1200, 675),
    /** 2024 — Transforming Mindsets, Creating Leaders of Prosperity. */
    conference2024: photo("photo-1517245386807-bb43f82c33c4", 1200, 675),
    /** 2025 — Transformation through Culture and Language. Conference audience, low light. */
    conference2025: photo("photo-1540575467063-178a50c2df87", 1200, 675),
    /** 2026 — The Power of the Diaspora, London (first UK edition). */
    diaspora2026: photo("photo-1529107386315-e1a2ed48a620", 1200, 675),
    /** 2027 — Accra, Ghana (upcoming, Feb 2027). Two women at an African conference. */
    conference2027: photo("photo-1744973149087-179e3ed54eae", 1200, 675),
  },

  media: {
    /** Woman speaking at a podium — stands in for the keynote. */
    keynote: photo("photo-1744973149714-46786187c6aa", 800, 450),
    /** Market trader — stands in for the enterprise/scale session. */
    enterprise: photo("photo-1687422808565-929533931584", 800, 450),
  },

  team: {
    /** Placeholder for the founder portrait. */
    founder: photo("photo-1573497019418-b400bb3ab074", 800, 1000),
    member2: photo("photo-1563132337-f159f484226c", 600, 750),
    member3: photo("photo-1614023342667-6f060e9d1e04", 600, 750),
  },

  /** Kente-pattern textiles — echoes the site's kente band motif. */
  community: photo("photo-1692689383138-c2df3476072c", 1200, 800),

  /** Young African professionals collaborating — stands in for the "What is BNN" intro. */
  collaboration: photo("photo-1521737604893-d14cc237f11d", 1400),

  /** A leadership/boardroom scene — stands in for the annual focus teaser. */
  focus: photo("photo-1475721027785-f74eccf877e2", 1600),

  sectors: {
    healthcare: photo("photo-1576091160399-112ba8d25d1d", 1200),
    education: photo("photo-1523240795612-9a054b0db644", 1200),
    agriculture: photo("photo-1500937386664-56d1dfef3854", 1200),
    realEnterprise: photo("photo-1556761175-b413da4baf72", 1200),
    tradeBeyondBorders: photo("photo-1494412574643-ff11b0a5c1c3", 1200),
  },
} as const;
