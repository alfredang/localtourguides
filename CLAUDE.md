# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

LocalTourGuides — a full-stack marketplace where local tour guides (Singapore, Malaysia, China, Japan, South Korea) publish itineraries and travellers send free enquiries through the portal. Two-sided trust model copied from potluckhub.io / SGTutors: guides get a free listing, optionally verify (selfie + NRIC upload → live online interview → green badge), and verified guides can be Featured.

## Commands

```bash
npm run dev      # runs API (:4000) + Vite client (:5173) via concurrently — the normal dev loop
npm run seed     # wipe server/data/localtourguides.sqlite and reseed (STOP the dev servers first — see below)
npm run build    # typecheck (tsc -b) + production build of client
npm start        # production: Express serves API + client/dist on :4000
node --check server/src/<file>.js        # syntax-check server/seed files (a PostToolUse hook also enforces this)
npx tsc -b       # (from client/) typecheck only
```

There is no test suite; verification is done by exercising the app (see `.claude/agents/site-qa.md` for the standard QA pass, or run `/qa`). Project slash commands: `/reseed`, `/qa`, `/new-post <topic>`.

**Reseed gotcha**: the Express process holds the SQLite file open. Kill `npm run dev` before `npm run seed`, or the running server keeps serving the deleted inode.

## Architecture

Two npm packages, no workspace tooling:

- `server/` — Express + better-sqlite3 (ESM). `src/db.js` owns the schema and auto-seeds on first boot from `src/seed/guides.js` + `src/seed/blogs.js` (the seed files are the content source of truth). Routes: `routes/public.js` (guides/tours/blog/enquiries/reviews/leads/stats), `routes/auth.js` (JWT signup/login), `routes/me.js` (guide dashboard: profile/itinerary CRUD, enquiries inbox, verification uploads via multer), `routes/admin.js` (verification approve/reject, feature toggle).
- `client/` — React 18 + Vite + TypeScript + Tailwind + React Router. `src/lib/api.ts` is the typed fetch wrapper (client proxies `/api` → :4000 in dev); `src/lib/auth.tsx` holds the JWT session in localStorage. `src/components/Layout.tsx` wraps every route (nav, footer, WhatsApp widget → wa.me/6588666375). `src/data/destinations.ts` is static destination/hero-collage content.

Demo accounts (seeded): `demo@localtourguides.com`/`guide123` (guide, linked to guide id 1) and `admin@localtourguides.com`/`admin123`.

## Invariants — do not break these

- **Trust-first ranking**: every guide/tour listing query orders by `is_featured DESC, is_verified DESC, rating_avg DESC`. Featured requires verified (enforced in admin route and seed data).
- **No PII in public responses**: `server/src/serialize.js` whitelists public fields. Contact details live only on `users`; verification documents go to `server/uploads/` which is never served over HTTP. Never add email/phone/NRIC/document paths to a public payload or page.
- **No faces**: public imagery (guide cards, tour covers, hero, blog) shows destinations, never portrait photos. New Unsplash image IDs must be curl-verified (HTTP 200) and visually checked before use.
- **Free-tier rule**: a free guide account gets exactly one itinerary (`PUT /api/me/itinerary` upserts).
- Ratings are denormalised onto `guides.rating_avg/rating_count` — always call `recomputeRating()` after touching reviews.

## Design system

Sky-blue travel palette defined as Tailwind tokens in `client/tailwind.config.js`: `terra` (#0284C7 primary — the name is legacy, it renders sky blue), `cream`/`sand` (ice-blue surfaces/borders), `ink` (deep navy), warm amber accents for stars/Featured. Display font Fraunces, body Inter. Reusable pieces (`btn-primary`, `section-title`, cards, badges, stars) live in `client/src/index.css` and `src/components/Shared.tsx` — reuse them rather than restyling ad hoc. Section rhythm is `py-10` with alternating `bg-sky-50/70` bands; keep spacing tight (the user explicitly dislikes dead space).

`.claude/skills/` has house workflows (`reseed-db`, `marketplace-content`) plus imported design/marketing skills (`frontend-design`, `ui-ux-pro-max`, `lead-magnets`, `travel-planner` — symlinked from `.agents/skills/`). Content edits should follow `marketplace-content`; big UI work should consult `frontend-design`.

## Roadmap context

Native iOS/Android apps are planned against the same REST API — keep `/api/*` responses clean, versionable JSON and don't couple them to the React client.
