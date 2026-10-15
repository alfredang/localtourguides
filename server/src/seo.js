import fs from 'fs';
import path from 'path';
import { q, get1 } from './db.js';

// Server-side SEO for the SPA. The client is a bare <div id="root"> shell, so
// Googlebot saw an identical 1 KB page with the homepage title on every guide
// URL and reported them as "Soft 404". Here each indexable route gets its own
// title/description/canonical plus a plain-text summary inside #root (React's
// createRoot replaces it on mount), and unknown slugs return a real 404.

const SITE = (process.env.PUBLIC_SITE_URL || 'https://localtourguides.tertiaryinfotech.com').replace(/\/$/, '');
const BRAND = 'LocalTourGuides';

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const clip = (s, n = 158) => {
  const t = String(s ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return t.length > n ? `${t.slice(0, n - 1).replace(/\s+\S*$/, '')}…` : t;
};

const STATIC_PAGES = ['/', '/guides', '/blog', '/how-it-works', '/verification', '/privacy'];

async function guideMeta(slug) {
  const g = await get1('SELECT * FROM guides WHERE slug = $1', [slug]);
  if (!g) return null;
  const it = await get1('SELECT title, summary FROM itineraries WHERE guide_id = $1', [g.id]);
  const place = [g.city, g.country].filter(Boolean).join(', ');
  return {
    title: `${g.name} — Local Tour Guide in ${place} | ${BRAND}`,
    description: clip(g.tagline ? `${g.tagline}. ${g.bio}` : g.bio),
    body: `<h1>${esc(g.name)}</h1><p>${esc(g.tagline)}</p><p>Local tour guide in ${esc(place)}.</p><p>${esc(g.bio)}</p>${
      it ? `<h2>${esc(it.title)}</h2><p>${esc(it.summary)}</p>` : ''
    }`,
  };
}

async function postMeta(slug) {
  const p = await get1('SELECT title, excerpt FROM blog_posts WHERE slug = $1', [slug]);
  if (!p) return null;
  return {
    title: `${p.title} | ${BRAND}`,
    description: clip(p.excerpt),
    body: `<h1>${esc(p.title)}</h1><p>${esc(p.excerpt)}</p>`,
  };
}

const NOT_FOUND = { title: `Page not found | ${BRAND}`, description: '', body: '<h1>Page not found</h1>', noindex: true };

function render(shell, urlPath, meta) {
  if (!meta) return shell;
  const head = [
    `<title>${esc(meta.title)}</title>`,
    meta.description && `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${SITE}${esc(urlPath)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    meta.description && `<meta property="og:description" content="${esc(meta.description)}" />`,
    !meta.noindex && `<meta property="og:url" content="${SITE}${esc(urlPath)}" />`,
  ].filter(Boolean).join('\n    ');
  return shell
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/, '')
    .replace(/<title>[\s\S]*?<\/title>/, head)
    .replace('<div id="root"></div>', `<div id="root">${meta.body}</div>`);
}

export function mountSeo(app, dist) {
  const shell = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

  // The public pages fetch their content from /api at render time. Googlebot's
  // renderer obeys robots.txt for those fetches, so a blanket Disallow: /api/
  // made every guide/blog page render "Guide not found" -> GSC Soft 404. Allow
  // the public read endpoints (longest match wins); private ones stay blocked.
  app.get('/robots.txt', (_req, res) => {
    res.type('text/plain').send(
      `User-agent: *\nAllow: /\nAllow: /api/guides\nAllow: /api/blog\nAllow: /api/tours\nAllow: /api/stats\nDisallow: /api/\nDisallow: /dashboard\nDisallow: /admin\n\nSitemap: ${SITE}/sitemap.xml\n`
    );
  });

  app.get('/sitemap.xml', async (_req, res, next) => {
    try {
      const guides = await q('SELECT slug FROM guides ORDER BY id');
      const posts = await q('SELECT slug, published_at FROM blog_posts ORDER BY published_at DESC');
      const urls = [
        ...STATIC_PAGES.map((p) => `<url><loc>${SITE}${p}</loc></url>`),
        ...guides.map((g) => `<url><loc>${SITE}/guides/${esc(g.slug)}</loc></url>`),
        ...posts.map((p) => {
          const d = new Date(p.published_at);
          const lastmod = Number.isNaN(d.getTime()) ? '' : `<lastmod>${d.toISOString().slice(0, 10)}</lastmod>`;
          return `<url><loc>${SITE}/blog/${esc(p.slug)}</loc>${lastmod}</url>`;
        }),
      ];
      res
        .type('application/xml')
        .send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
    } catch (err) {
      next(err);
    }
  });

  // SPA fallback for every non-API route.
  app.get(/^(?!\/api).*/, async (req, res) => {
    let meta = null;
    let status = 200;
    try {
      const m = req.path.match(/^\/(guides|blog)\/([^/]+)\/?$/);
      if (m) {
        meta = m[1] === 'guides' ? await guideMeta(decodeURIComponent(m[2])) : await postMeta(decodeURIComponent(m[2]));
        if (!meta) {
          meta = NOT_FOUND;
          status = 404;
        }
      }
    } catch (err) {
      console.error('[seo] meta lookup failed', err);
      meta = null; // fall back to the plain shell rather than failing the page
    }
    res.status(status).type('html').send(render(shell, req.path, meta));
  });
}
