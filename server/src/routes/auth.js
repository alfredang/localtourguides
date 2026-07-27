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
  // A Google-only account has no password_hash — reject it here rather than
  // letting bcrypt.compareSync throw on a null digest.
  if (!user || !user.password_hash || !bcrypt.compareSync(String(req.body?.password || ''), user.password_hash))
    return res.status(401).json({ error: 'Invalid email or password' });
  res.json({ token: signToken(user), role: user.role, guideId: user.guide_id });
}));

/**
 * Verify a Google ID token and return its payload.
 * Google's tokeninfo endpoint checks the signature and expiry for us; we still
 * have to check the audience ourselves, or a token minted for any other app
 * would be accepted here.
 */
async function verifyGoogleIdToken(idToken) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) throw Object.assign(new Error('Google login is not configured'), { status: 503 });

  const resp = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`
  );
  if (!resp.ok) throw Object.assign(new Error('Invalid Google token'), { status: 401 });
  const p = await resp.json();

  const audiences = clientId.split(',').map((s) => s.trim()).filter(Boolean);
  if (!audiences.includes(p.aud))
    throw Object.assign(new Error('Google token was issued for another app'), { status: 401 });
  if (p.iss !== 'accounts.google.com' && p.iss !== 'https://accounts.google.com')
    throw Object.assign(new Error('Invalid Google token issuer'), { status: 401 });
  if (p.email_verified !== true && p.email_verified !== 'true')
    throw Object.assign(new Error('Your Google email address is not verified'), { status: 401 });
  if (!p.email || !p.sub)
    throw Object.assign(new Error('Google token is missing an email address'), { status: 401 });
  return p;
}

/**
 * Sign in (or sign up) with a Google ID token from Google Identity Services.
 * A first-time email creates the guide row too, exactly like POST /signup —
 * so this endpoint is both "log in with Google" and "sign up with Google".
 */
router.post('/google', h(async (req, res) => {
  const idToken = req.body?.credential || req.body?.id_token;
  if (!idToken) return res.status(400).json({ error: 'Missing Google credential' });

  let payload;
  try {
    payload = await verifyGoogleIdToken(String(idToken));
  } catch (err) {
    return res.status(err.status || 401).json({ error: err.message });
  }

  const email = String(payload.email).toLowerCase();
  const avatar = String(payload.picture || '');
  let user = await get1('SELECT * FROM users WHERE google_sub = $1', [payload.sub]);

  if (!user) {
    // Link to an existing password account with the same address. Google has
    // verified ownership of this mailbox, so this is the same person.
    user = await get1('SELECT * FROM users WHERE email = $1', [email]);
    if (user) {
      const rows = await q(
        'UPDATE users SET google_sub = $1, avatar_url = $2 WHERE id = $3 RETURNING *',
        [payload.sub, avatar, user.id]
      );
      user = rows[0];
    }
  }

  if (!user) {
    const name = String(payload.name || payload.given_name || email.split('@')[0]);
    const slug = await slugify(name);
    const guideRows = await q(
      `INSERT INTO guides (slug, name, country, city, tagline, photo_url)
       VALUES ($1,$2,$3,$4,'','') RETURNING id`,
      [slug, name, 'Singapore', 'Singapore']
    );
    const userRows = await q(
      `INSERT INTO users (email, password_hash, guide_id, role, google_sub, avatar_url)
       VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [email, null, guideRows[0].id, 'guide', payload.sub, avatar]
    );
    user = userRows[0];
  }

  res.json({ token: signToken(user), role: user.role, guideId: user.guide_id });
}));

export default router;
