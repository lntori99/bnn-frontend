import type { Metadata } from "next";
import { Suspense } from "react";

import JoinCommunity from "@/app/community/components/joinCommunity";
import PageHeader from "@/components/pageheader";

export const metadata: Metadata = {
  title: "Join the Community",
  description:
    "Choose one of Bold New Normal's five sector communities — healthcare, real enterprise, agriculture, technology, energy & infrastructure — and start building.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join the community"
        title="Build with people who believe what you believe."
        lead="BNN's communities turn the entrepreneurship thesis into practice — places to connect, contribute, collaborate and build real solutions. Pick your sector, then tell us about yourself."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=75"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense>
            <JoinCommunity />
          </Suspense>
        </div>
      </section>
    </>
  );
}
