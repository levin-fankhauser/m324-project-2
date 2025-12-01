FROM node:lts-slim AS builder

ENV NODE_ENV=production

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:lts-slim

ENV NODE_ENV=production

LABEL service="sketchly"

WORKDIR /app

COPY --from=builder --chown=node:node /app/public /app/public
COPY --from=builder --chown=node:node /app/.next/standalone /app/
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

ENV PORT=80
EXPOSE 80

CMD ["node", "server.js"]
