# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:16 AS builder
# Set working directory
WORKDIR /build
COPY package.json yarn.lock ./
# install node modules and build assets
RUN yarn
# Copy all files from current directory to working dir in image
COPY src/ src/
COPY public/ public/
COPY tsconfig.json ./
RUN yarn build:static


# nginx state for serving content
FROM nginx:alpine

# Copy nginx config
WORKDIR /etc/nginx/conf.d
COPY webgl.conf default.conf

# Copy static assets from builder stage
WORKDIR /www
COPY --from=builder /build/out/ .