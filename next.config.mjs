// eslint-disable-next-line @typescript-eslint/no-require-imports
// @ts-expect-error nothing
// const { withContentlayer } = require('next-contentlayer2');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // images: {
  //   domains: ['static.wikia.nocookie.net', 'raw.githubusercontent.com'],
  // },
  turbopack: {
    rules: {
      /** For SVG as JSX Component Support. */
      '*.svg': {
        as: '*.js',
        loaders: ['@svgr/webpack'],
      },
    },
  },
};

export default nextConfig;

// Hooks the ContentLayer's build process with NextJS's.
// module.exports = withContentlayer(nextConfig);
