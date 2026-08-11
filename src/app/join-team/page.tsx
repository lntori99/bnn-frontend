import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TeamForm from "./TeamForm";

export const metadata: Metadata = {
  title: "Join the Team",
  description: "Bring your skills to Bold New Normal — express your interest in joining the team.",
};

export default function JoinTeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join the Team"
        title="Build the movement itself"
        intro="BNN is built by people who combine excellence with belief: organisers, communicators, operators, researchers and partnership builders who want Africa's story told through what Africans build. If that's you, introduce yourself."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <TeamForm />
      </section>
    </>
  );
}
