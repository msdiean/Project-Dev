# =========================
# Stage 1 - Dependencies
# =========================
FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev


# =========================
# Stage 2 - Runtime
# =========================
FROM node:22-alpine

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser

EXPOSE 3500

CMD ["node", "index.js"]
