const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.argv[2]) || 5000;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".js":   "application/javascript; charset=utf-8",
  ".jsx":  "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg":  "image/svg+xml",
  ".png":  "image/png",
  ".webp": "image/webp",
  ".ico":  "image/x-icon",
};

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  let rel = url === "/" ? "/index.html" : url;
  const full = path.join(root, rel);
  if (!full.startsWith(root)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(full, (err, buf) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("404 " + rel);
    }
    res.writeHead(200, { "Content-Type": types[path.extname(full).toLowerCase()] || "application/octet-stream" });
    res.end(buf);
  });
}).listen(port, "0.0.0.0", () => console.log(`Serving ${root} on http://0.0.0.0:${port}/`));
