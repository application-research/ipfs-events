import { BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, TypeName } from '@root/common/types';
import { EVENT_PAGE_SCHEDULE_IPFS_THING_2023 } from './event-page-content';

export const FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'FIL Dev Summit',
  // date: 'September 12 - 14th, 2023 ',
  // location: 'Upcoming Locations - Asia and Iceland',
  description:
    'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!).',
};

export const FILECOIN_DEV_SUMMIT_ICELAND_CALENDAR = {
  airtable: null,
  formLink: {
    title: 'Submit a Talk/Track',
    link: 'https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90',
  },
  ctas: [
    {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Apply to Attend',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC);',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04',
    },
    {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Submit a Talk/Track',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC);',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90',
    },
  ],
};

export const FILECOIN_DEV_SUMMIT_ASIA_CALENDAR = {
  airtable: null,
  formLink: {
    title: 'Submit a Talk/Track',
    link: 'https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg',
  },
  ctas: [
    {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Apply to Attend',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC);',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04',
    },
    {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Submit a Talk/Track',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC);',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg',
    },
  ],
};

export const FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--color-black)',
};

export const FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT = [
  {
    id: '2',
    subtitle: 'Sponsors',
    direction: 'column',
    backgroundColor: 'red',
    cta: {
      type: CallToActionVariantEnum.BORDER,
      target: '_blank',
      buttonColor: null,
      borderColor: 'black',
      textColor: 'black',
      text: 'Sponsor FIL Dev Summit',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shrn57n37JyLSOTlV',
    },
    block: [
      {
        id: 'participating-teams',
        type: BlockTypeEnum.LOGO_GRID,
        logos: [
          {
            src: '/media/protocollabs.png',
            href: 'https://protocol.ai/',
          },
          {
            src: '/media/filecoin-sponsor.png',
            href: 'https://fil.org/',
          },
        ],
      },
    ],
  },
  {
    id: 'about',
    direction: 'row',
    title: 'Upcoming Events',
    backgroundColor: 'var(--color-white)',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA_GRID,
        media: [
          {
            id: 'media',
            type: BlockTypeEnum.MEDIA,
<<<<<<< HEAD

            heading: 'Filecoin Dev Summit - Singapore',
=======
            heading: 'FIL Dev Summit - Singapore',
>>>>>>> ddccff6 (updated event copy)
            subtitle: 'September 12 - 14th, 2023',

            smallDesc: 'Organized by Filecoin Foundation',
            media: {
              type: TypeName.MEDIA_IMAGE,
              src: 'https://images.pexels.com/photos/3152126/pexels-photo-3152126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              ariaLabel: 'FIL Dev Summit',
              link: '#filecoin-dev-singapore',
            },
          },
          {
            id: 'media',
            type: TypeName.MEDIA_IMAGE,

<<<<<<< HEAD
<<<<<<< HEAD
            heading: 'FIL Dev Summit - Iceland',
            subtitle: 'September 25-27th, 2023',
=======
            heading: 'Filecoin Dev Summit - Iceland',
=======
            heading: 'FIL Dev Summit - Iceland',
>>>>>>> ddccff6 (updated event copy)
            subtitle: 'September 25 - 27th, 2023',
<<<<<<< HEAD
>>>>>>> 1e4d745 (updated copy)
            desc: 'Reykjavík, Iceland',
=======

>>>>>>> 25a88a3 (updated homepage)
            smallDesc: 'Organized by Miwa',
            media: {
              type: TypeName.MEDIA_IMAGE,
              src: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              ariaLabel: 'FIL Dev Summit',
              link: '#filecoin-dev-iceland',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'filecoin-dev-singapore',
    direction: 'column',
    noGutter: 'no',
    backgroundColor: 'var(--color-white)',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
        heading: 'Singapore',
        description: 'September 12 - 14th, 2023',
<<<<<<< HEAD
       // smallDesc: 'Organized by Filecoin Foundation',
=======
>>>>>>> 25a88a3 (updated homepage)
        image: {
          src: 'https://images.pexels.com/photos/3152126/pexels-photo-3152126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          ariaLabel: 'FIL Dev Summit',
          link: '#filecoin-dev-singapore',
        },
      },
    ],
  },
  {
    backgroundColor: 'var(--color-white)',
    id: 'about',
    direction: 'column',
<<<<<<< HEAD
<<<<<<< HEAD
    title: 'FIL Dev Summit - Singapore Schedule',
    cta: {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Apply to Attend',
      buttonColor: 'linear-gradient(to right,#123693, #00D389);',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04',
    },
=======
    title: 'Filecoin Dev Summit - Singapore Schedule',
>>>>>>> eeb976a (updated logo and buttons)
=======
    title: 'FIL Dev Summit - Singapore Schedule',
>>>>>>> ddccff6 (updated event copy)
    block: [
      {
        type: BlockTypeEnum.SCHEDULE,
        scheduleData: FILECOIN_DEV_SUMMIT_ASIA_CALENDAR,
      },
      {
        type: BlockTypeEnum.TABLE,
        title: 'Tentative Tracks and Key Topics',
        table: [
          {
            header: 'Track',
            tableItems: [
              {
                text: 'FVM application & tooling',
              },
              {
                text: 'SP tooling & stack',
              },
              {
                text: 'Client Data Onboarding protocol / tools / market Part 1: data onboarding improvements, deal markets/storage service platforms',
              },
              {
                text: 'Protocol  Development & Evolution: Part 1',
              },
              {
                text: 'Governance & Community Part 1',
              },
            ],
          },
          {
            header: 'Discussion Points',
            tableItems: [
              {
                text: 'Defi, program storage, explorers, wallets',
              },
              {
                text: 'SP operations (data and storage onboarding, proving, block creation, account management, monitoring, recovery...), sealing as a service, seal optimization',
              },
              {
                text: 'Capacity onboarding improvements, snap deals aggregation, deal markets/storage service platforms',
              },
              {
                text: 'layer 0 vs 1 vs 2 protocol, moving functionality into FVM, IPC regions for Filecoin, upgrade path, Better PoReps, upgrading the filecoin economy',
              },
              {
                text: 'FIL+, FIP process, Network upgrade scope/schedule, Ambassadors, Funding programs, 2024 events',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'filecoin-dev-iceland',
    backgroundColor: 'var(--color-white)',
    direction: 'column',
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
        heading: 'Iceland',
        description: 'September 25 - 27th, 2023',
        smallDesc: 'Organized by Miwa',
        image: {
          alt: 'Maintain progress & momentum',
          src: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
      },
    ],
  },
  {
    id: 'about',
    direction: 'column',
<<<<<<< HEAD
<<<<<<< HEAD
    title: 'FIL Dev Summit - Iceland Schedule',
    cta: {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Apply to Attend',
      buttonColor: 'linear-gradient(to right,#123693, #00D389);',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04',
    },
=======
    title: 'Filecoin Dev Summit - Iceland Schedule',

>>>>>>> eeb976a (updated logo and buttons)
=======
    title: 'FIL Dev Summit - Iceland Schedule',
>>>>>>> ddccff6 (updated event copy)
    block: [
      {
        type: BlockTypeEnum.SCHEDULE,
        scheduleData: FILECOIN_DEV_SUMMIT_ICELAND_CALENDAR,
      },
      {
        type: BlockTypeEnum.TABLE,
        title: 'Tentative Tracks and Key Topics',
        table: [
          {
            header: 'Track',
            tableItems: [
              {
                text: 'Client Data Onboarding protocol / tools / market Part 2',
              },
              {
                text: 'Protocol  Development & Evolution: Part 2',
              },
              {
                text: 'Governance & Community Part 2',
              },
              {
                text: 'Clients Onboarding Experience',
              },
              {
                text: 'Chain tooling & infrastructure',
              },
              {
                text: 'FVM & Runtimes',
              },
              {
                text: 'Scalability & compute over data',
              },
              {
                text: 'Filecoin Retrievals & Data Availability',
              },
            ],
          },
          {
            header: 'Discussion Points',
            tableItems: [
              {
                text: 'Capacity onboarding improvements, snap deals aggregation, deal markets/storage service platforms, Client advisory board feedback',
              },
              {
                text: 'layer 0 vs 1 vs 2 protocol, moving functionality into FVM, IPC regions for Filecoin, upgrade path, Better PoReps, upgrading the filecoin economy',
              },
              {
                text: 'FIL+, FIP process, Network upgrade scope/schedule, Ambassadors, Funding programs, 2024 events',
              },
              {
                text: 'Identify gaps within the network users, and plan collaborative contributions to reduce friction and improve utilization of the network. (connect to Client Data Onboarding track)',
              },
              {
                text: 'Snapshotting, API services, test networks, monitoring',
              },
              {
                text: 'RaaS, new runtimes, moving modules into FVM',
              },
              {
                text: 'IPC L2s, CoD, Meridian, Tableland, etc',
              },
              {
                text: 'Content Address, Retrieval Market, Retrieval Incentives, etc',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: '2',
    title: 'FAQs',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'What is FIL Dev Summit?',
        collapsedText:
          'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This would include FVM smart contract builders, core protocol devs, implementation engineering teams, tool builders, large storage clients, and even token holders engaged in network governance. Our goal would be to build alignment around the current roadmap and trajectory of protocol improvements, improve our dev tooling and capabilities, grow inter- and intra-team connections, and accelerate upcoming launches in Q4/Q1.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'What is the goal of FIL Dev Summit?',
        collapsedText:
          'What do we want to come out of FIL Dev Summit? We want to bring the Filecoin developer community together, have important convos, show how the network is evolving, build collaboration connections between teams, collectively set a roadmap for critical protocol evolutions and extensions for next year, setting us up to review projects that we will launch really big at lab week and beyond.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Who should attend FIL Dev Summit?',
        collapsedText:
          'FVM smart contract builders, core protocol devs, implementation engineering teams, tool builders, storage providers, large storage clients, token holders engaged in network governance, and more! People who care about how and why the protocol is evolving - Folks who are writing FIPS, implementing tools, or writing smart contracts. People who have product requirements. IPLD-yfiying the data as an example.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Why are there 2 separate events? Do I have to attend both? How Do I know which to attend?',
        collapsedText:
          'We are hosting two back-to-back Filecoin protocol events in different locations to reduce overhead costs and travel time. You do not need to attend both events; choose the one that makes the most sense for you. The events, tracks, and talks will be recorded and uploaded to watch [on our youtube](https://www.youtube.com/@IPFSbot) throughout the event.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'How can I participate at Fil Dev Summit?',
        collapsedText: `
####Join the conversations
Join [#fil-dev-summit](https://app.slack.com/client/TEHTVS1L6/C05LHC1ULG1) in [Filecoin](https://filecoinproject.slack.com/ssb/redirect) Slack to stay connected with the conversations happening during the event and beyond.	

 ##Tell a friend
- Let us know if there is someone you think we should invite, or direct them to our [website](https://fildev.io/).

##Lead a Track
- Submit your track for either/both locations in the schedule section of our [website](https://fildev.io/).

##Give a Talk
- Not ready to lead an entire track, but still would like to contribute? Submit your talk for either/both locations in the schedule section of our website.

##Volunteer
- Email [miwa@protocol.ai](mailto:miwa@protocol.ai) if you’d like to help make the production of this event a success. We could really use your help!

##Sponsor
- Your support helps bring together different teams from around the world to advance the core protocol development and evolve the Filecoin network. If you’re interested in sponsorship, please email us at [miwa@protocol.ai](mailto:miwa@protocol.ai) for more information.		

##Keep up the momentum!
- After the event, all of the tracks will be posted to the Filecoin Youtube channel. Be sure to share your talk or track videos with the world! Help the broader community see all of the great work that has transpired and get a sense of what they can expect to see more of for the rest of the year and beyond.`,
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'What if I need a visa?',
        collapsedText: 'See attached docs.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'What is the track system and how does it work?',
        collapsedText: `This is a choose-your-own-adventure event, so please choose the track(s), sessions, arrival and departure dates, and activities that are interesting and relevant to you. We are actively working on putting together an amazing schedule based on your submissions, suggestions, and feedback. Help shape this event by submitting your own talk or track!
		    - [Submit for Asia](https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg)
	   - [Submit for EU/NA](https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90) `,
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'How can I lead a track?',
        collapsedText:
          'Please fill out the provided forms for FIL Dev [Summit Asia](https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg) and [FIL Dev Summit EU/NA](https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90) to lead a track or a talk.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Is there a cost to attend?',
        collapsedText:
          'This is an invite only event. Please fill out [this form to apply to attend](https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04). Once you are accepted you will receive a ticket to attend FIL Dev Summit.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'How can I sponsor? What does it include?',
        collapsedText:
          'Yes! We offer multiple levels of sponsorship. From Scholars, Node, and Cluster, to Network and Interplanetary, there will be a sponsorship for you! Please fill out [this sponsor form](https://airtable.com/appEjnh5rpWMsjocb/shrn57n37JyLSOTlV) for more information on what is included in each sponsorship and to apply.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Will the sessions be recorded?',
        collapsedText:
          'All sessions will be recorded and uploaded to [Youtube channel](https://www.youtube.com/@IPFSbot) ASAP. We are also encouraging everyone to join [#fil-dev-summit](https://app.slack.com/client/TEHTVS1L6/C05LHC1ULG1) in [Filecoin](https://filecoinproject.slack.com/ssb/redirect) slack to stay up to date with all hallway track conversations.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Code of conduct/covid policy',
        collapsedText: ` We will be following the [IPFS Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md), and the IPFS Code of [Conduct Events Addendum](https://github.com/ipfs/community/blob/master/code-of-conduct-for-events.md) as part of the above CoC.
        
IPFS þing's Covid Policy:

- Masks and testing are optional and at your discretion.

- If you are presenting any symptoms of being sick or have come in contact with someone who has presented symptoms or tested positive in the last five days, please do not attend the event for your own and all other attendees' health and safety. Rest up and feel better!`,
        backgroundColor: 'black',
      },
      // {
      //   id: 'media',
      //   type: BlockTypeEnum.COLLAPSABLE,
      //   title: 'Will there be recordings or live streams?',
      //   collapsedText: 'Please fill out the provided forms for FIL Dev Summit Asia and FIL Dev Summit Iceland to lead a track or a talk.',
      //   backgroundColor: 'black',
      // },
    ],
  },
];

export const FOOTER_FILECOIN_DEV_SUMMIT_CONTENT = {
  links: [
    {
      href: 'https://discuss.ipfs.tech/tos',
      name: 'Terms & Conditions',
    },
    {
      href: 'https://discuss.ipfs.tech/privacy',
      name: 'Privacy',
    },
    {
      href: 'https://ipfs.tech/legal/',
      name: 'DMCA Policy',
    },
  ],
};

export const FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT = {
  type: NavigationTypeEnum.WITH_BORDER,
  backgroundColor: 'var(--color-white)',
  logo: {
    src: '/media/filecoindevsummit-logo.png',
    altText: 'FIL Dev Summit Logo',
    link: '/',
  },
  cta: [
    {
      text: 'Apply to Attend',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC);',
      textColor: 'white',
      href: 'https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04',
      target: '_blank',
    },
  ],
};
