FROM node:apline as builder

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine as server
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 3000