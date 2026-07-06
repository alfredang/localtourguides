---
description: Write a new blog post for The Travel Table (usage - /new-post <topic or city>)
---

Launch the `content-writer` agent to add one new blog post about: $ARGUMENTS

The post goes into `server/src/seed/blogs.js` (newest first), following the `marketplace-content` skill: correct category, verified destination cover image, 350–550 words of markdown, house voice. After the agent finishes, reseed via the `reseed-db` skill so the post appears on the site, and verify it renders at its /blog/<slug> URL.
