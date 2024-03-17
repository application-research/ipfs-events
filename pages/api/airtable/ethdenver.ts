if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import * as Server from '@common/server';

import Airtable from 'airtable';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

export default async function apiAirtableStakingTable(req, res) {
  await Server.cors(req, res);

  const name = process.env.FILSUMMIT_FD3_TABLE_ID;

  try {
    const base = new Airtable({
      apiKey: process.env.FILSUMMIT_FD3_API_KEY,
    }).base(process.env.FILSUMMIT_FD3_BASE_ID!);

    const records = await base(name!).select().all();

    res.json({ records });
  } catch (e) {
    console.log(e);
    res.json({ error: true });
  }
}
