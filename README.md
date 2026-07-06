# 🧭 LocalTourGuides

A full-stack marketplace connecting travellers with **verified local tour guides** across Singapore, Malaysia, China, Japan and South Korea. Guides publish their itineraries; travellers browse, compare and send free enquiries through the portal.

Inspired by [potluckhub.io](https://potluckhub.io/) (warm, cosy marketplace design) and SGTutors (trust-first verification flow).

## Features

- **Warm, inviting design** — amber/terracotta palette, photography-forward cards, fully responsive
- **Special destinations** — Singapore 🇸🇬, Malaysia 🇲🇾, China 🇨🇳, Japan 🇯🇵, South Korea 🇰🇷 with signature spots
- **28 seeded guides** (20 from Singapore) each with a full itinerary, star ratings and reviews
- **Trust-first search ranking** — Featured → Verified → rating, on every search
- **Verification flow** — selfie + NRIC upload → live online interview → green ✓ badge (documents are private, never displayed or served publicly)
- **Featured placement** — verified guides can be featured at the top of search
- **Free guide accounts** — profile + one itinerary, enquiries inbox in the dashboard
- **Enquiry portal** — travellers contact guides without exposing anyone's personal details
- **The Travel Table blog** — 30 seeded posts with categories and social share buttons
- **Lead magnet** — free "48 Hours Like a Local" city-guide email capture with social share and star rating
- **WhatsApp floating widget** — wa.me/6588666375 on every page
- **Admin console** — verification approval queue and featured toggles
- **REST API** — clean JSON API ready for the future iOS/Android apps

## Tech Stack

| Layer    | Tech |
|----------|------|
| Frontend | React 18 · Vite · TypeScript · Tailwind CSS · React Router |
| Backend  | Node.js · Express · better-sqlite3 (SQLite) · JWT · Multer |
| Database | SQLite (auto-created and auto-seeded on first boot) |

## Getting Started

```bash
# install everything
npm install
npm install --prefix server
npm install --prefix client

# run both servers (API on :4000, client on :5173)
npm run dev
```

Open http://localhost:5173. The database seeds itself on first boot (28 guides, 30 blog posts, demo accounts).

### Demo accounts

| Role  | Email | Password |
|-------|-------|----------|
| Guide | demo@localtourguides.com | guide123 |
| Admin | admin@localtourguides.com | admin123 |

### Useful scripts

```bash
npm run seed    # wipe and reseed the database
npm run build   # production build of the client
npm start       # serve API + built client from one process (port 4000)
```

## Privacy

Guide personal data (NRIC, verification documents, contact details) is **never displayed publicly**, never included in public API responses, and the uploads directory is never served over HTTP. All traveller–guide communication flows through the enquiry portal.

## Project Structure

```
localtourguides/
├── client/               # React + Vite + Tailwind frontend
│   └── src/
│       ├── components/   # Layout, WhatsApp widget, cards, badges, share
│       ├── pages/        # Home, Guides, Profile, Destinations, Blog, Dashboard, Admin…
│       └── lib/          # API client + auth context
└── server/               # Express + SQLite API
    └── src/
        ├── routes/       # public, auth, me (guide dashboard), admin
        └── seed/         # 28 guides + itineraries + reviews, 30 blog posts
```
