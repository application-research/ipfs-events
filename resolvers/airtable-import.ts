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

//To Do: update this to handle different timezone formats
function formatTalkDuration(timestamp, timezone, duration) {
  const startDate = new Date(timestamp);

  // Convert to the specified timezone
  const options: any = { timeZone: timezone, hour12: true, hour: 'numeric', minute: 'numeric' };
  const formattedStartDate = startDate.toLocaleString(timezone, options);

  // Calculate the end time by adding the duration in minutes
  const endDate = new Date(startDate.getTime() + duration * 60 * 1000);
  const formattedEndDate = endDate.toLocaleString(timezone, options);

  return `${formattedStartDate} - ${formattedEndDate}`;
}

//get an array of valid Date objects from trackDates
const getValidDates = (trackDates) => {
  if (Array.isArray(trackDates)) {
    const validDates = trackDates.map((date) => new Date(date)).filter((date) => !isNaN(date.getTime()));
    return validDates;
  } else if (typeof trackDates === 'string') {
    //convert string to a date object
    const date: any = new Date(trackDates);

    if (!isNaN(date)) {
      return [date];
    } else {
      return [];
    }
  } else {
    return [];
  }
};

//format the raw airtable data into camelcase data
export function formatAirtableMetaData(records, timezone) {
  const formattedRecords = records.map((record) => {
    const fields = record.fields;

    const formattedRecord: any = {};

    Object.entries(airtableFormattedFieldsMap).forEach(([airtableField, formattedField]) => {
      if (fields.hasOwnProperty(airtableField)) {
        formattedRecord[formattedField] = fields[airtableField];
      }
    });

    formattedRecord.id = record.id;

    // Calculate talk duration if startTime and duration are available, otherwise set to "Missing data"
    if (formattedRecord.startTime && formattedRecord.duration) {
      const talkDuration = formatTalkDuration(formattedRecord.startTime, timezone, formattedRecord.duration);
      formattedRecord.talkDuration = talkDuration;
    } else {
      formattedRecord.talkDuration = 'empty data';
    }

    return formattedRecord;
  });

  // Sort the records by earliest to latest time
  formattedRecords.sort((a, b) => {
    const timeA = new Date(a.startTime).getTime();
    const timeB = new Date(b.startTime).getTime();
    return timeA - timeB;
  });

  // Filter out Talks or Tracks with status that is not confirmed or accepted
  const acceptedRecords = formattedRecords.filter((record) => {
    if (record.type === 'Talk') {
      return record.status === 'Accepted by track lead';
    } else if (record.type === 'Track') {
      return record.trackStatus === 'Confirmed';
    } else {
      // Ignore records with unknown or missing type
      return false;
    }
  });

  return acceptedRecords;
}

//get the track details for each track
export function getTrackDetails(formattedRecords, trackSelected, timezone) {
  const trackDetails = {};

  formattedRecords.forEach((record) => {
    const { id, trackAttendees, trackDesc, location, title, time, trackDate, trackStatus } = record;

    let confirmedTrackStatus = Array.isArray(trackStatus) ? trackStatus[0] === 'Confirmed' : trackStatus === 'Confirmed';

    if (confirmedTrackStatus && title === trackSelected) {
      if (trackDate) {
        const formattedDate = toDateISOString(trackDate, timezone);

        if (!trackDetails.hasOwnProperty(title)) {
          trackDetails[title] = {
            id,
            trackDate: formattedDate,
            title,
            time,
            trackDesc,
            location,
            trackAttendees,
          };
        }
      }
    }
  });

  return trackDetails;
}

//To Do: make this more readable
export function getFormattedAirtableFields(airtableData, timezone?: any): any {
  const formattedRecords = formatAirtableMetaData(airtableData, timezone);

  const groupedData = {};

  // Iterate through each formatted record and group them by date and track
  formattedRecords.forEach((formattedRecord) => {
    const trackDates = getValidDates(formattedRecord.trackDate);

    trackDates.forEach((trackDate) => {
      if (trackDate) {
        const formattedDate = toDateISOString(trackDate, timezone);
        const rawTrackSelected = formattedRecord.tracks;
        const trackSelected =
          typeof rawTrackSelected === 'string' ? rawTrackSelected : Array.isArray(rawTrackSelected) && rawTrackSelected.length > 0 ? rawTrackSelected[0] : undefined;

        //some tracks return undefined so dont add them to final dictionary
        if (trackSelected !== undefined) {
          if (!groupedData.hasOwnProperty(formattedDate)) {
            groupedData[formattedDate] = {};
          }
          if (!groupedData[formattedDate].hasOwnProperty(trackSelected)) {
            // Pass trackSelected to getTrackDetails to group trackDetails by the specific track
            groupedData[formattedDate][trackSelected] = { trackDetails: getTrackDetails(formattedRecords, trackSelected, timezone), records: [] };
          }

          groupedData[formattedDate][trackSelected].records.push(formattedRecord);
        }
      }
    });
  });

  return groupedData;
}

export function getAirtableData(view, callback) {
  const Airtable = require('airtable');

  const base = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(process.env.AIRTABLE_BASE_ID);

  const records = [];

  //Reffer to Airtable Javascript library
  base('Responses')
    .select({ view })
    .eachPage(
      (pageRecords, fetchNextPage) => {
        records.push(...pageRecords);
        fetchNextPage();
      },
      (err) => {
        if (err) {
          console.error('Error fetching Airtable data:', err);
          callback(null);
        } else {
          callback(records);
        }
      }
    );

  return records;
}
