// Database adapter: PostgreSQL when DATABASE_URL is set (production),
// otherwise a local SQLite file (zero-setup dev). All queries are written
// in Postgres style ($1 placeholders); they are translated for SQLite.
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const usePg = !!process.env.DATABASE_URL;

let pool = null; // pg
let sqlite = null; // better-sqlite3

if (usePg) {
  const { default: pg } = await import('pg');
  pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
} else {
  const { default: Database } = await import('better-sqlite3');
  const dataDir = path.join(__dirname, '..', 'data');
  fs.mkdirSync(dataDir, { recursive: true });
  sqlite = new Database(path.join(dataDir, 'localtourguides.sqlite'));
  sqlite.pragma('journal_mode = WAL');
  sqlite.pragma('foreign_keys = ON');
}
fs.mkdirSync(path.join(__dirname, '..', 'uploads'), { recursive: true });

function toSqlite(sql, params) {
  const out = [];
  const s = sql.replace(/\$(\d+)/g, (_, n) => {
    out.push(params[Number(n) - 1]);
    return '?';
  });
  return [s, out];
}

/** Run a query, returning rows (empty array for writes without RETURNING). */
export async function q(sql, params = []) {
  if (usePg) {
    const res = await pool.query(sql, params);
    return res.rows;
  }
  const [s, p] = toSqlite(sql, params);
  const stmt = sqlite.prepare(s);
  if (stmt.reader) return stmt.all(...p);
  stmt.run(...p);
  return [];
}

/** First row or undefined. */
export async function get1(sql, params = []) {
  return (await q(sql, params))[0];
}

const PK = usePg ? 'SERIAL PRIMARY KEY' : 'INTEGER PRIMARY KEY AUTOINCREMENT';
const NOW = usePg ? 'now()' : "(datetime('now'))";
const TS = usePg ? 'timestamptz' : 'TEXT';

const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  id ${PK},
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  guide_id INTEGER,
  role TEXT NOT NULL DEFAULT 'guide',
  created_at ${TS} NOT NULL DEFAULT ${NOW}
);
CREATE TABLE IF NOT EXISTS guides (
  id ${PK},
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  tagline TEXT NOT NULL DEFAULT '',
  bio TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  languages TEXT NOT NULL DEFAULT '[]',
  years_experience INTEGER NOT NULL DEFAULT 1,
  specialties TEXT NOT NULL DEFAULT '[]',
  photo_url TEXT NOT NULL DEFAULT '',
  is_verified INTEGER NOT NULL DEFAULT 0,
  is_featured INTEGER NOT NULL DEFAULT 0,
  price_from INTEGER NOT NULL DEFAULT 0,
  plan TEXT NOT NULL DEFAULT 'free',
  rating_avg REAL NOT NULL DEFAULT 0,
  rating_count INTEGER NOT NULL DEFAULT 0,
  created_at ${TS} NOT NULL DEFAULT ${NOW}
);
CREATE TABLE IF NOT EXISTS itineraries (
  id ${PK},
  guide_id INTEGER NOT NULL REFERENCES guides(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  summary TEXT NOT NULL DEFAULT '',
  duration TEXT NOT NULL DEFAULT '',
  cover_image TEXT NOT NULL DEFAULT '',
  highlights TEXT NOT NULL DEFAULT '[]',
  stops TEXT NOT NULL DEFAULT '[]'
);
CREATE TABLE IF NOT EXISTS enquiries (
  id ${PK},
  guide_id INTEGER NOT NULL REFERENCES guides(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  travel_date TEXT,
  group_size TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at ${TS} NOT NULL DEFAULT ${NOW}
);
CREATE TABLE IF NOT EXISTS reviews (
  id ${PK},
  guide_id INTEGER NOT NULL REFERENCES guides(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  text TEXT NOT NULL DEFAULT '',
  created_at ${TS} NOT NULL DEFAULT ${NOW}
);
CREATE TABLE IF NOT EXISTS blog_posts (
  id ${PK},
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  cover_image TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'Travel Tips',
  author TEXT NOT NULL DEFAULT 'Team LocalTourGuides',
  published_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS verification_requests (
  id ${PK},
  guide_id INTEGER NOT NULL REFERENCES guides(id) ON DELETE CASCADE,
  selfie_path TEXT,
  nric_path TEXT,
  qualification_path TEXT,
  interview_status TEXT NOT NULL DEFAULT 'pending',
  status TEXT NOT NULL DEFAULT 'submitted',
  created_at ${TS} NOT NULL DEFAULT ${NOW}
);
CREATE TABLE IF NOT EXISTS leads (
  id ${PK},
  email TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'lead-magnet',
  created_at ${TS} NOT NULL DEFAULT ${NOW}
);
`;

export async function initSchema() {
  if (usePg) {
    await pool.query(SCHEMA);
  } else {
    sqlite.exec(SCHEMA);
  }
}

export async function recomputeRating(guideId) {
  const row = await get1(
    'SELECT COUNT(*) AS c, COALESCE(AVG(rating), 0) AS a FROM reviews WHERE guide_id = $1',
    [guideId]
  );
  await q('UPDATE guides SET rating_avg = $1, rating_count = $2 WHERE id = $3', [
    Math.round(Number(row.a) * 10) / 10,
    Number(row.c),
    guideId,
  ]);
}

export async function seedIfEmpty() {
  await initSchema();
  const count = await get1('SELECT COUNT(*) AS c FROM guides');
  if (Number(count.c) > 0) return false;

  const { guides } = await import('./seed/guides.js');
  const { posts } = await import('./seed/blogs.js');

  for (const g of guides) {
    const inserted = await q(
      `INSERT INTO guides (slug, name, tagline, bio, country, city, languages, years_experience,
         specialties, photo_url, is_verified, is_featured, price_from, plan)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING id`,
      [
        g.slug, g.name, g.tagline, g.bio, g.country, g.city,
        JSON.stringify(g.languages), g.yearsExperience, JSON.stringify(g.specialties),
        g.photoUrl, g.isVerified, g.isFeatured, g.priceFrom, g.isFeatured ? 'featured' : 'free',
      ]
    );
    const guideId = inserted[0].id;
    const it = g.itinerary;
    await q(
      `INSERT INTO itineraries (guide_id, title, summary, duration, cover_image, highlights, stops)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [guideId, it.title, it.summary, it.duration, it.coverImage, JSON.stringify(it.highlights), JSON.stringify(it.stops)]
    );
    for (const r of g.reviews) {
      await q(
        'INSERT INTO reviews (guide_id, author_name, rating, text, created_at) VALUES ($1,$2,$3,$4,$5)',
        [guideId, r.author, r.rating, r.text, r.date]
      );
    }
    await recomputeRating(guideId);
  }

  for (const p of posts) {
    await q(
      `INSERT INTO blog_posts (slug, title, excerpt, content, cover_image, category, author, published_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
      [p.slug, p.title, p.excerpt, p.content, p.coverImage, p.category, p.author, p.publishedAt]
    );
  }

  // Demo accounts (documented in README) — guide account is linked to the first seeded guide
  await q('INSERT INTO users (email, password_hash, guide_id, role) VALUES ($1,$2,$3,$4)', [
    'demo@localtourguides.com', bcrypt.hashSync('guide123', 10), 1, 'guide',
  ]);
  await q('INSERT INTO users (email, password_hash, guide_id, role) VALUES ($1,$2,$3,$4)', [
    'admin@localtourguides.com', bcrypt.hashSync('admin123', 10), null, 'admin',
  ]);

  console.log(`Seeded ${guides.length} guides and ${posts.length} blog posts (${usePg ? 'PostgreSQL' : 'SQLite'}).`);
  return true;
}

export async function dropAll() {
  const tables = ['verification_requests', 'reviews', 'enquiries', 'itineraries', 'leads', 'blog_posts', 'users', 'guides'];
  for (const t of tables) {
    await q(usePg ? `DROP TABLE IF EXISTS ${t} CASCADE` : `DROP TABLE IF EXISTS ${t}`);
  }
}
