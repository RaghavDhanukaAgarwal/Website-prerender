import prerender from "prerender";

const server = prerender({
  chromeFlags: ["--no-sandbox", "--headless", "--disable-gpu"],
});

server.start();