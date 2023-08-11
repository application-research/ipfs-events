if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import * as Server from '@common/server';

import Airtable from 'airtable';

const fetchAirtableData2 = async (req, res, callback) => {
  await Server.cors(req, res);
  console.log(process.env.AIRTABLE_TOKEN);

  try {
    const records = [];
    const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID);

    base('Responses')
      .select({ view: 'IPFS þing 2023 Track & Talk Submissions' })
      .eachPage(
        (pageRecords, fetchNextPage) => {
          records.push(...pageRecords);
          fetchNextPage();
        },
        (err) => {
          console.error('Error fetching Airtable data:', err);
          // err);
        }
      );

    console.log(records);

    return res.json({ response: records });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: 'An error occurred while fetching data.', dog: true });
  }
};

export default fetchAirtableData2;

// base('Responses')
//   .select({ view })
//   .eachPage(
//     (pageRecords, fetchNextPage) => {
//       records.push(...pageRecords);
//       fetchNextPage();
//     },
//     (err) => {
//       if (err) {
//         console.error('Error fetching Airtable data:', err);
//         reject(err);
//       } else {
//         resolve(records);
//       }
//     }
//   );

// console.log(records, 'records');

// return res.json({ records: 'test' });
