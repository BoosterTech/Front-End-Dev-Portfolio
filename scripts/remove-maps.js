const fs = require("fs");
const path = require("path");

const BUILD_DIR = path.join(__dirname, "..", "build");

function removeMaps(dir, removed = 0) {
  if (!fs.existsSync(dir)) return removed;

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      removed = removeMaps(fullPath, removed);
    } else if (item.name.endsWith(".map")) {
      fs.unlinkSync(fullPath);
      removed++;
    }
  }
  return removed;
}

const removed = removeMaps(BUILD_DIR);
console.log(`Removed ${removed} sourcemap file(s) from build/.`);
