/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kemah-injil.org',
      },
    ],
  },
  async headers() {
    // Content Security Policy - tailored for BPP GKII portal:
    // - Google Fonts CDN for typography
    // - wa.me for WhatsApp floating button
    // - kemah-injil.org for external links
    // Security: frame-src 'none' explicitly blocks loading any iframe from external origins
    // Security: worker-src/child-src 'none' blocks Web Workers & nested browsing contexts
    // Security: CSP-Report-Only mirrors the enforced policy for passive violation monitoring
    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://kemah-injil.org",
      "frame-src 'none'",
      // Security: block Web Workers and nested browsing contexts from loading external code
      "worker-src 'none'",
      "child-src 'none'",
      // Security: restrict manifest.json loading to same-origin only
      "manifest-src 'self'",
      "connect-src 'self'",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ];

    const ContentSecurityPolicy = cspDirectives.join('; ');
    // Report-Only uses the same directives but never blocks — only reports violations to devtools console
    const ContentSecurityPolicyReportOnly = cspDirectives.join('; ');

    // Permissions-Policy: explicitly deny all modern browser APIs not used by this portal.
    // Covers 18 APIs to prevent fingerprinting, hardware access, and feature abuse.
    const PermissionsPolicy = [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'interest-cohort=()',      // FLoC / Privacy Sandbox opt-out
      'payment=()',              // No payment flows
      'usb=()',                  // No USB device access
      'bluetooth=()',            // No Bluetooth access
      'midi=()',                 // No MIDI device access
      'magnetometer=()',         // No hardware sensor access
      'gyroscope=()',
      'accelerometer=()',
      'ambient-light-sensor=()',
      'display-capture=()',      // No screen capture
      'document-domain=()',      // Prevent document.domain relaxation attacks
      'encrypted-media=()',      // No DRM media
      'fullscreen=(self)',       // Allow fullscreen only from same origin
      'picture-in-picture=()',   // No Picture-in-Picture
      'xr-spatial-tracking=()', // No WebXR / AR / VR
    ].join(', ');

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy,
          },
          // Passive monitoring: same policy in report-only mode — violations appear in browser devtools console
          // without blocking actual users. Useful for detecting future regressions or third-party injections.
          {
            key: 'Content-Security-Policy-Report-Only',
            value: ContentSecurityPolicyReportOnly,
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            // Security: deny 18 browser APIs not used by this portal
            key: 'Permissions-Policy',
            value: PermissionsPolicy,
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            // Security: prevent Spectre-class side-channel attacks on SharedArrayBuffer
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

export default nextConfig;