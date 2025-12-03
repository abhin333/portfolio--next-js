/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "static.ambitionbox.com",
        },
        {
          protocol: "https",
          hostname: "tiqr.events",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  