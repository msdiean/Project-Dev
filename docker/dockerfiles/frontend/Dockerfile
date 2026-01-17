# =========================
# 1️⃣ Build stage
# =========================
FROM node:14-alpine AS build

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

RUN npm install

# Copy rest of the source
COPY . .

# Build React app
RUN npm run build


# =========================
# 2️⃣ Runtime stage (NGINX)
# =========================
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config (YOU MUST ADD nginx.conf FILE)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
