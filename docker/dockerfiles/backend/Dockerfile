# Stage 1 - Build
FROM node:14 AS backend
WORKDIR /usr/src/app

# Copy package files first (better cache)
COPY package*.json ./
RUN npm install

# Copy remaining backend code
COPY . .

# Stage 2 - Runtime
FROM node:14-alpine
WORKDIR /app

COPY --from=backend /usr/src/app/node_modules ./node_modules
COPY --from=backend /usr/src/app .

EXPOSE 3000
CMD ["node", "index.js"]
