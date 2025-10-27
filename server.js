import prerender from 'prerender';
import puppeteer from 'puppeteer';

const server = prerender({
  chromeLocation: puppeteer.executablePath(),
  port: process.env.PORT || 3000,
});

server.start();