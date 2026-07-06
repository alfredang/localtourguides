import { Router } from 'express';
import { q, get1, recomputeRating } from '../db.js';
import { publicGuide, publicItinerary, publicReview, publicPost } from '../serialize.js';

const router = Router();

// Wrap async handlers so rejections reach the error middleware.
const h = (fn) => (req, res, next) => fn(req, res, next).catch(next);

// Search ranking: Featured first, then Verified, then rating.
router.get('/guides', h(async (req, res) => {
  const { q: term, country, language, verified } = req.query;
  const clauses = [];
  const params = [];
  const p = (v) => { params.push(v); return `$${params.length}`; };

  if (term) {
    const like = p(`%${String(term).toLowerCase()}%`);
    clauses.push(`(LOWER(g.name) LIKE ${like} OR LOWER(g.tagline) LIKE ${like} OR LOWER(g.bio) LIKE ${like}
      OR LOWER(g.city) LIKE ${like} OR LOWER(g.specialties) LIKE ${like}
      OR g.id IN (SELECT guide_id FROM itineraries WHERE LOWER(title) LIKE ${like} OR LOWER(summary) LIKE ${like}))`);
  }
  if (country) clauses.push(`g.country = ${p(country)}`);
  if (language) clauses.push(`LOWER(g.languages) LIKE ${p(`%${String(language).toLowerCase()}%`)}`);
  if (verified === '1' || verified === 'true') clauses.push('g.is_verified = 1');

  const whereSql = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
  const rows = await q(
    `SELECT g.*, i.cover_image AS itinerary_cover, i.title AS itinerary_title
     FROM guides g LEFT JOIN itineraries i ON i.guide_id = g.id ${whereSql}
     ORDER BY g.is_featured DESC, g.is_verified DESC, g.rating_avg DESC, g.rating_count DESC`,
    params
  );
  res.json(rows.map((r) => ({ ...publicGuide(r), coverImage: r.itinerary_cover, itineraryTitle: r.itinerary_title })));
}));

// Tours = itineraries joined with their guide; same trust-first ranking.
router.get('/tours', h(async (req, res) => {
  const { featured, limit } = req.query;
  const rows = await q(
    `SELECT i.title, i.summary, i.duration, i.cover_image, g.*
     FROM itineraries i JOIN guides g ON g.id = i.guide_id
     ${featured ? 'WHERE g.is_featured = 1' : ''}
     ORDER BY g.is_featured DESC, g.is_verified DESC, g.rating_avg DESC, g.rating_count DESC
     ${limit ? `LIMIT ${Math.max(1, Math.min(50, Number(limit) || 6))}` : ''}`
  );
  res.json(
    rows.map((r) => ({
      title: r.title,
      summary: r.summary,
      duration: r.duration,
      coverImage: r.cover_image,
      guide: publicGuide(r),
    }))
  );
}));

router.get('/guides/:slug', h(async (req, res) => {
  const row = await get1('SELECT * FROM guides WHERE slug = $1', [req.params.slug]);
  if (!row) return res.status(404).json({ error: 'Guide not found' });
  const itinerary = await get1('SELECT * FROM itineraries WHERE guide_id = $1', [row.id]);
  const reviews = await q('SELECT * FROM reviews WHERE guide_id = $1 ORDER BY created_at DESC', [row.id]);
  res.json({
    ...publicGuide(row),
    itinerary: publicItinerary(itinerary),
    reviews: reviews.map(publicReview),
  });
}));

router.post('/guides/:id/enquiries', h(async (req, res) => {
  const guide = await get1('SELECT id FROM guides WHERE id = $1', [Number(req.params.id) || 0]);
  if (!guide) return res.status(404).json({ error: 'Guide not found' });
  const { name, email, travelDate, groupSize, message } = req.body || {};
  if (!name || !email || !message)
    return res.status(400).json({ error: 'Name, email and message are required' });
  await q(
    'INSERT INTO enquiries (guide_id, name, email, travel_date, group_size, message) VALUES ($1,$2,$3,$4,$5,$6)',
    [guide.id, String(name), String(email), travelDate || null, groupSize || null, String(message)]
  );
  res.status(201).json({ ok: true });
}));

router.post('/guides/:id/reviews', h(async (req, res) => {
  const guide = await get1('SELECT id FROM guides WHERE id = $1', [Number(req.params.id) || 0]);
  if (!guide) return res.status(404).json({ error: 'Guide not found' });
  const { author, rating, text } = req.body || {};
  const stars = Number(rating);
  if (!author || !text || !(stars >= 1 && stars <= 5))
    return res.status(400).json({ error: 'Author, rating (1-5) and text are required' });
  await q('INSERT INTO reviews (guide_id, author_name, rating, text) VALUES ($1,$2,$3,$4)', [
    guide.id, String(author), stars, String(text),
  ]);
  await recomputeRating(guide.id);
  res.status(201).json({ ok: true });
}));

router.get('/blog', h(async (req, res) => {
  const { category } = req.query;
  const rows = category
    ? await q('SELECT * FROM blog_posts WHERE category = $1 ORDER BY published_at DESC', [category])
    : await q('SELECT * FROM blog_posts ORDER BY published_at DESC');
  res.json(rows.map((r) => publicPost(r)));
}));

router.get('/blog/:slug', h(async (req, res) => {
  const row = await get1('SELECT * FROM blog_posts WHERE slug = $1', [req.params.slug]);
  if (!row) return res.status(404).json({ error: 'Post not found' });
  res.json(publicPost(row, { withContent: true }));
}));

router.post('/leads', h(async (req, res) => {
  const { email, source } = req.body || {};
  if (!email || !/.+@.+\..+/.test(email))
    return res.status(400).json({ error: 'A valid email is required' });
  await q('INSERT INTO leads (email, source) VALUES ($1,$2)', [String(email), String(source || 'lead-magnet')]);
  res.status(201).json({ ok: true });
}));

router.get('/stats', h(async (_req, res) => {
  const guides = await get1('SELECT COUNT(*) AS c FROM guides');
  const countries = await get1('SELECT COUNT(DISTINCT country) AS c FROM guides');
  const reviews = await get1('SELECT COUNT(*) AS c, COALESCE(AVG(rating), 0) AS a FROM reviews');
  res.json({
    guides: Number(guides.c),
    countries: Number(countries.c),
    reviews: Number(reviews.c),
    avgRating: Math.round(Number(reviews.a) * 10) / 10,
  });
}));

export default router;
