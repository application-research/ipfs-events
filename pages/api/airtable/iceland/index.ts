if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import * as Server from '@common/server';

import Airtable from 'airtable';

export default async function apiAirtableIceland(req, res) {
  await Server.cors(req, res);
  const name = 'NA/EU Talk Track Submissions + Forms';

  try {
    const base = new Airtable({ apiKey: process.env.FILSUMMIT_TOKEN }).base(process.env.FILSUMMIT_BASE_ID!);
    const records = await base(name).select().firstPage();

    res.json({ records });
  } catch (e) {
    console.log(e);
    res.json({ error: true });
  }
}
