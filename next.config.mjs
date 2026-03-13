/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ini kunci agar build tidak error saat ada modul yang butuh browser
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias['firebase/auth'] = false;
      config.resolve.alias['firebase/firestore'] = false;
    }
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;