import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "chaoschain.ghost.io" },
    ],
  },
  async redirects() {
    return [
      { source: "/diagnostic", destination: "https://studio.chaoscha.in", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/blog/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "frame-src https://www.youtube.com https://player.vimeo.com https://www.loom.com",
              "connect-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
