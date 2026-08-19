import type { Metadata } from "next";
import { Suspense } from "react";
import { FiPlay, FiHeadphones, FiVideo } from "react-icons/fi";
import PageHeader from "@/components/pageheader";
import CTASection from "@/components/ctasection";
import MediaLibrary from "./components/mediaLibrary";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Media Library",
  description:
    "Watch and listen to keynotes, panels and podcasts from Bold New Normal conferences and events.",
};

const officialLinks = [
  {
    icon: <FiPlay />,
    label: "Lucy Quist Official — YouTube",
    href: site.youtubeChannelUrl,
  },
  {
    icon: <FiHeadphones />,
    label: "TBNN Podcast playlist",
    href: site.podcastPlaylistUrl,
  },
  {
    icon: <FiVideo />,
    label: "Conference recordings on-demand",
    href: site.conferenceRecordingsUrl,
  },
];

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media library"
        title="The movement, on record."
        lead="Keynotes, panels and podcast conversations from TBNN's conferences and communities — searchable by event, year, topic and type."
        image="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=2000&q=75"
      />
      <section className="bg-white pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {officialLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition duration-150 ease-out hover:-translate-y-px hover:border-gold hover:text-forest focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/60">
            The TBNN Podcast is one of the platform's core thought-leadership
            channels and forms part of TBNN's wider book-conference-podcast
            ecosystem.
          </p>
        </div>
      </section>
      <section className="bg-white pb-16 pt-10 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<p className="text-ink/50">Loading library…</p>}>
            <MediaLibrary />
          </Suspense>
        </div>
      </section>
      <CTASection />
    </>
  );
}
