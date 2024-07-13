const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.wikia.nocookie.net', 'raw.githubusercontent.com'],
  },
};

// Hooks the ContentLayer's build process with NextJS's.
module.exports = withContentlayer(nextConfig);
