if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import * as Server from '@common/server';

import Airtable from 'airtable';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

export default async function apiAirtableData(req, res) {
  await Server.cors(req, res);

  const tableId = process.env.IPFS_CAMP_2024_TABLE_ID;

  try {
    const base = new Airtable({
      apiKey: process.env.IPFS_CAMP_2024_API_KEY,
    }).base(process.env.IPFS_CAMP_2024_BASE_ID!);

    const records = await base(tableId!).select().all();
    res.json({ records });
  } catch (e) {
    console.log(e, 'error in the api');
    res.json({ error: true });
  }
}
