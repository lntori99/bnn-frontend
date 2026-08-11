import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import MediaLibrary from "./components/MediaLibrary";
import { getMedia } from "@/services/media";

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
        intro="Every talk, panel and conversation from BNN conferences — searchable by event, year, topic and format."
      />
      <MediaLibrary items={items} />
    </>
  );
}
