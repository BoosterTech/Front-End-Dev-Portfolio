const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src");

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === "build") continue;
      walk(fullPath, files);
    } else if (/\.(js|jsx)$/i.test(ent.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = walk(srcDir);
const importRe =
  /(^[^'";]*?\bfrom\s+)(['"])(\.\.[^'"]+)\2/gm;

for (const file of files) {
  const relDir = path.relative(srcDir, path.dirname(file)).replace(/\\/g, "/");
  const depth = relDir ? relDir.split("/").length : 0;

  let content = fs.readFileSync(file, "utf8");
  const original = content;

  content = content.replace(importRe, (match, prefix, quote, importPath) => {
    if (!importPath.startsWith("../")) {
      return match;
    }

    const parts = importPath.split("/");
    let up = 0;
    let i = 0;
    while (parts[i] === "..") {
      up++;
      i++;
    }
    const tail = parts.slice(i).join("/");

    const base = relDir ? relDir.split("/").slice(0, depth - up) : [];
    const newPath = tail ? [...base, tail].join("/") : base.join("/");

    return `${prefix}${quote}${newPath}${quote}`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
  }
}
