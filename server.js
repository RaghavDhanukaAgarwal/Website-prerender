import prerender from "prerender";
import os from "os";

const isWindows = os.platform() === "win32";

// Automatically choose Chrome path based on environment
const chromePath = isWindows
  ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
  : "/usr/bin/google-chrome"; // Render + Linux path

console.log("🚀 Starting Prerender Server...");
console.log("🧭 Using Chrome path:", chromePath);

const server = prerender({
  chromeLocation: chromePath,
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

console.log("✅ Prerender server started successfully on port 3000");