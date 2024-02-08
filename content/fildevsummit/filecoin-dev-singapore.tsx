import { BlockDirectionEnum, BlockTypeEnum, NavigationTypeEnum } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_SINGAPORE_2024_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'FIL Dev Summit - Singapore',
  description:
    "FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This summit is more than just a meetup—it's a place for meaningful and impactful conversations that help push Filecoin forward.",
};

export const FIL_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--color-black)',
};

export const FIL_DEV_SUMMIT_SINGAPORE = {
  airtable: {
    tableName: 'NA/EU Talk Track Submissions + Forms',
    endPoint: 'airtable/singapore',
    data: [],
  },
};

export const FILECOIN_DEV_SUMMIT_SINGAPORE_PAGE_CONTENT = [
  {
    id: '2',
    subtitle: 'Sponsors',
    direction: BlockDirectionEnum.COLUMN,
    block: [
      {
        id: 'participating-teams',
        type: BlockTypeEnum.LOGO_GRID,
        logosLarge: [
          {
            src: '/media/protocollabs.png',
            href: 'https://protocol.ai/',
          },
          {
            src: '/media/ff-logo2.png',
            href: 'https://fil.org/',
          },
          {
            src: 'https://i.ibb.co/Dt6G116/logo-black-text.png',
            href: 'https://web3mine.io/',
          },
        ],
        logosMedium: [
          {
            src: '/media/greaterheat.png',
            href: 'https://www.greaterheat.com/',
          },
          {
            src: '/media/glif.png',
            href: 'https://www.glif.io/',
          },
          {
            src: '/media/filfi.png',
            href: 'https://filfi.io/',
          },
          {
            src: '/media/MineFi.png',
            href: 'https://www.minefi.io/',
          },
          {
            src: '/media/STFil.png',
            href: 'https://stfil.io/#/',
          },
        ],
        logosSmall: [
          {
            src: '/media/io-net.png',
            href: 'https://io.net/',
          },
        ],
      },
    ],
  },
 
  {
    id: 'singapore',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
        heading: 'Singapore',
        description: 'September 25 - 27th, 2024',
        smallDesc: 'Organized by Miwa',
        image: {
          alt: 'singapore-fil-dev-summit',
          src: '/media/singapore-full.png',
        },
      },
    ],
  },

  {
    id: 'schedule-singapore',
    direction: BlockDirectionEnum.COLUMN,
    title: 'Event Schedule',
    block: [
      {
        type: BlockTypeEnum.SCHEDULE_SINGAPORE,
        scheduleData: FIL_DEV_SUMMIT_SINGAPORE,
      },
    ],
  },
  {
    id: 'faqs',
    title: 'FAQs',
    direction: BlockDirectionEnum.TWO_COLUMN,
    block: [
      {
        type: BlockTypeEnum.COLLAPSABLES,
        collapsables: [
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is FIL Dev Summit @ Singapore 2023?',
            collapsedText: 'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). At Singapore 2023, FIL Dev Summit will host discuss hot topics around storage & aggregation L2s and how these technologies are revolutionizing decentralized data storage and access in the blockchain space. We will dive into workshops on FIL+ allocator tooling & design, learn about the innovative approaches to enhancing data retrieval speeds and reliability on Filecoin, and gain insights & best practices shared by leading web3 storage clients, as well as onramps. Passionate about decentralized tech? Join us at FIL Dev Summit at Singapore, or if you can’t make it, sponsor our event!',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the goal of FIL Dev Summit?',
            collapsedText: 'What do we want to come out of FIL Dev Summit? We want to bring the Filecoin developer community together, have important convos, show how the network is evolving, build collaboration connections between teams, collectively set a roadmap for critical protocol evolutions and extensions for the rest of this year. ',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I participate at FIL Dev Summit?',
            collapsedText: `Add the slack channel: #fil-dev-summit in [Filecoin Slack](https://filecoinproject.slack.com/archives/C05LHC1ULG1).`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the venue FIL Dev Summit @ Singapore?',
            collapsedText:
              'The Fairmont Hotel at 80 Bras Basah Rd, Singapore 189560. Don’t forget to register to attend. You’ll be able to register at check-in',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What if I need a visa?',
            collapsedText:
              'See the attached docs for Letter of Support/Invitation for Entry Visa: [Singapore](https://drive.google.com/file/d/1Biowq7ENIF9aGNTz69rF0c7yHCusbXyd/view?usp=sharing).',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Will translation services be provided in Singapore?',
            collapsedText: 'Yes, translations will be available in English to Mandarin and Mandarin to English.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
        ],
      },
      {
        type: BlockTypeEnum.COLLAPSABLES,
        collapsables: [
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the track system and how does it work?',
            collapsedText: `This is a choose-your-own-adventure event, so please choose the track(s), sessions, arrival and departure dates, and activities that are interesting and relevant to you. We are actively working on putting together an amazing schedule based on your submissions, suggestions, and feedback. Help shape this event by submitting your own talk or track!`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Is there a cost to attend?',
            collapsedText: `Yes, tickets are $20. Please register to reserve your seat!`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I sponsor? What does it include?',
            collapsedText:
              'Yes! We offer multiple levels of sponsorship. Please fill out our [sponsor form](https://airtable.com/appHcADfPc1dtLsTL/shrLacwJyqpPubZwF) for more information on what is included in each sponsorship.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Will the sessions be recorded?',
            collapsedText:
              'All sessions will be recorded and uploaded to [Youtube channel](https://www.youtube.com/@IPFSbot) ASAP. We are also encouraging everyone to join [#fil-dev-summit](https://app.slack.com/client/TEHTVS1L6/C05LHC1ULG1) in [Filecoin](https://filecoinproject.slack.com/ssb/redirect) slack to stay up to date with all hallway track conversations.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Code of Conduct',
            collapsedText: ` We will be following the following [Code of Conduct](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md).`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
        ],
      },
    ],
  },
  
];

export const FOOTER_FILECOIN_DEV_SUMMIT_CONTENT = {
  links: [
    {
      href: 'https://discuss.ipfs.tech/privacy',
      name: 'Privacy Policy',
    },
    {
      href: 'https://discuss.ipfs.tech/tos',
      name: 'Terms & Conditions',
    },
    {
      href: 'https://ipfs.tech/legal/',
      name: 'DMCA Policy',
    },
  ],
  source: [
    {
      href: 'https://github.com/application-research/fildevsummit',
    },
  ],
};

export const FIL_DEV_SUMMIT_SINGAPORE_NAVIGATION_CONTENT = {
  type: NavigationTypeEnum.WITH_BORDER,
  backgroundColor: 'var(--color-white)',
  logo: {
    src: '/media/fildevsummit-logo.png',
    altText: 'FIL Dev Summit Logo',
    link: '/',
  },
  navItems: [
    {
      name: 'FAQs',
      href: '#faqs',
    },
  ],
};
