import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // One .env at the repo root serves both packages: the server reads
  // GOOGLE_CLIENT_ID, the client reads VITE_GOOGLE_CLIENT_ID. Without this,
  // Vite would only look inside client/.
  envDir: '..',
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
});
