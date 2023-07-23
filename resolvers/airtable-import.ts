export const airtableFormattedFieldsMap = {
  // for all
  Title: 'title',
  'Talk or Track?': 'type',
  'Talk or Track': 'type',
  'Start Time': 'startTime', // date + time
  'Youtube Link': 'videoLink',
  TrackLink: 'trackLink',
  'Twitter Profile URL': 'trackLink',

  // talk details
  'Talk Description': 'desc',
  'What track(s) would be suitable for your session?': 'tracks',
  'What track(s) would be suitable for your session': 'tracks',
  'Archive of Original Tracks Submission': 'tracksSubmittedFor',
  'What format(s) are suitable for your talk or workshop?': 'format',
  'Talk Status': 'status',

  // for talks
  'Track Date (from TrackLink)': 'trackDate',
  Duration: 'duration',
  Order: 'order',
  'Slide Deck': 'slidesLink',

  // speaker / track lead
  'Title & Organization': 'spkrTitle',
  'If you are affiliated with an organization and would like your logo to be displayed on our event website as a participating team at IPFS thing, please upload a high res image below.':
    'logo',
  Headshot: 'headshot',
  'Email Address': 'email',
  'First Name': 'firstName',
  'Last Name': 'lastName',
  alias: 'prefersAlias',
  'I prefer to have an alias displayed on my track or talk instead of my full name.': 'prefersAlias',
  'I prefer to have an alias displayed on my track or talk instead of my full name': 'prefersAlias',
  'Speaker Listing Name': 'alias',

  // meta
  Created: 'createdDate',
  'Last Modified By': 'lastModifiedBy',
  'Last Modified': 'lastModifiedDate',

  // track details
  Time: 'time', // date + time
  'Track Description': 'trackDesc',
  'Track Date': 'trackDate',
  Priority: 'priority',
  'Track Status': 'trackStatus',
  'Track Filename': 'trackFilename',
  'Track Length': 'trackLength',
  'Track Attendees': 'trackAttendees',
  'Track Org': 'trackOrg',
};

// export function getFormattedAirtableFields(airtableData) {
//   const formattedData = airtableData.records.map((record) => {
//     const formattedRecord = {};

//     Object.entries(airtableFormattedFieldsMap).forEach(([airtableField, formattedField]) => {
//       // Check if the field exists in the record before mapping
//       if (record.fields.hasOwnProperty(airtableField)) {
//         formattedRecord[formattedField] = record.fields[airtableField];
//       }
//     });

//     formattedRecord.id = record.id;

//     return formattedRecord;
//   });

//   return formattedData;
// }

const getValidDates = (trackDates) => {
  if (Array.isArray(trackDates)) {
    return trackDates.map((date) => new Date(date)).filter((date) => !isNaN(date));
  } else if (typeof trackDates === 'string') {
    const date = new Date(trackDates);
    return isNaN(date) ? [] : [date];
  } else {
    return [];
  }
};

export function formatAirtableMetaData(airtableData) {
  const formattedRecords = airtableData.records.map((record) => {
    const formattedRecord = {};

    Object.entries(airtableFormattedFieldsMap).forEach(([airtableField, formattedField]) => {
      if (record.fields.hasOwnProperty(airtableField)) {
        formattedRecord[formattedField] = record.fields[airtableField];
      }
    });

    formattedRecord.id = record.id;
    return formattedRecord;
  });

  return formattedRecords;
}

export function getFormattedAirtableFields(airtableData) {
  const groupedData = {};

  const formattedRecords = formatAirtableMetaData(airtableData);

  formattedRecords.forEach((formattedRecord) => {
    const trackDates = getValidDates(formattedRecord.trackDate);

    trackDates.forEach((trackDate) => {
      if (trackDate) {
        //check the timezone too
        const formattedDate = trackDate.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'long',
          day: 'numeric',
        });

        formattedRecord.trackDate = formattedDate;

        if (!groupedData.hasOwnProperty(formattedDate)) {
          groupedData[formattedDate] = [];
        }

        groupedData[formattedDate].push(formattedRecord);
      }
    });
  });

  return groupedData;
}

export const getAirtableData = async () => {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Responses`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching data from Airtable.');
    }

    const airtableData = await response.json();
    const formattedData = getFormattedAirtableFields(airtableData);

    console.log('formatted data', formattedData);
    return formattedData;
  } catch (error) {
    console.error('Error fetching Airtable data:', error);
    return null;
  }
};
