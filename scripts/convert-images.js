const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const QUALITY = 80;
const MAX_WIDTH_PROJECT = 1200;
const MAX_WIDTH_PROFILE = 800;
const MAX_WIDTH_TERMINAL = 1200;
const MAX_WIDTH_BG = 1920;

const srcImagesDir = path.join(__dirname, "..", "src", "images");
const publicDir = path.join(__dirname, "..", "public");

const srcTargets = [
  { file: "profileImage.png", maxWidth: MAX_WIDTH_PROFILE, desc: "profile (dark)" },
  { file: "light_theme_profile.png", maxWidth: MAX_WIDTH_PROFILE, desc: "profile (light)" },
  { file: "code_terminal_light_theme.png", maxWidth: MAX_WIDTH_TERMINAL, desc: "terminal" },
  { file: "CurrencycalculatorProject.png", maxWidth: MAX_WIDTH_PROJECT, desc: "project" },
  { file: "EatNSplitProject.png", maxWidth: MAX_WIDTH_PROJECT, desc: "project" },
  { file: "FastPizzaProject.png", maxWidth: MAX_WIDTH_PROJECT, desc: "project" },
  { file: "ParadiseLodgeProject.png", maxWidth: MAX_WIDTH_PROJECT, desc: "project" },
  { file: "PlazmaLibraryProject.png", maxWidth: MAX_WIDTH_PROJECT, desc: "project" },
  { file: "ReactQuizProject.png", maxWidth: MAX_WIDTH_PROJECT, desc: "project" },
  { file: "MoviebrowserProject.jpg", maxWidth: MAX_WIDTH_PROJECT, desc: "project" },
  { file: "TaskListProject.jpg", maxWidth: MAX_WIDTH_PROJECT, desc: "project" },
  { file: "WTMMusicProject.jpg", maxWidth: MAX_WIDTH_PROJECT, desc: "project" },
  { file: "englishIcon.png", maxWidth: 200, desc: "icon" },
];

const publicTargets = [
  { file: "backgroundLight.png", maxWidth: MAX_WIDTH_BG, desc: "bg light" },
  { file: "backgroundDark.png", maxWidth: MAX_WIDTH_BG, desc: "bg dark" },
  { file: "backgroundLightMobile.png", maxWidth: 800, desc: "bg light mobile" },
  { file: "backgroundDarkMobile.png", maxWidth: 800, desc: "bg dark mobile" },
  { file: "icon.png", maxWidth: 256, desc: "favicon" },
];

async function convertOne(inputPath, outputPath, maxWidth) {
  const inputSize = fs.statSync(inputPath).size;
  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);
  const outputSize = fs.statSync(outputPath).size;
  const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);
  console.log(
    `  ${path.basename(inputPath)} → ${path.basename(outputPath)}  ${(inputSize / 1024).toFixed(0)} KB → ${(outputSize / 1024).toFixed(0)} KB  (-${reduction}%)`
  );
}

async function main() {
  console.log("\n=== Converting src/images/ ===\n");
  for (const { file, maxWidth } of srcTargets) {
    const inputPath = path.join(srcImagesDir, file);
    if (!fs.existsSync(inputPath)) {
      console.log(`  SKIP ${file} (not found)`);
      continue;
    }
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const outputPath = path.join(srcImagesDir, baseName + ".webp");
    await convertOne(inputPath, outputPath, maxWidth);
  }

  console.log("\n=== Converting public/ ===\n");
  for (const { file, maxWidth } of publicTargets) {
    const inputPath = path.join(publicDir, file);
    if (!fs.existsSync(inputPath)) {
      console.log(`  SKIP ${file} (not found)`);
      continue;
    }
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const outputPath = path.join(publicDir, baseName + ".webp");
    await convertOne(inputPath, outputPath, maxWidth);
  }

  console.log("\nDone. Now update imports and delete original files.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
