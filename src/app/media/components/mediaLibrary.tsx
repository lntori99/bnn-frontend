"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { FiCheck, FiChevronDown, FiHeadphones, FiPlay, FiSearch, FiX } from "react-icons/fi";
import { media } from "@/data/media";
import type { MediaItem } from "@/types";

const ALL = "All";

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <ListboxButton className="inline-flex w-full items-center justify-between gap-3 rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink transition-colors hover:border-brand sm:w-auto sm:min-w-[9.5rem]">
          <span>
            <span className="mr-1.5 text-ink/45">{label}:</span>
            {value}
          </span>
          <FiChevronDown className="text-ink/40" />
        </ListboxButton>
        <ListboxOptions
          transition
          className="absolute z-30 mt-2 max-h-64 w-full min-w-[11rem] overflow-auto rounded-xl border border-ink/10 bg-white p-1.5 shadow-xl transition duration-150 ease-out data-[closed]:translate-y-1 data-[closed]:opacity-0"
        >
          {[ALL, ...options].map((opt) => (
            <ListboxOption
              key={opt}
              value={opt}
              className="flex cursor-pointer items-center justify-between rounded-lg px-3.5 py-2 text-sm text-ink/80 data-[focus]:bg-brand/10 data-[focus]:text-brand"
            >
              {opt}
              {opt === value && <FiCheck className="text-brand" />}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}

export default function MediaLibrary() {
  const params = useSearchParams();
  const initial = media.find((m) => m.id === params.get("item")) ?? null;

  const [active, setActive] = useState<MediaItem | null>(initial);
  const [query, setQuery] = useState("");
  const [year, setYear] = useState(ALL);
  const [event, setEvent] = useState(ALL);
  const [topic, setTopic] = useState(ALL);
  const [type, setType] = useState(ALL);

  const years = [...new Set(media.map((m) => String(m.year)))].sort().reverse();
  const eventNames = [...new Set(media.map((m) => m.event))];
  const topics = [...new Set(media.map((m) => m.topic))];

  const filtered = useMemo(
    () =>
      media.filter((m) => {
        if (year !== ALL && String(m.year) !== year) return false;
        if (event !== ALL && m.event !== event) return false;
        if (topic !== ALL && m.topic !== topic) return false;
        if (type !== ALL && m.type !== type.toLowerCase()) return false;
        if (query && !`${m.title} ${m.speaker} ${m.description}`.toLowerCase().includes(query.toLowerCase()))
          return false;
        return true;
      }),
    [year, event, topic, type, query]
  );

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block lg:w-80">
          <span className="sr-only">Search the media library</span>
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search talks, speakers, topics…"
            className="field pl-11!"
          />
        </label>
        <div className="flex flex-wrap gap-3">
          <FilterSelect label="Event" value={event} options={eventNames} onChange={setEvent} />
          <FilterSelect label="Year" value={year} options={years} onChange={setYear} />
          <FilterSelect label="Topic" value={topic} options={topics} onChange={setTopic} />
          <FilterSelect label="Type" value={type} options={["Video", "Audio"]} onChange={setType} />
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="mt-12 rounded-2xl border border-ink/10 p-10 text-center text-ink/60">
          Nothing matches those filters yet. Clear a filter or try a different search.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m, i) => (
            <motion.button
              key={m.id}
              type="button"
              onClick={() => setActive(m)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="group block text-left"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink">
                <Image
                  src={m.thumbnail}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/10" />
                <span className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-[#d6ac63] text-xl text-ink transition-transform duration-300 group-hover:scale-110">
                  {m.type === "video" ? <FiPlay className="ml-0.5" /> : <FiHeadphones />}
                </span>
                <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[0.6rem] uppercase tracking-tight text-white">
                  {m.type}
                </span>
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-brand">
                {m.event} · {m.date}
              </p>
              <p className="mt-1.5 tr text-base leading-snug text-ink group-hover:text-brand">
                {m.title}
              </p>
              <p className="mt-1.5 line-clamp-2 text-sm text-ink/60">{m.description}</p>
              <p className="mt-2 text-xs font-medium text-ink/45">{m.speaker}</p>
            </motion.button>
          ))}
        </div>
      )}

      {/* Player */}
      <Dialog open={!!active} onClose={() => setActive(null)} className="relative z-[70]">
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {active && (
            <DialogPanel className="w-full max-w-4xl overflow-hidden rounded-3xl bg-ink">
              <div className="relative aspect-video">
                <iframe
                  src={`${active.embedUrl}?autoplay=1`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="flex items-start justify-between gap-6 p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#d6ac63]">
                    {active.event} · {active.speaker} · {active.date}
                  </p>
                  <DialogTitle className="mt-2 font-body text-xl text-white">
                    {active.title}
                  </DialogTitle>
                  <p className="mt-2 text-sm text-white/60">{active.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-white/70 hover:border-[#d6ac63] hover:text-[#d6ac63]"
                  aria-label="Close player"
                >
                  <FiX />
                </button>
              </div>
            </DialogPanel>
          )}
        </div>
      </Dialog>
    </>
  );
}
