# Use official Node.js 20 Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install Prerender globally
RUN npm install -g prerender

# Expose the port Render expects
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV CACHE_ENABLED=true
ENV LOG_LEVEL=info

# Start the Prerender server
CMD ["prerender"]