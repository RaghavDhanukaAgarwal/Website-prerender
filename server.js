const prerender = require('prerender');

const server = prerender({
  chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu']
});

server.start();