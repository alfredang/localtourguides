---
name: reseed-db
description: Safely wipe and reseed the LocalTourGuides SQLite database from server/src/seed/*.js. Use when seed data changes, the DB is corrupted, demo data got polluted with test rows, or the user says "reseed", "reset the database", or "fresh data".
---

# Reseed the LocalTourGuides database

The SQLite file lives at `server/data/localtourguides.sqlite` and is created + seeded automatically on first boot by `seedIfEmpty()` in [server/src/db.js](../../../server/src/db.js). Reseeding deletes the file and rebuilds it.

## Steps

1. **Stop the dev servers first.** A running Express process holds the SQLite file open; deleting it underneath leaves the server serving a stale deleted inode. Stop the `npm run dev` background task (or `pkill -f "server/src/index.js"` and `pkill -f vite`).
2. Run `npm run seed` from the repo root (runs `server/src/seed-run.js` which deletes `server/data/localtourguides.sqlite*` and reseeds).
3. Expect the output: `Seeded 28 guides and 30 blog posts.`
4. Restart with `npm run dev` and smoke-check `curl http://localhost:4000/api/stats` — should report 28 guides, 5 countries.

## Seed data contract (when editing server/src/seed/*.js)

- `guides.js` exports `guides`: 20 Singapore + 2 each MY/CN/JP/KR. Exactly 6 SG guides featured (all featured must be verified), 10 SG verified total. First guide is the demo account (user `demo@localtourguides.com`).
- `blogs.js` exports `posts`: 30 markdown posts across City Guides / Food & Culture / Hidden Gems / Travel Tips / Guide Stories, newest first.
- Cover images MUST be verified-working `images.unsplash.com` URLs showing destinations (never people's faces) — curl-check any new image ID before committing. No NRIC numbers, phone numbers, emails or addresses anywhere in seed content.
- After edits always run `node --check server/src/seed/guides.js server/src/seed/blogs.js`.
