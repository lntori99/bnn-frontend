import type { Metadata } from "next";
import PageHeader from "@/components/pageheader";
import MediaLibrary from "./components/medialibrary";
import { getMedia } from "@/services/media";
import { placeholderImages } from "@/data/placeholder-images";

export const metadata: Metadata = {
  title: "Media Library",
  description: "Video and audio from Bold New Normal conferences and events.",
};

export default async function MediaPage() {
  const items = await getMedia();
  return (
    <>
      <PageHeader
        eyebrow="Media Library"
        title="The archive"
        lead="Every talk, panel and conversation from BNN conferences — searchable by event, year, topic and format."
        image={placeholderImages.media.keynote}
      />
      <MediaLibrary items={items} />
    </>
  );
}
