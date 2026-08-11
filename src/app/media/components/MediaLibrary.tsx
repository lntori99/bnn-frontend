"use client";

import { useMemo, useState } from "react";
import Pagination from "@/components/Pagination";
import MediaCard from "./MediaCard";
import { MediaItem } from "@/models/response/media-response";

const PAGE_SIZE = 9;

export default function MediaLibrary({ items }: { items: MediaItem[] }) {
  const [q, setQ] = useState("");
  const [year, setYear] = useState("all");
  const [type, setType] = useState("all");
  const [event, setEvent] = useState("all");
  const [topic, setTopic] = useState("all");
  const [page, setPage] = useState(1);

  const years = [...new Set(items.map((i) => i.year))].sort((a, b) => b - a);
  const events = [...new Set(items.map((i) => i.event).filter(Boolean))] as string[];
  const topics = [...new Set(items.map((i) => i.topic).filter(Boolean))] as string[];

  const filtered = useMemo(() => {
    return items.filter((i) => {
      if (year !== "all" && String(i.year) !== year) return false;
      if (type !== "all" && i.type !== type) return false;
      if (event !== "all" && i.event !== event) return false;
      if (topic !== "all" && i.topic !== topic) return false;
      if (q) {
        const hay = `${i.title} ${i.speaker ?? ""} ${i.description ?? ""}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [items, q, year, type, event, topic]);

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const reset = () => setPage(1);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <form className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5" onSubmit={(e) => e.preventDefault()} aria-label="Filter media">
        <div className="lg:col-span-1">
          <label htmlFor="media-q">Search</label>
          <input id="media-q" className="field" placeholder="Title, speaker…" value={q}
            onChange={(e) => { setQ(e.target.value); reset(); }} />
        </div>
        {[
          { id: "f-event", label: "Event", value: event, set: setEvent, options: events },
          { id: "f-year", label: "Year", value: year, set: setYear, options: years.map(String) },
          { id: "f-topic", label: "Topic", value: topic, set: setTopic, options: topics },
          { id: "f-type", label: "Format", value: type, set: setType, options: ["video", "audio"] },
        ].map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id}>{f.label}</label>
            <select id={f.id} className="field" value={f.value}
              onChange={(e) => { f.set(e.target.value); reset(); }}>
              <option value="all">All</option>
              {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        ))}
      </form>

      {visible.length === 0 ? (
        <p className="mt-10 border border-ink/15 bg-sand p-6">
          Nothing matches those filters yet. Clear a filter or try a different search term.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((m) => <MediaCard key={m.id} item={m} />)}
        </div>
      )}
      <Pagination page={page} pageCount={pageCount} onChange={setPage} />
    </section>
  );
}
