const sharp = require("sharp");
const path = require("path");

const NAVY = "#1B2A3D";
const GOLD = "#C9A84C";
const IVORY = "#FAF8F3";

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${NAVY}"/>

  <!-- Top gold line -->
  <line x1="100" y1="180" x2="1100" y2="180" stroke="${GOLD}" stroke-width="1.5" opacity="0.6"/>

  <!-- DDT text -->
  <text x="600" y="310" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="120" font-weight="600" letter-spacing="20"
        fill="${IVORY}">DDT</text>

  <!-- Bottom gold line -->
  <line x1="100" y1="340" x2="1100" y2="340" stroke="${GOLD}" stroke-width="1.5" opacity="0.6"/>

  <!-- ALTERATIONS subtitle -->
  <text x="600" y="380" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="22" font-weight="400" letter-spacing="12"
        fill="${GOLD}">ALTERATIONS</text>

  <!-- Tagline -->
  <text x="600" y="460" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="28" font-weight="400" font-style="italic"
        fill="${IVORY}" opacity="0.8">Expert Alterations on Harbour Island, Tampa</text>

  <!-- Decorative stitch line at bottom -->
  <line x1="200" y1="530" x2="1000" y2="530" stroke="${GOLD}" stroke-width="1" stroke-dasharray="8 6" opacity="0.4"/>
</svg>`;

async function main() {
  await sharp(Buffer.from(svg))
    .resize(WIDTH, HEIGHT)
    .png()
    .toFile(path.join(__dirname, "..", "public", "og-image.png"));
  console.log("  Created og-image.png (1200x630)");
  console.log("Done!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
