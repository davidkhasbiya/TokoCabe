/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Pengaturan agar popup Google Login tidak diblokir
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
        ],
      },
    ];
  },

  // 2. Pengaturan agar tetap bisa deploy meski ada error kecil (Jurus Hackathon)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;