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
        source: '/singapore-list',
        destination: '/FDS-1/list',
        permanent: true,
      },
      {
        source: '/iceland-list',
        destination: '/FDS-2/list',
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig;
