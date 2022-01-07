/** @type {import('next').NextConfig} */
const WebpackObfuscatorPlugin = require('webpack-obfuscator');
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
];

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.fallback = { fs: false };
    //config.plugins.push(new WebpackObfuscatorPlugin({}));
    return config;
  },
  reactStrictMode: true,
  distDir: 'dist',
  poweredByHeader: false,
  swcMinify: false,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  }
};
