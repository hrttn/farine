
# Base Stage: Install dependencies
FROM node:lts AS base
WORKDIR /app
COPY package.json package-lock.json ./
# Husky folder is needed as we use it in npm prepare
COPY .husky .husky
ENV HUSKY=0
RUN npm install

# Copy other necessary folders and files, including .husky
COPY . .

# Development Stage
FROM base AS dev
ENV NODE_ENV=development.
CMD ["npm", "run", "dev"]

# Production Stage
FROM base AS prod
ENV NODE_ENV=production
RUN npm run build
CMD ["npm", "run", "start"]


