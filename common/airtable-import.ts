export const fieldsFormatted = {
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

// const getAirtableData = (baseURL, options, onRecordsReady) => {
//   let records = [];
//   let offset = null;

//   const getNextPage = () => {
//     const offsetStr = offset != null ? `&offset=${offset}` : '';
//     const url = `${baseURL}${offsetStr}`;
//     https
//       .get(url, options, (res) => {
//         let data = [];

//         res.on('data', (chunk) => {
//           data.push(chunk);
//         });

//         res.on('end', () => {
//           const bc = Buffer.concat(data);
//           const str = bc.toString();
//           const obj = JSON.parse(str);
//           records = records.concat(obj.records);
//           if (obj.offset != null) {
//             offset = obj.offset;
//             getNextPage();
//           } else {
//             onRecordsReady(records);
//           }
//         });
//       })
//       .on('error', (err) => {
//         console.error('Error:', err.message);
//       });
//   };

//   getNextPage();
// };

// const onRecordsReady = (rawRecords) => {
//   console.log('Records', rawRecords.length);

//   const records = cleanDump(rawRecords);

//   const talks = getTalks(records);

//   const tracks = getTracks(records);

//   const grouped = groupTracks(tracks, talks);

//   const trackTitles = Object.keys(grouped);

//   const tracksParsed = trackTitles.map((t) => grouped[t]);

//   // render to target format
//   //
//   // TODO: make format configurable
//   // right now is just frontmatter for Tina
//   const tracksRendered = tracksParsed.map((t) => {
//     const filename = t.trackFilename || t.title.replaceAll(/\W/g, '-') + '.md';
//     t.filename = filename;

//     //const toml = trackToTOML(t);
//     //t.toml = toml;
//     const fm = trackToFM(t);
//     t.fm = fm;

//     return t;
//   });

//   // if debug mode just dump first track
//   if (DEBUG) {
//     console.log(tracksRendered[0]);
//   } else {
//     // write
//     tracksRendered.forEach((t) => {
//       const path = './content/tracks/' + t.filename;
//       writeFile(path, t.fm);
//     });
//   }

//   console.log('Tracks', tracks.length);
//   console.log('Talks', talks.length);
// };

// const getTalks = (records) => {
//   return records
//     .filter((r) => r.type == 'Talk' && r.status == 'Accepted by track lead')
//     .map((r) => {
//       // clean tracks
//       if (!r.tracks) {
//         r.tracks = r.tracksSubmittedFor;
//       }
//       return r;
//     });
// };

// const getTracks = (records) =>
//   records
//     .filter((r) => r.type == 'Track' && r.trackStatus == 'Confirmed')
//     .map((r) => {
//       //console.log(r.title);
//       return r;
//     });

// const groupTracks = (tracks, talks) => {
//   // array of track titles
//   const trackTitles = tracks.map((t) => t.title);

//   // create map of track title => track data
//   const trackList = tracks
//     .sort((a, b) => {
//       // sort tracks by date
//       return a.trackDate.localeCompare(b.trackDate);
//     })
//     .reduce((obj, t) => {
//       // array to hold talks
//       t.talks = [];
//       // set track title property
//       obj[t.title] = t;
//       return obj;
//     }, {});

//   // add each talk to its track
//   talks.forEach((talk) => {
//     if (typeof talk.tracks == 'undefined') {
//       // if talk is on a track that isn't confirmed
//       // then drop it for now, will fix in airtable
//     } else {
//       trackList[talk.tracks[0]].talks.push(talk);
//     }
//   });

//   // Sort each track talks by time
//   Object.keys(trackList).forEach((k) => {
//     trackList[k].talks = trackList[k].talks.sort((a, b) => {
//       return String(a.startTime).localeCompare(String(b.startTime));
//     });
//   });

//   return trackList;
// };

// getAirtableData(url, options, onRecordsReady);
