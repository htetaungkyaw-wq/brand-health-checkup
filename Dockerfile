# Use official Node image
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
# If using pnpm, add steps to install pnpm here
RUN npm ci
COPY . .
RUN npm run build

# Production image, serve static build with a lightweight server
FROM node:18-alpine AS prod
WORKDIR /app
# serve using 'serve' package (or use nginx if you prefer)
RUN npm i -g serve
COPY --from=build /app/dist /app/dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
