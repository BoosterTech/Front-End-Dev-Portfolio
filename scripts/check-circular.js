const madge = require("madge");

const SRC_DIR = "src";

async function main() {
  try {
    const res = await madge(SRC_DIR, {
      fileExtensions: ["js", "jsx"],
      excludeRegExp: [/[\\/\\.](test|spec)\.js$/, /[\\/]setupTests\.js$/],
    });

    const circular = res.circular();

    if (circular.length === 0) {
      console.log("No circular dependencies found.");
      return;
    }

    console.warn("Circular dependencies detected:");
    for (const chain of circular) {
      console.warn(`  ${chain.join(" → ")}`);
    }

    process.exit(1);
  } catch (error) {
    console.error("Failed to run circular dependency check:", error.message);
    process.exit(1);
  }
}

main();
