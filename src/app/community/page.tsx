import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/pageheader";
import JoinFlow from "./components/joinflow";

export const metadata: Metadata = {
  title: "Join the Community",
  description: "Choose a sector — Healthcare, Real Enterprise, Agriculture, Technology, Energy & Infrastructure — and join the Bold New Normal community.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join the Community"
        title="Pick your arena. Start building."
        intro="BNN's communities turn the entrepreneurship thesis into practice: connect, contribute, collaborate and build African solutions with peers in your sector."
      />
      <Suspense>
        <JoinFlow />
      </Suspense>
    </>
  );
}
