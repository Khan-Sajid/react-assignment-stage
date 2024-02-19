/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.stage.in",
      },
    ],
  },
};

export default nextConfig;
