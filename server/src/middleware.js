import jwt from 'jsonwebtoken';

export const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';

export function signToken(user) {
  return jwt.sign(
    { sub: user.id, role: user.role, guideId: user.guide_id },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Authentication required' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

export function requireAdmin(req, res, next) {
  requireAuth(req, res, () => {
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin only' });
    next();
  });
}

export function requireGuide(req, res, next) {
  requireAuth(req, res, () => {
    if (!req.user.guideId) return res.status(403).json({ error: 'Guide account required' });
    next();
  });
}
