import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { q, get1 } from '../db.js';
import { signToken } from '../middleware.js';

const router = Router();
const h = (fn) => (req, res, next) => fn(req, res, next).catch(next);

async function slugify(name) {
  const base = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'guide';
  let slug = base;
  let i = 1;
  while (await get1('SELECT 1 AS x FROM guides WHERE slug = $1', [slug])) {
    slug = `${base}-${++i}`;
  }
  return slug;
}

router.post('/signup', h(async (req, res) => {
  const { name, email, password, country, city } = req.body || {};
  if (!name || !email || !password)
    return res.status(400).json({ error: 'Name, email and password are required' });
  if (String(password).length < 6)
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  const existing = await get1('SELECT id FROM users WHERE email = $1', [String(email).toLowerCase()]);
  if (existing) return res.status(409).json({ error: 'An account with this email already exists' });

  const slug = await slugify(String(name));
  const guideRows = await q(
    `INSERT INTO guides (slug, name, country, city, tagline, photo_url)
     VALUES ($1,$2,$3,$4,'','') RETURNING id`,
    [slug, String(name), country || 'Singapore', city || 'Singapore']
  );
  const guideId = guideRows[0].id;
  const userRows = await q(
    'INSERT INTO users (email, password_hash, guide_id, role) VALUES ($1,$2,$3,$4) RETURNING *',
    [String(email).toLowerCase(), bcrypt.hashSync(String(password), 10), guideId, 'guide']
  );

  const user = userRows[0];
  res.status(201).json({ token: signToken(user), role: user.role, guideId: user.guide_id });
}));

router.post('/login', h(async (req, res) => {
  const user = await get1('SELECT * FROM users WHERE email = $1', [String(req.body?.email || '').toLowerCase()]);
  if (!user || !bcrypt.compareSync(String(req.body?.password || ''), user.password_hash))
    return res.status(401).json({ error: 'Invalid email or password' });
  res.json({ token: signToken(user), role: user.role, guideId: user.guide_id });
}));

export default router;
