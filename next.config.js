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

    AIRTABLE_FILSUMMIT_TOKEN: process.env.AIRTABLE_FILSUMMIT_TOKEN,
    AIRTABLE_SINGAPORE_BASE_ID: process.env.AIRTABLE_SINGAPORE_BASE_ID,

    BASE_IPFS_THING: process.env.BASE_IPFS_THING,

    AIRTABLE_COPY_FILSUMMIT_TOKEN: process.env.AIRTABLE_COPY_FILSUMMIT_TOKEN,
    AIRTABLE_COPY_SINGAPORE_BASE_ID: process.env.AIRTABLE_COPY_SINGAPORE_BASE_ID,
  },
};

module.exports = nextConfig;
