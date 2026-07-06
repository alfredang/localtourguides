import { Router } from 'express';
import { q, get1 } from '../db.js';
import { requireAdmin } from '../middleware.js';

const router = Router();
router.use(requireAdmin);
const h = (fn) => (req, res, next) => fn(req, res, next).catch(next);

router.get('/verifications', h(async (_req, res) => {
  const rows = await q(
    `SELECT vr.id, vr.guide_id, vr.interview_status, vr.status, vr.created_at,
            (vr.selfie_path IS NOT NULL) AS has_selfie, (vr.nric_path IS NOT NULL) AS has_nric,
            (vr.qualification_path IS NOT NULL) AS has_qualification,
            g.name, g.slug, g.city, g.country
     FROM verification_requests vr JOIN guides g ON g.id = vr.guide_id
     ORDER BY vr.created_at DESC`
  );
  res.json(
    rows.map((r) => ({
      id: r.id,
      guideId: r.guide_id,
      guideName: r.name,
      guideSlug: r.slug,
      city: r.city,
      country: r.country,
      hasSelfie: !!r.has_selfie,
      hasNric: !!r.has_nric,
      hasQualification: !!r.has_qualification,
      interviewStatus: r.interview_status,
      status: r.status,
      createdAt: r.created_at,
    }))
  );
}));

router.post('/verifications/:id/approve', h(async (req, res) => {
  const vr = await get1('SELECT * FROM verification_requests WHERE id = $1', [Number(req.params.id) || 0]);
  if (!vr) return res.status(404).json({ error: 'Request not found' });
  await q("UPDATE verification_requests SET status = 'approved', interview_status = 'passed' WHERE id = $1", [vr.id]);
  await q('UPDATE guides SET is_verified = 1 WHERE id = $1', [vr.guide_id]);
  res.json({ ok: true });
}));

router.post('/verifications/:id/reject', h(async (req, res) => {
  const vr = await get1('SELECT * FROM verification_requests WHERE id = $1', [Number(req.params.id) || 0]);
  if (!vr) return res.status(404).json({ error: 'Request not found' });
  await q("UPDATE verification_requests SET status = 'rejected' WHERE id = $1", [vr.id]);
  res.json({ ok: true });
}));

router.post('/guides/:id/feature', h(async (req, res) => {
  const guide = await get1('SELECT * FROM guides WHERE id = $1', [Number(req.params.id) || 0]);
  if (!guide) return res.status(404).json({ error: 'Guide not found' });
  const next = guide.is_featured ? 0 : 1;
  await q('UPDATE guides SET is_featured = $1, plan = $2 WHERE id = $3', [
    next, next ? 'featured' : 'free', guide.id,
  ]);
  res.json({ ok: true, isFeatured: !!next });
}));

router.get('/guides', h(async (_req, res) => {
  const rows = await q(
    'SELECT id, slug, name, city, country, is_verified, is_featured, rating_avg, rating_count FROM guides ORDER BY name'
  );
  res.json(
    rows.map((r) => ({
      id: r.id,
      slug: r.slug,
      name: r.name,
      city: r.city,
      country: r.country,
      isVerified: !!r.is_verified,
      isFeatured: !!r.is_featured,
      ratingAvg: Number(r.rating_avg),
      ratingCount: Number(r.rating_count),
    }))
  );
}));

export default router;
