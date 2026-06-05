# ==========================================
# Stage 1 - Build React Application
# ==========================================

FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Required for react-scripts 4
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build application
RUN npm run build

# ==========================================
# Stage 2 - Runtime Image
# ==========================================

FROM nginx:alpine

# Update vulnerable packages
RUN apk update && \
    apk upgrade --no-cache

# Remove default nginx config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy React build output
COPY --from=build /app/build /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

# Health Check
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
CMD wget --quiet --tries=1 --spider http://localhost || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
