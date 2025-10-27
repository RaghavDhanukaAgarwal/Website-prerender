const prerender = require('prerender');
const puppeteer = require('puppeteer');

const server = prerender({
  chromeLocation: puppeteer.executablePath(),
  port: process.env.PORT || 3000,
});

server.start();