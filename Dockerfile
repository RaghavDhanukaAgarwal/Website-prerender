# Use lightweight Node.js
FROM node:20-alpine

# Install prerender globally
RUN npm install -g prerender

# Expose the port Prerender uses
EXPOSE 3000

# Environment variables
ENV PORT=3000
ENV CACHE_ENABLED=true
ENV LOG_LEVEL=info

# Start prerender
CMD ["npx", "prerender"]