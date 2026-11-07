---
name: tia-frontend-design-site
description: This site's own design system for LocalTourGuides, a marketplace of verified local guides — sky-blue travel palette, Fraunces + Inter. Load with the user-level tia-frontend-design skill.
---

# LocalTourGuides — Site Design System

**Load the user-level `tia-frontend-design` skill as well.** It owns the group's rules: no dead space or gaps, no chips, no template layouts, an animated hero, generated images and a lighter theme by default. This file records how they apply on this site and wins on theme and look.

## Direction

A marketplace connecting travellers with verified local guides across Singapore, Malaysia, China, Japan and South Korea. It should feel inviting and trustworthy, with the destinations doing the selling.

## Theme

Light, because travellers are browsing and comparing. Tokens are in `client/tailwind.config.js`.

- `terra` `#0284C7`: the primary sky blue. The name is legacy.
- `cream`, `sand`: ice-blue surfaces and borders.
- `sunset` `#F59E0B`: warm accent for stars and featured items.

## Type

Fraunces (display) and Inter (body), loaded in `client/index.html`.

## Hero and images

- **Hero:** in `client/src/pages/Home.tsx`, with `CollageColumn`s scrolling via `animate-scroll-slow` and `animate-scroll-slower` from `client/src/index.css`. Keep it moving.
- **Images:** new images must be generated, or be real photos supplied by guides. Do not use stock libraries.

## Layout and chat widget

`client/src/components/Layout.tsx` and `Shared.tsx`, which carry the navigation, footer and WhatsApp links.

## Known violations

Do not copy these. Fix them when you touch the file.

- **Library images:** Unsplash in `client/src/data/destinations.ts`, `server/src/seed/blogs.js` and `server/src/seed/guides.js`.
- **Chips:** `client/src/components/Shared.tsx`, `client/src/pages/Admin.tsx`, `client/src/pages/Dashboard.tsx`.
- **Oversized spacing:** `client/src/pages/GuideProfile.tsx`, `BlogPost.tsx`, `Dashboard.tsx`.
- **Reduced motion:** the hero's scrolling has no `prefers-reduced-motion` handling in the components.
