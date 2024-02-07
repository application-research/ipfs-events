/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/iceland-list',
        destination: '/FDS-1/iceland-list',
        permanent: true,
      },
      {
        source: '/singapore-list',
        destination: '/FDS-2/singapores-list',
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig;
