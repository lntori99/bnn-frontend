import Hero from "./components/hero";
import FeaturedEvent from "./components/featuredevent";
import WhatIsBNN from "./components/whatisbnn";
import FocusTeaser from "./components/focusteaser";
import MediaFeature from "./components/mediafeature";
import BookPromo from "./components/bookpromo";
import CommunityPreview from "./components/communitypreview";
import Roadmap from "./components/roadmap";
import CTASection from "@/components/ctasection";
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
