import Link from "next/link";
import { site } from "@/data/site";

export default function CTASection() {
  return (
    <section className="on-dark bg-forest-deep text-ivory">
      <div className="kente-band" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 lg:px-8">
        {[
          { t: "Join the Community", d: "Pick a sector. Build with peers across the continent.", href: "/community", cta: "Choose your sector" },
          { t: "Partner With Us", d: "Fund, sponsor or collaborate on the movement's work.", href: "/partner", cta: "Start a conversation" },
          { t: "Join the Team", d: "Bring your skills to Bold New Normal itself.", href: "/join-team", cta: "Express interest" },
        ].map((c) => (
          <div key={c.t} className="border border-ivory/15 p-6">
            <h3 className="font-display text-xl font-bold">{c.t}</h3>
            <p className="mt-2 text-sm text-ivory/75">{c.d}</p>
            <Link href={c.href} className="btn btn-gold mt-5">{c.cta}</Link>
          </div>
        ))}
      </div>
      <div className="pb-14 text-center">
        <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-ivory">
          Buy the Book
        </a>
      </div>
    </section>
  );
}
