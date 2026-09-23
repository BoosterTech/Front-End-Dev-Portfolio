// Minimal static server for Playwright e2e: serves build/ at the root and strips
// the GitHub Pages path prefix, so tests exercise the real production bundle.
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "build");
const PREFIX = "/Front-End-Dev-Portfolio";
const PORT = Number(process.env.PORT) || 3100;

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".txt": "text/plain",
};

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);
    if (urlPath.startsWith(PREFIX)) {
      urlPath = urlPath.slice(PREFIX.length) || "/";
    }

    let file = path.join(ROOT, urlPath);
    if (!file.startsWith(ROOT)) {
      res.writeHead(403);
      return res.end();
    }
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      file = path.join(ROOT, "index.html");
    }

    res.writeHead(200, {
      "Content-Type": MIME[path.extname(file)] || "application/octet-stream",
    });
    fs.createReadStream(file).pipe(res);
  })
  .listen(PORT, () => console.log(`e2e server on http://localhost:${PORT}`));
