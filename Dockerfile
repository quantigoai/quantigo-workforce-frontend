FROM node:18.13.0-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock* ./

RUN npm install -g npm@9.2.0

RUN npm install

COPY . .

COPY .env ./

RUN npm run build

FROM node:18.13.0-alpine

WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/.env ./

EXPOSE 3000

CMD ["npm", "start"]
