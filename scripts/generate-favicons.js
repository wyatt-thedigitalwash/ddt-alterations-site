const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const PUBLIC = path.join(__dirname, "..", "public");
const SVG = fs.readFileSync(path.join(PUBLIC, "favicon.svg"));

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

async function main() {
  // Generate PNGs
  for (const { name, size } of sizes) {
    await sharp(SVG)
      .resize(size, size)
      .png()
      .toFile(path.join(PUBLIC, name));
    console.log(`  Created ${name}`);
  }

  // Generate favicon.ico (32x32 PNG wrapped as ICO)
  const png32 = await sharp(SVG).resize(32, 32).png().toBuffer();

  // Build a minimal ICO file (single 32x32 PNG entry)
  const ico = buildIco(png32, 32);
  fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), ico);
  console.log("  Created favicon.ico");

  console.log("Done!");
}

function buildIco(pngBuffer, size) {
  // ICO header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(1, 4); // count: 1 image

  // ICO directory entry: 16 bytes
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // width
  entry.writeUInt8(size === 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2);  // color palette
  entry.writeUInt8(0, 3);  // reserved
  entry.writeUInt16LE(1, 4);  // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8); // image size
  entry.writeUInt32LE(6 + 16, 12); // offset to image data

  return Buffer.concat([header, entry, pngBuffer]);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
