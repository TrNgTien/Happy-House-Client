/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
}
const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
]); 

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
});
module.exports = nextConfig
