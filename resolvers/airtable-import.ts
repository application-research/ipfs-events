import { ScheduleStatusEnum, TrackOrTalkEnum } from '@root/common/types';
import { formatUTCDateString } from '@root/common/utilities';

export const airtableFormattedFieldsMap = {
  // for all
  Title: 'title',
  'Talk or Track?': 'type',
  'Talk or Track': 'type',
  'Start Time': 'startTime', // date + time
  'Youtube Link': 'videoLink',
  TrackLink: 'trackLink',
  'Twitter Profile URL': 'trackLink',
  'Confirmed for website': 'confirmedForWebsite',
  'Confirmed for Website': 'confirmedForWebsite',

  // talk details
  'Talk Description': 'desc',
  'What track(s) would be suitable for your session?': 'tracks',
  'What track(s) would be suitable for your session': 'tracks',
  'What category(s) would be suitable for your session?': 'tracks',
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
  'Room Name': 'roomName',
  'Track Attendees': 'trackAttendees',
  'Track Date': 'trackDate',
  'Track Description': 'trackDesc',
  'Track Filename': 'trackFilename',
  'Track Length': 'trackLength',
  'Track Org': 'trackOrg',
  'Track Speakers And Attendees': 'trackSpeakersAndAttendees',
  'Track Status': 'trackStatus',
  Capacity: 'capacity',
  'Discussion Points': 'discussionPoints',
  Location: 'location',
  Priority: 'priority',
  Time: 'time', // date + time
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

const getValidDates = (trackDates) => {
  // Helper function to convert a date to UTC Date object, it needs to be an object so that it can stay in the UTC time format
  const toUTCDateObject = (dateString) => {
    const date = new Date(dateString);
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()));
  };

  if (Array.isArray(trackDates)) {
    const validDates = trackDates.map((date) => toUTCDateObject(date)).filter((date) => !isNaN(date.getTime()));
    return validDates;
  } else if (typeof trackDates === 'string') {
    const date = toUTCDateObject(trackDates);
    if (!isNaN(date.getTime())) {
      return [date];
    } else {
      return [];
    }
  } else {
    return [];
  }
};

//format the raw airtable data into camelcase data
export function formatAirtableMetaData({ records, timezone }) {
  if (!records) return null;

  const formattedRecords = records?.map((record) => {
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
      formattedRecord.talkDuration = '';
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
    if (record.type === TrackOrTalkEnum.TRACK) {
      return record.trackStatus === ScheduleStatusEnum.CONFIRMED;
    } else if (record.type === TrackOrTalkEnum.TALK) {
      return record.status === ScheduleStatusEnum.ACCEPTED_BY_TRACK_LEAD;
    } else {
      // Ignore records with unknown or missing type
      return false;
    }
  });

  return acceptedRecords;
}

export function getTrackDetails(formattedAirtableData, trackSelected) {
  const trackDetails = {};

  formattedAirtableData.forEach((record) => {
    const { capacity, firstName, tracks, discussionPoints, id, location, order, roomName, startDate, time, title, trackDate, trackDesc, trackSpeakersAndAttendees, trackStatus } =
      record;

    let confirmedTrackStatus = Array.isArray(trackStatus) ? trackStatus[0] === ScheduleStatusEnum.CONFIRMED : trackStatus === ScheduleStatusEnum.CONFIRMED;

    if (confirmedTrackStatus && title === trackSelected) {
      if (trackDate) {
        const formattedDate = formatUTCDateString(trackDate);

        // Use 'id' as the unique key to avoid overwriting tracks with the same title but different dates
        if (!trackDetails.hasOwnProperty(id)) {
          trackDetails[id] = {
            capacity,
            discussionPoints,
            firstName,
            id,
            location,
            order,
            roomName,
            startDate,
            time,
            title,
            trackDate: formattedDate,
            trackDesc,
            tracks,
            trackSpeakersAndAttendees,
          };
        }
      }
    }
  });

  return trackDetails;
}

export function getFormattedAirtableFields(formattedAirtableData): any {
  const groupedData = {};
  const talkRecords = []; // Store all Talk records

  formattedAirtableData.forEach((formattedRecord) => {
    const trackDates = getValidDates(formattedRecord.trackDate);

    trackDates.forEach((trackDate) => {
      if (trackDate) {
        const formattedDate = formatUTCDateString(trackDate);

        switch (formattedRecord.type) {
          case 'Track':
            if (!groupedData.hasOwnProperty(formattedDate)) {
              groupedData[formattedDate] = [];
            }

            let existingTrack = groupedData[formattedDate].find((trackData) => trackData.trackDetails.id === formattedRecord.id);

            if (!existingTrack) {
              const trackDetailsForTrack = getTrackDetails(formattedAirtableData, formattedRecord.title);

              existingTrack = {
                title: formattedRecord.title,
                trackDetails: trackDetailsForTrack[formattedRecord.id],
                records: [],
              };
              groupedData[formattedDate].push(existingTrack);
            }

            break;

          case 'Talk':
            // Save 'Talk' records for processing later
            talkRecords.push(formattedRecord);
            break;

          default:
            // Handle other types if necessary
            break;
        }
      }
    });
  });

  // Process 'Talk' records
  talkRecords.forEach((talk) => {
    const trackDatesForTalk = getValidDates(talk.trackDate);

    trackDatesForTalk.forEach((trackDateForTalk) => {
      if (trackDateForTalk) {
        const formattedDateForTalk = formatUTCDateString(trackDateForTalk);
        const trackForTalk = talk.tracks[0]; //pick the first track for now since the unique talks shows up under 1 track

        if (groupedData.hasOwnProperty(formattedDateForTalk)) {
          let existingTrackForTalk = groupedData[formattedDateForTalk].find((trackData) => trackData.title === trackForTalk);

          if (existingTrackForTalk) {
            existingTrackForTalk.records.push(talk);
          } else {
            const trackDetailsForTalk = getTrackDetails(formattedAirtableData, trackForTalk);
            groupedData[formattedDateForTalk].push({
              title: trackForTalk,
              trackDetails: trackDetailsForTalk[Object.keys(trackDetailsForTalk)[0]], // there is only 1 track details record for a track
              records: [talk],
            });
          }
        }
      }
    });
  });

  // Sort the tracks based on their order
  sortTracksByOrder(groupedData);

  return groupedData;
}

function sortTracksByOrder(groupedData) {
  for (const dateKey in groupedData) {
    groupedData[dateKey].sort((a, b) => (a.trackDetails.order || 0) - (b.trackDetails.order || 0));
  }
}

export function getSpeakers(formattedAirtableData) {
  const speakers = [];

  formattedAirtableData.map((data) => {
    const { confirmedForWebsite, firstName, title, lastName, spkrTitle, status, twitterUrl, headshot } = data ?? null;

    if (firstName && lastName && status == ScheduleStatusEnum.ACCEPTED_BY_TRACK_LEAD) {
      speakers.push({ title, firstName, lastName, spkrTitle, twitterUrl, headshot });
    } else if (firstName && status == ScheduleStatusEnum.ACCEPTED_BY_TRACK_LEAD && confirmedForWebsite == true) {
      speakers.push({ title, firstName, spkrTitle, twitterUrl, headshot });
    }
  });

  return speakers;
}

export function calendarDataWithAddedDates(formattedCalendarData, emptyDatesToAdd) {
  const result = { ...formattedCalendarData };

  const formattedDates = emptyDatesToAdd.map((dateString) => {
    return formatUTCDateString(dateString);
  });

  if (formattedDates.length > 0) {
    formattedDates.forEach((formattedDate, index) => {
      if (formattedDate) {
        result[formattedDate] = [];
      } else {
        console.warn('Invalid formatted date for:', emptyDatesToAdd[index]);
      }
    });

    // Sort the keys (dates) in ascending order
    const sortedDates = Object.keys(result).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    // Create a new object with sorted dates
    const sortedResult = {};
    sortedDates.forEach((date) => {
      sortedResult[date] = result[date];
    });

    return sortedResult;
  } else {
    return formattedCalendarData;
  }
}
