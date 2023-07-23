// import { fieldsFormatted } from '@root/resolvers/airtable-import';
// import { TWENTY_FOUR_HOURS } from '@root/common/utilities';

// export const fetchAirtableData = async (res) => {
//   try {
//     const cachedData = localStorage.getItem('schedule');
//     if (cachedData) {
//       const parsedData = JSON.parse(cachedData);
//       const expirationTime = parsedData.timestamp + TWENTY_FOUR_HOURS;
//       if (Date.now() < expirationTime) {
//         return parsedData;
//       }
//     }
//     const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tbl9IdT0JwqjEuyps?api_key=${process.env.AIRTABLE_API}`, {
//       // headers: { Authorization: `Bearer ${process.env.AIRTABLE_API}` },
//     });
//     const airtableData = await res.json();
//     console.log('airtable data', airtableData);
//     localStorage.setItem('schedule', JSON.stringify(airtableData));
//     // Extract and format the fields data
//     const formattedData = airtableData.records.map((record) => {
//       const fieldsData = record.fields;
//       const formattedFieldsData = {};
//       for (const key in fieldsData) {
//         const newKey = fieldsFormatted[key];
//         if (newKey) {
//           formattedFieldsData[newKey] = fieldsData[key];
//         }
//       }
//       return formattedFieldsData;
//     });
//     return formattedData;
//   } catch (e) {
//     res.status(500).json({ msg: 'Something went wrong! 😕' });

//     return null;
//   }
// };

// export const fetchAirtableData = async () => {
//   try {
//     // const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`, {
//     //   headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` },
//     // });

//     const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Responses`, {
//       headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` },
//     });

//     if (!response.ok) {
//       throw new Error('Error fetching data from Airtable.');
//     }

//     const airtableData = await response.json();
//     console.log(airtableData, 'airtable data');
//     return airtableData;
//   } catch (e) {
//     // res.status(500).json({ msg: 'Something went wrong! 😕' });
//     console.error('Error fetching Airtable data:', e);
//     return 'not found';
//   }
// };
