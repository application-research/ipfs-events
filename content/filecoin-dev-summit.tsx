import { BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';
import { MARKDOWN_CONTENT } from './markdown-content';

export const FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'Filecoin Dev Summit',
  // date: 'September 12 - 14th, 2023 ',
  // location: 'Upcoming Locations - Asia and Iceland',
  description:
    'Filecoin Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!).',
};

export const FILECOIN_DEV_SUMMIT_ICELAND_CALENDAR = {
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
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shrn57n37JyLSOTlV',
    },
  ],
};

export const FILECOIN_DEV_SUMMIT_ASIA_CALENDAR = {
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
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shrn57n37JyLSOTlV',
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
      text: 'Sponsor Filecoin Dev Summit',
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
            heading: 'Filecoin Dev Summit - Singapore',
            subtitle: 'September 12 - 14th, 2023',

            smallDesc: 'Organized by Filecoin Foundation',
            media: {
              type: TypeName.MEDIA_IMAGE,
              src: 'https://images.pexels.com/photos/3152126/pexels-photo-3152126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              ariaLabel: 'Filecoin Dev Summit',
              link: '#filecoin-dev-singapore',
            },
          },
          {
            id: 'media',
            type: TypeName.MEDIA_IMAGE,

            heading: 'Filecoin Dev Summit - Iceland',
            subtitle: 'September 25 - 27th, 2023',

            smallDesc: 'Organized by Miwa',
            media: {
              type: TypeName.MEDIA_IMAGE,
              src: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              ariaLabel: 'Filecoin Dev Summit',
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
        subtitle: 'Singapore Track focus: SP tooling (venus), Client/Data, Governance',
        description: 'September 12 - 14th, 2023',
        image: {
          src: 'https://images.pexels.com/photos/3152126/pexels-photo-3152126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          ariaLabel: 'Filecoin Dev Summit',
          link: '#filecoin-dev-singapore',
        },
      },
    ],
  },
  {
    backgroundColor: 'var(--color-white)',
    id: 'about',
    direction: 'column',
    title: 'Filecoin Dev Summit - Singapore Schedule',
    block: [
      {
        type: BlockTypeEnum.SCHEDULE,
        calendarData: FILECOIN_DEV_SUMMIT_ASIA_CALENDAR,
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
                text: 'Data onboarding protocol / tools / market Part 1',
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
        subtitle: 'Iceland Track focus: Saturn, IPC (layer 2s), Governance',
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
    title: 'Filecoin Dev Summit - Iceland Schedule',

    block: [
      {
        type: BlockTypeEnum.SCHEDULE,
        calendarData: FILECOIN_DEV_SUMMIT_ICELAND_CALENDAR,
      },
      {
        type: BlockTypeEnum.TABLE,
        title: 'Tentative Tracks and Key Topics',
        table: [
          {
            header: 'Track',
            tableItems: [
              {
                text: 'Data onboarding protocol / tools / market Part 2',
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
                text: 'Identify gaps within the network users, and plan collaborative contributions to reduce friction and improve utilization of the network. (connect to data onboarding track)',
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
        title: 'What is Filecoin Dev Summit?',
        collapsedText:
          'Filecoin Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This would include FVM smart contract builders, core protocol devs, implementation engineering teams, tool builders, large storage clients, and even token holders engaged in network governance. Our goal would be to build alignment around the current roadmap and trajectory of protocol improvements, improve our dev tooling and capabilities, grow inter- and intra-team connections, and accelerate upcoming launches in Q4/Q1.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Who should attend Filecoin Dev Summit?',
        collapsedText:
          'FVM smart contract builders, core protocol devs, implementation engineering teams, tool builders, storage providers, large storage clients, token holders engaged in network governance, and more! People who care about how and why the protocol is evolving - Folks who are writing FIPS, implementing tools, or writing smart contracts. People who have product requirements. IPLD-yfiying the data as an example.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Why are there 2 separate events & which should I attend?',
        collapsedText:
          'We are hosting two back-to-back Filecoin protocol events in different locations to reduce overhead costs and travel time. You do not need to attend both events; choose the one that makes the most sense for you. The events, tracks, and talks will be recorded and uploaded to watch on our youtube throughout the event.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'What is the goal of Filecoin Dev Summit?',
        collapsedText:
          'What do we want to come out of Filecoin Dev Summit? We want to bring the Filecoin developer community together, have important convos, show how the network is evolving, build collaboration connections between teams, collectively set a roadmap for critical protocol evolutions and extensions for next year, setting us up to review projects that we will launch really big at lab week and beyond.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'How can I lead a track?',
        collapsedText: 'Please fill out the provided forms for Filecoin Dev Summit Asia and Filecoin Dev Summit Iceland to lead a track or a talk.',
        backgroundColor: 'black',
      },
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
    altText: 'Filecoin Dev Summit Logo',
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
