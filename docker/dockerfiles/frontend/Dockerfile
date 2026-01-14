FROM node:14 AS frontend

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build

FROM node:14-alpine
WORKDIR /app

COPY --from=frontend /usr/src/app/build ./build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
