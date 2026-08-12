import Hero from "./components/hero";
import WhatIsBNN from "./components/whatisbnn";
import FocusTeaser from "./components/focusteaser";
import MediaFeature from "./components/mediafeature";
import BookPromo from "./components/bookpromo";
import CommunityPreview from "./components/communitypreview";
import Roadmap from "./components/roadmap";
import CTASection from "@/components/ctasection";
import { getEvents } from "@/services/events";
import { getMedia } from "@/services/media";
import { getFocusPages, getRoadmap } from "@/services/content";

export default async function Home() {
  const [events, media, roadmap, focusPages] = await Promise.all([
    getEvents(),
    getMedia(),
    getRoadmap(),
    getFocusPages(),
  ]);
  const focus = focusPages[0];

  // Upcoming first, soonest first — the featured event leads the hero ticker.
  const tickerEvents = [...events]
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));

  return (
    <>
      <Hero events={tickerEvents} />
      <WhatIsBNN />
      {focus && <FocusTeaser focus={focus} />}
      <MediaFeature items={media.slice(0, 6)} />
      <BookPromo />
      <CommunityPreview />
      <Roadmap milestones={roadmap} />
      <CTASection />
    </>
  );
}
