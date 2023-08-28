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
    // const records = await base(name).select().firstPage();
    const records = await base(name).select().all();

    const recordsSize = records.length;
    res.json({ recordsSize, records });
  } catch (e) {
    console.log(e);
    res.json({ error: true });
  }
}

// export default async function apiAirtableIceland(req, res) {
//   const url = 'https://internet-apis.onrender.com/api/airtable/iceland?version=1';
//   const TOKEN = process.env.FILSUMMIT_TOKEN;

//   fetch(url, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       res.json({ data });
//     })
//     .catch((error) => {
//       console.log('There was a problem with the fetch operation:', error.message);
//     });
// }
