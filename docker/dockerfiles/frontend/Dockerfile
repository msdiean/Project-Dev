# ---------- Build Stage ----------
FROM node:14 AS build
WORKDIR /usr/src/app

# Copy only package files first (layer caching)
COPY package*.json ./
RUN npm install

# Copy application source
COPY . .

# Build React app
RUN npm run build


# ---------- Runtime Stage ----------
FROM nginx:alpine

# Remove default nginx config
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
