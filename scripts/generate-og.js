const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c35a6" />
      <stop offset="50%" stop-color="#06195c" />
      <stop offset="100%" stop-color="#030c30" />
    </linearGradient>

    <radialGradient id="glow" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#0c35a6" stop-opacity="0.9" />
      <stop offset="60%" stop-color="#06195c" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#030c30" stop-opacity="1" />
    </radialGradient>

    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFE57F" />
      <stop offset="50%" stop-color="#FFD700" />
      <stop offset="100%" stop-color="#D4AF37" />
    </linearGradient>

    <!-- Dot Pattern Texture -->
    <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#ffffff" fill-opacity="0.1" />
    </pattern>
  </defs>

  <!-- Background Layer -->
  <rect width="1200" height="630" fill="url(#bg-grad)" />
  <rect width="1200" height="630" fill="url(#glow)" />
  <rect width="1200" height="630" fill="url(#dots)" />

  <!-- Outer Border Frame with Gold Accents -->
  <rect x="24" y="24" width="1152" height="582" rx="24" fill="none" stroke="#D4AF37" stroke-width="4" stroke-opacity="0.7" />
  <rect x="32" y="32" width="1136" height="566" rx="16" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.15" />

  <!-- Top Emblem Pill Badge -->
  <g transform="translate(600, 110)">
    <rect x="-210" y="-22" width="420" height="44" rx="22" fill="#ffffff" fill-opacity="0.08" stroke="#D4AF37" stroke-width="1.5" stroke-opacity="0.5" />
    <text text-anchor="middle" y="6" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="800" fill="#FFE57F" letter-spacing="3">
      PORTAL RESMI KELEMBAGAAN BPP GKII
    </text>
  </g>

  <!-- Center Title Section -->
  <g transform="translate(600, 240)">
    <!-- Subheading -->
    <text text-anchor="middle" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="800" fill="url(#gold-grad)" letter-spacing="1">
      Badan Pengurus Pusat
    </text>

    <!-- Main Title -->
    <text text-anchor="middle" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
      Gereja Kemah Injil Indonesia
    </text>
  </g>

  <!-- Description Subtitle -->
  <g transform="translate(600, 395)">
    <text text-anchor="middle" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#cbd5e1">
      Pusat Akses Publik Resmi Tata Gereja (TGTRT), Surat Edaran BPP,
    </text>
    <text text-anchor="middle" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#cbd5e1">
      Formulir Pendataan, dan Informasi Direktori 13 Wilayah BPW
    </text>
  </g>

  <!-- Bottom Divider & Footer Info -->
  <line x1="80" y1="490" x2="1120" y2="490" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1" />

  <g transform="translate(100, 540)">
    <!-- Left Info -->
    <text font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#94a3b8">
      DKI Jakarta • Sekretariat Jenderal BPP
    </text>

    <!-- Center URL -->
    <text x="500" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFD700" text-anchor="middle">
      https://bpp-gkii.vercel.app
    </text>

    <!-- Right Info -->
    <text x="1000" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#94a3b8" text-anchor="end">
      Bebas Akses Tanpa Login
    </text>
  </g>
</svg>
`;

const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

sharp(Buffer.from(svg))
  .png({ quality: 100 })
  .toFile(outputPath)
  .then((info) => {
    console.log('✅ Generated crisp 1200x630 og-image.png:', info);
  })
  .catch((err) => {
    console.error('❌ Error generating og-image.png:', err);
  });
