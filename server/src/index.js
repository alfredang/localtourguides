import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { seedIfEmpty } from './db.js';
import publicRoutes from './routes/public.js';
import authRoutes from './routes/auth.js';
import meRoutes from './routes/me.js';
import adminRoutes from './routes/admin.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', publicRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/me', meRoutes);
app.use('/api/admin', adminRoutes);

// Serve the built client in production. uploads/ is intentionally never exposed.
const dist = path.join(__dirname, '..', '..', 'client', 'dist');
if (fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get(/^(?!\/api).*/, (_req, res) => res.sendFile(path.join(dist, 'index.html')));
}

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 4000;
await seedIfEmpty();
app.listen(PORT, () => console.log(`LocalTourGuides API running on http://localhost:${PORT}`));
