const sharp = require('sharp');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const sourceIcon = path.join(publicDir, 'gkii-logo-emblem.png');

const sizes = [
  { name: 'icon-72.png', size: 72 },
  { name: 'icon-96.png', size: 96 },
  { name: 'icon-128.png', size: 128 },
  { name: 'icon-144.png', size: 144 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-384.png', size: 384 },
  { name: 'icon-512.png', size: 512 },
];

async function generateIcons() {
  for (const { name, size } of sizes) {
    const outputPath = path.join(publicDir, name);
    try {
      await sharp(sourceIcon)
        .resize(size, size, { fit: 'contain', background: { r: 6, g: 25, b: 92, alpha: 1 } })
        .png({ quality: 100 })
        .toFile(outputPath);
      console.log(`✅ Generated ${name} (${size}x${size})`);
    } catch (err) {
      console.error(`❌ Error generating ${name}:`, err.message);
    }
  }
  console.log('Done generating all PWA icons!');
}

generateIcons();
