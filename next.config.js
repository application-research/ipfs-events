/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    AIRTABLE_API: process.env.AIRTABLE_API,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_TABLE_ID: process.env.AIRTABLE_TABLE_ID,
    AIRTABLE_TABLE_ID2: process.env.AIRTABLE_TABLE_ID2,
  },
};

module.exports = nextConfig;
