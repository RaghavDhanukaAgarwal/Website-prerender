# Use Node LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install Chrome dependencies
RUN apk add --no-cache chromium

# Copy package definition and install locally
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port and run
EXPOSE 3000
CMD ["node", "server.js"]