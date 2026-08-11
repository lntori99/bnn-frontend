# Bold New Normal — Frontend

Next.js (App Router) + Tailwind CSS v4 + Redux Toolkit + Headless UI + Framer Motion + Swiper + react-icons.

## Run

```bash
npm install
cp .env.example .env    # point NEXT_PUBLIC_API_URL at the backend
npm run dev             # http://localhost:3000
```

The site renders with built-in fallback content if the backend is offline, and switches to CMS/API content automatically when `bnn-backend` is running.

## Structure

- `src/app` — routes (home, about, mission-vision, lucy-quist-team, focus/[year]/[slug], events, media, community, partner, join-team, admin)
- `src/components` — shared UI (Navbar, Footer, Countdown, CTASection, Modal, Pagination…)
- `src/core` — Redux Toolkit store, typed hooks, providers, app constants
- `src/data` — site config, sectors, CMS fallback content
- `src/lib` — API client + error helpers
- `src/models` — request/response types
- `src/services` — data-fetching per domain (events, media, team, content, forms)
- `src/shared/mainlayout.tsx` — page chrome

## Notes

- Design system lives in `src/app/globals.css` (`@theme` tokens): ink/forest/gold/clay/ivory palette, Unbounded + Archivo type, and the signature kente band motif.
- Event countdowns expire automatically at event start; past events switch Register → Watch/Listen.
- New annual focus pages are CMS-only additions (`/focus/[year]/[slug]` is fully dynamic).
- `/admin` signs into the backend; the dashboard lists form submissions. Full content CRUD is exposed via the backend Swagger UI.
- Add real photography to `public/` (logo, team, events, book cover, OG image) before launch. Final copy, bios, bank details, book URL and registration links are supplied by BNN via the CMS.
