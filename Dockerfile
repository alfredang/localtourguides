# ---- build the React client ----
FROM node:22-bookworm-slim AS client-build
WORKDIR /app
# Coolify injects NODE_ENV=production at build time; the build needs devDeps (vite, tsc)
ENV NODE_ENV=development
COPY client/package*.json client/
RUN cd client && npm ci --include=dev --no-fund --no-audit
COPY client client
RUN cd client && npm run build

# ---- runtime: Express serves API + built client ----
FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY server/package*.json server/
RUN cd server && npm ci --omit=dev --no-fund --no-audit
COPY server server
COPY --from=client-build /app/client/dist client/dist
EXPOSE 4000
CMD ["node", "server/src/index.js"]
