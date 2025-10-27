FROM node:20-alpine

RUN apk add --no-cache chromium && \
    npm install -g prerender

ENV PORT=3000 \
    PRERENDER_NUM_WORKERS=1 \
    PRERENDER_NUM_ITERATIONS=1 \
    PRERENDER_PAGE_DONE_CHECK_INTERVAL=500

COPY server.js /app/server.js
WORKDIR /app

EXPOSE 3000
CMD ["node", "server.js"]