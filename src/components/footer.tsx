import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-ivory">
      <div className="kente-band" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-bold uppercase">Bold New Normal</p>
          <p className="mt-3 max-w-xs text-sm text-ivory/70">{site.tagline}</p>
          <a href={site.bookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xs bg-gold px-6 py-[0.8rem] text-[0.95rem] font-bold text-ink transition duration-150 ease-out hover:-translate-y-px hover:bg-gold-soft focus-visible:outline-[3px] focus-visible:outline-gold focus-visible:outline-offset-2 mt-6">
            Buy the Book
          </a>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          {site.nav.map((i) => (
            <Link key={i.href} href={i.href} className="py-1 text-ivory/80 hover:text-gold">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm">
          <p className="eyebrow">Connect</p>
          <ul className="mt-3 space-y-2">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ivory/80 hover:text-gold">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="text-ivory/80 hover:text-gold">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} Bold New Normal. Founded by Lucy Quist.
      </div>
    </footer>
  );
}
