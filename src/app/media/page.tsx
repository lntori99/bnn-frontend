import type { Metadata } from "next";
import { Suspense } from "react";

import MediaLibrary from "@/app/media/components/mediaLibrary";
import PageHeader from "@/components/pageheader";
import CTASection from "@/components/ctasection";

export const metadata: Metadata = {
  title: "Media Library",
  description:
    "Watch and listen to keynotes, panels and podcasts from Bold New Normal conferences and events.",
};

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media library"
        title="The movement, on record."
        lead="Keynotes, panels and podcast conversations from BNN's conferences and communities — searchable by event, year, topic and type."
        image="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=2000&q=75"
      />
      <section className="bg-white py-16 sm:py-20">
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
