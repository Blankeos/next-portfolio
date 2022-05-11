/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.wikia.nocookie.net", "raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
