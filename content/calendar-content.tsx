import { CallToActionVariantEnum } from '@root/common/types';

export const CALENDAR_CONTENT = [
  {
    day: 'Fri',
    date: 'April 14',
    trackSubmissionForm: 'https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90',
    events: [
      {
        name: 'Opening Keynotes',
        time: '9am - 10 am',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
        description:
          "Room: Royal A+B. Welcome to IPFS Thing 2023! During this opening session, we'll hear an overview of the latest implementations, tools, and advancements across the world of IPFS, and celebrate the winners of the IPFS Impact Grants Round 2. We'll also go over what to expect from the next 5 days.",
        ctas: [
          {
            type: CallToActionVariantEnum.BORDER,
            target: '_blank',
            text: 'View Video Playlist',
            link: '#tickets',
          },
          {
            type: CallToActionVariantEnum.BORDER,
            target: '_blank',
            text: 'Get Tickets Now!',
            link: '#tickets',
          },
        ],
        schedule: {
          columns: [
            {
              name: 'Time',
            },
            {
              name: 'Speaker',
            },
            {
              name: 'About',
            },
          ],
          rows: [
            {
              title: '',
              name: '',
            },
            {
              title: '',
              name: '',
            },
            {
              title: '',
              name: '',
            },
          ],
        },
      },
      {
        name: 'IPFS Today',
        time: '10 am - 11:15 am',
        location: ' Radisson Grand Place, Brussels',
        people: '50',
      },
      {
        name: 'Measuring IPFS',
        time: '11:30 am - 12:30 pm',
        location: ' Radisson Grand Place, Brussels',
        people: '50',
      },
    ],
  },
  {
    day: 'Fri',
    date: 'April 15',
    events: [
      {
        name: 'IPFS on the Web',
        time: '9 am - 10 am',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
      {
        name: 'Interplanetary Databases',
        time: '10am',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
      {
        name: 'Content Routing',
        time: '11am',
        location: ' Radisson Grand Place, Brussels',
        people: '100',
      },
    ],
  },
  {
    day: 'Sat',
    date: 'April 16',
    events: [
      {
        name: 'HTTP Gateways',
        time: '9 am - 10 am',
        location: ' Radisson Grand Place, Brussels',
        people: '100',
      },
      {
        name: 'Decentralized COmpute & AI',
        time: '10 am - 11 am',
        location: ' Radisson Grand Place, Brussels',
        people: '100',
      },
      {
        name: 'Integrating IPFS',
        time: '11:30 am - 12:30 pm',
        location: ' Radisson Grand Place, Brussels',
        people: '100',
      },
    ],
  },
  {
    day: 'Sun',
    date: 'April 17',
    events: [
      {
        name: 'Unconference Sessions',
        time: '9am',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
      {
        name: 'Community & Governance',
        time: '10 am - 11 am',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
      {
        name: 'Hack Time',
        time: '11am',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
    ],
  },
  {
    day: 'Mon',
    date: 'April 18',
    events: [
      {
        name: 'Workshop 1',
        time: '9 am - 6:00 pm',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
      {
        name: 'Workshop 2',
        time: '10 am - 11 am',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
      {
        name: 'Workshop 3',
        time: '11 am - 12:30 pm',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
    ],
  },
  {
    day: 'Tues',
    date: 'April 19',
    events: [
      {
        name: 'Unconference Sessions',
        time: '9 am - 6:00 pm',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
      {
        name: 'Community & Governance II',
        time: '10 am - 11 am',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
      {
        name: 'Workshop 3',
        time: '11 am - 12:30 pm',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
    ],
  },
  {
    day: 'Mon',
    date: 'April 20',
    events: [
      {
        name: 'Workshop 1',
        time: '9am',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
      {
        name: 'Workshop 2',
        time: '10 am - 11 am',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
      {
        name: 'Workshop 3',
        time: '11 am - 12:30 pm',
        location: ' Radisson Grand Place, Brussels',
        people: 'All Welcome',
      },
    ],
  },
];
