// Force a clean reseed. SQLite: delete the DB file. Postgres: drop all tables.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (process.env.DATABASE_URL) {
  const { dropAll, seedIfEmpty } = await import('./db.js');
  await dropAll();
  await seedIfEmpty();
} else {
  const dataDir = path.join(__dirname, '..', 'data');
  for (const f of fs.existsSync(dataDir) ? fs.readdirSync(dataDir) : []) {
    if (f.startsWith('localtourguides.sqlite')) fs.rmSync(path.join(dataDir, f));
  }
  const { seedIfEmpty } = await import('./db.js');
  await seedIfEmpty();
}
console.log('Reseed complete.');
process.exit(0);
