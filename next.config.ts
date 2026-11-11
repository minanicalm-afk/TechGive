import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: "/final", destination: "/", permanent: false },
      { source: "/home", destination: "/", permanent: false },
      { source: "/home1", destination: "/", permanent: false },
      { source: "/home2", destination: "/", permanent: false },
      { source: "/home3", destination: "/", permanent: false },
      { source: "/home4", destination: "/", permanent: false },
      { source: "/home4/donations", destination: "/donations", permanent: false },
      { source: "/home4/recycling", destination: "/recycling", permanent: false },
      { source: "/home4/upgrades", destination: "/upgrades", permanent: false },
      { source: "/home4/repair", destination: "/repair", permanent: false },
      { source: "/home4/contact", destination: "/contact", permanent: false },
      { source: "/home4/sell", destination: "/sell", permanent: false },
      { source: "/home4/buy", destination: "/sell", permanent: false },
      { source: "/buy", destination: "/sell", permanent: false },
      { source: "/donate", destination: "/donations", permanent: false },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
