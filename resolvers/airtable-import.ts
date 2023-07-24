import { toDateISOString } from '@root/common/utilities';

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
  Location: 'location',
};

const getValidDates = (trackDates) => {
  if (Array.isArray(trackDates)) {
    return trackDates.map((date) => new Date(date)).filter((date) => !isNaN(date.getTime()));
  } else if (typeof trackDates === 'string') {
    const date = new Date(trackDates);
    return isNaN(date as any) ? [] : [date];
  } else {
    return [];
  }
};

//format the raw airtable data into camelcase data
export function formatAirtableMetaData(airtableData) {
  const formattedRecords = airtableData.records.map((record) => {
    const formattedRecord: any = {};

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

//get the details for each track group
export function getTrackDetails(formattedRecords, timezone) {
  const trackDetails = {};

  formattedRecords.map((record) => {
    const { id, trackAttendees, trackDesc, location, title, time, trackDate, trackStatus } = record;

    let confirmedTrackStatus = Array.isArray(trackStatus) ? trackStatus[0] === 'Confirmed' : trackStatus === 'Confirmed';

    if (confirmedTrackStatus) {
      if (trackDate) {
        const formattedDate = toDateISOString(trackDate, timezone);

        if (!trackDetails.hasOwnProperty(formattedDate)) {
          trackDetails[formattedDate] = [];
        }

        trackDetails[formattedDate].push({
          id,
          trackDate: formattedDate,
          title,
          time,
          trackDesc,
          location,
          trackAttendees,
        });

        //To Do: sort the array based on 'time'
      }
    }
  });

  return trackDetails;
}

export function getFormattedAirtableFields(airtableData, timezone) {
  const groupedData = {};

  const formattedRecords = formatAirtableMetaData(airtableData);
  const trackDetails = getTrackDetails(formattedRecords, timezone);

  //group the trackDetails and all formattedRecords by date and track
  //to do: leave out the talks that have not been accepted for now
  formattedRecords.forEach((formattedRecord) => {
    const trackDates = getValidDates(formattedRecord.trackDate);

    trackDates.forEach((trackDate) => {
      if (trackDate) {
        const formattedDate = toDateISOString(trackDate, timezone);
        const rawTrackSelected = formattedRecord.tracks;
        const trackSelected =
          typeof rawTrackSelected === 'string' ? rawTrackSelected : Array.isArray(rawTrackSelected) && rawTrackSelected.length > 0 ? rawTrackSelected[0] : undefined;

        if (!groupedData.hasOwnProperty(formattedDate)) {
          groupedData[formattedDate] = {};
        }
        if (!groupedData[formattedDate].hasOwnProperty(trackSelected)) {
          groupedData[formattedDate][trackSelected] = { trackDetails: trackDetails[formattedDate], records: [] };
        }

        groupedData[formattedDate][trackSelected].records.push(formattedRecord);
      }
    });
  });

  return groupedData;
}

export async function getAirtableData(timezone) {
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
    const formattedData = getFormattedAirtableFields(airtableData, timezone);

    return formattedData;
  } catch (error) {
    console.error('Error fetching Airtable data:', error);
    return null;
  }
}
