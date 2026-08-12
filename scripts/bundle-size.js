const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const BUILD_DIR = path.join(__dirname, "..", "build");
const STATIC_DIR = path.join(BUILD_DIR, "static");
const MAX_SIZE = Number(process.env.BUNDLE_SIZE_LIMIT) || 350 * 1024;

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getFiles(fullPath, files);
    } else if (/\.(js|css)$/i.test(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function main() {
  const files = getFiles(STATIC_DIR);

  if (files.length === 0) {
    console.log("No JS/CSS bundles found in build/static. Skipping check.");
    return;
  }

  let failed = false;

  for (const file of files) {
    const size = zlib.gzipSync(fs.readFileSync(file)).length;
    const sizeKb = (size / 1024).toFixed(2);
    const relative = path.relative(BUILD_DIR, file);

    if (size > MAX_SIZE) {
      console.error(
        `Bundle too large: ${relative} (${sizeKb} KB gzipped) exceeds ${MAX_SIZE / 1024} KB`
      );
      failed = true;
    } else {
      console.log(`OK: ${relative} (${sizeKb} KB gzipped)`);
    }
  }

  if (failed) {
    process.exit(1);
  }
}

main();
