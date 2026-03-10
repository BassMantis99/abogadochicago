/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.abogadochicago.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn-ikchf.nitrocdn.com",
      },
      {
        protocol: "https",
        hostname: "www.illinoiscompensation.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
