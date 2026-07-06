---
name: marketplace-content
description: Add or edit guides, itineraries (tours) and blog posts for LocalTourGuides so they match the house content style and data contract. Use when asked to "add a guide", "add a tour/itinerary", "write a blog post", or expand a destination.
---

# LocalTourGuides content authoring

Content lives in seed files ([server/src/seed/guides.js](../../../server/src/seed/guides.js), [server/src/seed/blogs.js](../../../server/src/seed/blogs.js)) and reaches the site via reseed (see the `reseed-db` skill). For one-off additions on a live DB, prefer the API/dashboard flows instead.

## Voice & style

- Warm, first-person, specific — "part history lesson, part feast", never brochure-speak. Model the tone on existing entries.
- Itineraries sell a *local's* perspective: named stalls, streets, aunties, times of day. 4–6 chronological stops with `time`, `place`, `description` (20–40 words).
- Blog posts: markdown, 350–550 words, `##` subheadings, one bulleted list, end with a nudge toward finding a local guide. Categories: City Guides, Food & Culture, Hidden Gems, Travel Tips, Guide Stories (Guide Stories are authored by a real seeded guide).
- For deep destination/itinerary research, also load the imported `travel-planner` skill; for landing-page copy, `frontend-design` and `lead-magnets`.

## Hard rules

- **No faces**: card/cover images show destinations, never people. Use `images.unsplash.com` photo URLs and verify each new ID with `curl -s -o /dev/null -w "%{http_code}"` (must be 200) AND view the image to confirm it matches the caption/place before using it.
- **No PII**: never include NRIC numbers, phone numbers, emails, or personal addresses in any public content.
- **Trust ranking invariant**: `isFeatured: 1` requires `isVerified: 1`.
- Slugs are kebab-case and unique; run `node --check` on any edited seed file.
