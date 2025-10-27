import prerender from "prerender";

const server = prerender({
  chromeFlags: [
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--hide-scrollbars",
    "--remote-debugging-port=9222",
    "--remote-debugging-address=0.0.0.0",
  ],
});

server.start();

console.log("✅ Prerender server started on port", process.env.PORT || 3000);