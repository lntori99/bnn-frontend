import Hero from "./components/Hero";
import FeaturedEvent from "./components/FeaturedEvent";
import WhatIsBNN from "./components/WhatIsBNN";
import FocusTeaser from "./components/FocusTeaser";
import MediaFeature from "./components/MediaFeature";
import BookPromo from "./components/BookPromo";
import CommunityPreview from "./components/CommunityPreview";
import Roadmap from "./components/Roadmap";
import CTASection from "@/components/CTASection";
import { getFeaturedEvent } from "@/services/events";
import { getMedia } from "@/services/media";
import { getRoadmap } from "@/services/content";

export default async function Home() {
  const [event, media, roadmap] = await Promise.all([
    getFeaturedEvent(),
    getMedia(),
    getRoadmap(),
  ]);

  return (
    <>
      <Hero />
      {event && <FeaturedEvent event={event} />}
      <WhatIsBNN />
      <FocusTeaser />
      <MediaFeature items={media.slice(0, 6)} />
      <BookPromo />
      <CommunityPreview />
      <Roadmap milestones={roadmap} />
      <CTASection />
    </>
  );
}
