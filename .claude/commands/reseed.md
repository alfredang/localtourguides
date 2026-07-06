---
description: Wipe and reseed the LocalTourGuides database, then restart the dev servers
---

Reseed the database following the `reseed-db` skill exactly: stop the running dev servers first, run `npm run seed`, restart `npm run dev`, and smoke-check `/api/stats` (expect 28 guides, 5 countries, 30 blog posts via /api/blog). Report the seed output.
