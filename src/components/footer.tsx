import Link from "next/link";
import { FiArrowUpRight, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import Logo from "@/components/logo";
import { navLinks, primaryCtas, site } from "@/data/site";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <FiInstagram />,
  YouTube: <FiYoutube />,
  TikTok: <SiTiktok />,
  LinkedIn: <FiLinkedin />,
};

export default function Footer() {
  return (
    <footer className="on-dark border-t border-ivory/10 bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <Logo onDark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
            {site.description}
          </p>
          <div className="mt-6 flex gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
              >
                {socialIcons[s.label]}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 grid gap-2.5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-ivory/70 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Act now</p>
          <ul className="mt-5 grid gap-2.5">
            {primaryCtas.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {c.label}
                  <FiArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ivory/50">
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-ivory/50">
            <a
              href={site.newsletterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Subscribe to the newsletter
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Bold New Normal. All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
