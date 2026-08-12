"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { sectors } from "@/data/sectors";
import JoinForm from "./joinform";
import { useAppDispatch, useAppSelector } from "@/core/hook";
import { selectSector } from "@/core/store";

export default function JoinFlow() {
  const params = useSearchParams();
  const selected = useAppSelector((s) => s.ui.selectedSector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fromUrl = params.get("sector");
    if (fromUrl && sectors.some((s) => s.key === fromUrl)) {
      dispatch(selectSector(fromUrl));
    }
  }, [params, dispatch]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h2 className="text-2xl font-bold">Step 1 — Choose your sector</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" role="radiogroup" aria-label="Community sector">
        {sectors.map((s) => {
          const active = selected === s.key;
          return (
            <button
              key={s.key}
              role="radio"
              aria-checked={active}
              onClick={() => dispatch(selectSector(s.key))}
              className={`h-full border-t-4 p-5 text-left transition ${
                active
                  ? "on-dark border-gold bg-forest-deep text-ivory"
                  : "border-forest bg-sand hover:-translate-y-1"
              }`}
            >
              <h3 className="font-display text-base font-bold">{s.name}</h3>
              <p className={`mt-2 text-sm ${active ? "text-ivory/80" : "opacity-75"}`}>{s.scope}</p>
            </button>
          );
        })}
      </div>

      <h2 className="mt-14 text-2xl font-bold">Step 2 — Tell us about you</h2>
      {selected ? (
        <JoinForm sector={selected} />
      ) : (
        <p className="mt-4 max-w-xl border border-ink/15 bg-sand p-5">
          Choose a sector above to open the joining form.
        </p>
      )}
    </section>
  );
}
