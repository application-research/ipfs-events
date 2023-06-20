import { fieldsFormatted } from '@root/common/airtable-import';
import { TWENTY_FOUR_HOURS } from '@root/common/utilities';

export const fetchAirtableData = async () => {
  try {
    const cachedData = localStorage.getItem('schedule');

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      const expirationTime = parsedData.timestamp + TWENTY_FOUR_HOURS;

      if (Date.now() < expirationTime) {
        return parsedData;
      }
    }

    const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`, {
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_API}` },
    });

    const airtableData = await res.json();
    localStorage.setItem('schedule', JSON.stringify(airtableData));

    // Extract and format the fields data
    const formattedData = airtableData.records.map((record) => {
      const fieldsData = record.fields;
      const formattedFieldsData = {};

      for (const key in fieldsData) {
        const newKey = fieldsFormatted[key];
        if (newKey) {
          formattedFieldsData[newKey] = fieldsData[key];
        }
      }

      return formattedFieldsData;
    });

    return formattedData;
  } catch (e) {
    console.log(e);
    return null;
  }
};
