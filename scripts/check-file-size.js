const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "..", "src");
const LINE_LIMIT = 300;

function getFiles(dir, files = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getFiles(fullPath, files);
    } else if (item.isFile() && (item.name.endsWith(".js") || item.name.endsWith(".jsx"))) {
      files.push(fullPath);
    }
  }
  return files;
}

function main() {
  const files = getFiles(SRC_DIR);
  const offenders = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split(/\r?\n/).length;
    if (lines > LINE_LIMIT) {
      offenders.push({ file: path.relative(process.cwd(), file), lines });
    }
  }

  if (offenders.length === 0) {
    console.log(`All source files are under ${LINE_LIMIT} lines.`);
    return;
  }

  console.warn(`Warning: the following source files exceed ${LINE_LIMIT} lines:`);
  for (const { file, lines } of offenders) {
    console.warn(`  - ${file} (${lines} lines)`);
  }
}

main();
