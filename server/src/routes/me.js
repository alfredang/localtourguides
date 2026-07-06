import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { q, get1 } from '../db.js';
import { requireGuide } from '../middleware.js';
import { publicGuide, publicItinerary } from '../serialize.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Verification documents are stored outside any publicly served directory.
const upload = multer({
  dest: path.join(__dirname, '..', '..', 'uploads'),
  limits: { fileSize: 8 * 1024 * 1024 },
});

const router = Router();
router.use(requireGuide);
const h = (fn) => (req, res, next) => fn(req, res, next).catch(next);

function myGuide(req) {
  return get1('SELECT * FROM guides WHERE id = $1', [req.user.guideId]);
}

router.get('/', h(async (req, res) => {
  const guide = await myGuide(req);
  if (!guide) return res.status(404).json({ error: 'Guide not found' });
  const itinerary = await get1('SELECT * FROM itineraries WHERE guide_id = $1', [guide.id]);
  const verification = await get1(
    'SELECT id, interview_status, status, created_at FROM verification_requests WHERE guide_id = $1 ORDER BY id DESC',
    [guide.id]
  );
  res.json({
    ...publicGuide(guide),
    plan: guide.plan,
    itinerary: publicItinerary(itinerary),
    verification: verification || null,
  });
}));

router.put('/', h(async (req, res) => {
  const guide = await myGuide(req);
  const { name, tagline, bio, country, city, languages, yearsExperience, specialties, photoUrl, priceFrom } =
    req.body || {};
  await q(
    `UPDATE guides SET name = $1, tagline = $2, bio = $3, country = $4, city = $5, languages = $6,
     years_experience = $7, specialties = $8, photo_url = $9, price_from = $10 WHERE id = $11`,
    [
      name ?? guide.name,
      tagline ?? guide.tagline,
      bio ?? guide.bio,
      country ?? guide.country,
      city ?? guide.city,
      JSON.stringify(languages ?? JSON.parse(guide.languages)),
      yearsExperience ?? guide.years_experience,
      JSON.stringify(specialties ?? JSON.parse(guide.specialties)),
      photoUrl ?? guide.photo_url,
      priceFrom ?? guide.price_from,
      guide.id,
    ]
  );
  res.json({ ok: true });
}));

router.put('/itinerary', h(async (req, res) => {
  const guide = await myGuide(req);
  const { title, summary, duration, coverImage, highlights, stops } = req.body || {};
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const existing = await get1('SELECT id FROM itineraries WHERE guide_id = $1', [guide.id]);
  const payload = [
    title,
    summary || '',
    duration || '',
    coverImage || `https://picsum.photos/seed/${guide.slug}/900/600`,
    JSON.stringify(highlights || []),
    JSON.stringify(stops || []),
  ];
  if (existing) {
    await q(
      'UPDATE itineraries SET title = $1, summary = $2, duration = $3, cover_image = $4, highlights = $5, stops = $6 WHERE id = $7',
      [...payload, existing.id]
    );
  } else {
    await q(
      'INSERT INTO itineraries (title, summary, duration, cover_image, highlights, stops, guide_id) VALUES ($1,$2,$3,$4,$5,$6,$7)',
      [...payload, guide.id]
    );
  }
  res.json({ ok: true });
}));

router.get('/enquiries', h(async (req, res) => {
  const rows = await q('SELECT * FROM enquiries WHERE guide_id = $1 ORDER BY created_at DESC', [
    req.user.guideId,
  ]);
  res.json(
    rows.map((r) => ({
      id: r.id,
      name: r.name,
      email: r.email,
      travelDate: r.travel_date,
      groupSize: r.group_size,
      message: r.message,
      status: r.status,
      createdAt: r.created_at,
    }))
  );
}));

router.post('/enquiries/:id/replied', h(async (req, res) => {
  await q("UPDATE enquiries SET status = 'replied' WHERE id = $1 AND guide_id = $2", [
    Number(req.params.id) || 0,
    req.user.guideId,
  ]);
  res.json({ ok: true });
}));

router.post(
  '/verification',
  upload.fields([
    { name: 'selfie', maxCount: 1 },
    { name: 'nric', maxCount: 1 },
    { name: 'qualification', maxCount: 1 },
  ]),
  h(async (req, res) => {
    const files = req.files || {};
    if (!files.selfie || !files.nric)
      return res.status(400).json({ error: 'Selfie photo and NRIC are required' });
    await q(
      `INSERT INTO verification_requests (guide_id, selfie_path, nric_path, qualification_path, interview_status, status)
       VALUES ($1,$2,$3,$4,'pending','submitted')`,
      [
        req.user.guideId,
        files.selfie[0].path,
        files.nric[0].path,
        files.qualification ? files.qualification[0].path : null,
      ]
    );
    res.status(201).json({ ok: true });
  })
);

export default router;
