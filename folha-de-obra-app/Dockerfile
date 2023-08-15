# Use a Node 20 base image
# start build stage
FROM node:20-alpine AS build-env

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 

# Build the app
RUN npm run build

# start production stage
FROM node:20-alpine AS production

WORKDIR /app

# copy only final bundle
COPY --from=build-env /app/dist/ .

# install serve
RUN npm install serve

# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production

# Expose the port on which the app will be running (3000 is the default that `serve` uses)

EXPOSE 3000
# Start the app
ENTRYPOINT [ "npx", "serve", "." ]