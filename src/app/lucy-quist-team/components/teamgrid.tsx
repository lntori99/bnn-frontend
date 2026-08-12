"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/modal";
import { TeamMember } from "@/models/response/team-response";

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <li key={m.id}>
            <button
              onClick={() => setActive(m)}
              className="block h-full w-full border border-ink/15 bg-ivory p-6 text-left transition hover:-translate-y-1 hover:border-gold"
            >
              <div className="relative mb-4 flex h-40 items-center justify-center overflow-hidden bg-sand font-display text-sm font-bold text-forest">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  "Photo"
                )}
              </div>
              <h3 className="font-display text-lg font-bold">{m.name}</h3>
              <p className="text-sm font-semibold text-forest">{m.title}</p>
              <p className="mt-2 text-sm opacity-75">{m.shortBio}</p>
              <span className="mt-3 inline-block text-sm font-bold text-clay">View full profile →</span>
            </button>
          </li>
        ))}
      </ul>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.name}>
        {active && (
          <>
            <p className="font-semibold text-forest">{active.title}</p>
            <p className="mt-4 opacity-85">{active.fullBio ?? active.shortBio}</p>
            {active.links && (
              <div className="mt-5 flex gap-3">
                {active.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xs bg-forest px-6 py-[0.8rem] text-[0.95rem] font-bold text-ivory transition duration-150 ease-out hover:-translate-y-px hover:bg-forest-deep focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  );
}
