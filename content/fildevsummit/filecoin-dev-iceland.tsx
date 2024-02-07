import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_ETH_DENVER_2024_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'FIL Dev Summit ETH Denver',
  description:
    "FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This summit is more than just a meetup—it's a place for meaningful and impactful conversations that help push Filecoin forward. <br> <br>The date and location will be announced soon!",
};

export const FIL_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--color-black)',
};

//replace
export const FIL_DEV_SUMMIT_ICELAND = {
  airtable: {
    tableName: 'NA/EU Talk Track Submissions + Forms',
    endPoint: 'airtable/iceland',
    data: [],
  },
};

//replace
export const FIL_DEV_SUMMIT_SINGAPORE = {
  airtable: {
    tableName: 'Asia Talk Track Submissions + Forms',
    endPoint: 'airtable/singapore',
    data: [],
  },
};

export const FILECOIN_DEV_SUMMIT_ETH_DENVER_2024_PAGE_CONTENT = [
  {
    id: 'tickets',
    title: 'Register to Attend',
    direction: 'row',
    block: [
      {
        type: BlockTypeEnum.TICKET_CARD,
        backgroundColor: 'white',
        textColor: 'black',
        tickets: [
          {
            id: 'media',
            type: BlockTypeEnum.TICKET_CARD,
            price: '',
            name: 'FIL Dev Summit ETH Denver 2024',
            backgroundColor: 'white',
            textColor: 'black',
            description:
              'Register for ETH Denver FIL Dev Summit. The Date and Location will be announced soon!',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              target: '_blank',
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              text: 'Register',
              link: 'https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04',
            },
          },
        ],
      },
    ],
  },
  {
    id: '2',
    subtitle: 'Sponsors',
    direction: BlockDirectionEnum.COLUMN,
    cta: {
      type: CallToActionVariantEnum.BORDER,
      target: '_blank',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      text: 'Sponsor FIL Dev Summit ETH Denver 2024',
      link: '',
    },
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
        ],
      },
    ],
  },
 
  {
    id: 'eth-denver',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
        heading: 'ETH Denver',
        description: 'Location and dates TBD',
        smallDesc: 'Organized by Miwa',
        image: {
          alt: 'eth-denver-fil-dev-summit',
          src: '/media/iceland-full.jpg',
        },
      },
    ],
  },

  {
    id: 'iceland',
    direction: BlockDirectionEnum.COLUMN,
    title: 'Event Schedule is coming soon',
    description: "",
    // cta: {
    //   type: CallToActionVariantEnum.BUTTON,
    //   textColor: 'white',
    //   target: '_blank',
    //   text: 'Showcase Your Project at the EXPO',
    //   buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
    //   link: 'https://airtable.com/appEjnh5rpWMsjocb/shr4Pv7K5CxTo6DGi',
    // },
    // block: [
    //   {
    //     type: BlockTypeEnum.SCHEDULE_ICELAND,
    //     scheduleData: FIL_DEV_SUMMIT_ICELAND,
    //   },
    // ],
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
            title: 'What is FIL Dev Summit - ETH Denver 2024?',
            collapsedText:
              'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This would include FVM smart contract builders, core protocol devs, implementation engineering teams, tool builders, large storage clients, and even token holders engaged in network governance. Our goal would be to build alignment around the current roadmap and trajectory of protocol improvements, improve our dev tooling and capabilities, grow inter- and intra-team connections, and accelerate upcoming launches in Q4/Q1.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the goal of FIL Dev Summit?',
            collapsedText:
              'What do we want to come out of FIL Dev Summit? We want to bring the Filecoin developer community together, have important convos, show how the network is evolving, build collaboration connections between teams, collectively set a roadmap for critical protocol evolutions and extensions for next year, setting us up to review projects that we will launch really big at lab week and beyond.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Who should attend FIL Dev Summit?',
            collapsedText:
              'FVM smart contract builders, core protocol devs, implementation engineering teams, tool builders, storage providers, large storage clients, token holders engaged in network governance, and more! People who care about how and why the protocol is evolving - Folks who are writing FIPS, implementing tools, or writing smart contracts. People who have product requirements. IPLD-yfiying the data as an example.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I participate at FIL Dev Summit?',
            collapsedText: `- **Join the conversations**: Join the event's Slack channel (COMING SOON) to stay connected with the conversations happening during the event and beyond.	

- **Tell a friend**: Let us know if there is someone you think we should invite, or direct them to our [website](https://2024.fildev.io/) .

- **Lead a Track**: (COMING SOON) - Submit your track for either/both locations in the schedule section of our [website](https://2024.fildev.io/).

- **Give a Talk**: (COMING SOON) -  Not ready to lead an entire track, but still would like to contribute? Submit your talk in the event schedule section of our website.

- **Volunteer**: Email [hello@fildev.io](mailto:hello@fildev.io) if you’d like to help make the production of this event a success. We could really use your help!


- **Sponsor**: Your support helps bring together different teams from around the world to advance the core protocol development and evolve the Filecoin network. If you’re interested in sponsorship, please email us at [hello@fildev.io](mailto:hello@fildev.io) for more information.		

- **Keep up the momentum!**: After the event, all of the tracks will be posted to the Filecoin Youtube channel. Be sure to share your talk or track videos with the world! Help the broader community see all of the great work that has transpired and get a sense of what they can expect to see more of for the rest of the year and beyond.`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What are the venues for FIL Dev Summit?',
            collapsedText:
              'Logistical details will be sent to you once your application has been received, approved, and you have completed the registration for this event.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          // {
          //   id: 'media',
          //   type: BlockTypeEnum.COLLAPSABLE,
          //   title: 'What if I need a visa?',
          //   collapsedText:
          //     'See the attached docs for Letter of Support/Invitation for Entry Visa: [Iceland](https://drive.google.com/file/d/1jZ8ZbYnX8nvJeS01ou7eKPWKY94IVTfb/view?usp=sharing) and [Singapore](https://drive.google.com/file/d/1Biowq7ENIF9aGNTz69rF0c7yHCusbXyd/view?usp=sharing).',
          //   backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          // },
        ],
      },
      {
        type: BlockTypeEnum.COLLAPSABLES,
        collapsables: [
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What is the track system and how does it work?',
            collapsedText: `This is a choose-your-own-adventure event, so please choose the track(s), sessions, arrival and departure dates, and activities that are interesting and relevant to you. We are actively working on putting together an amazing schedule based on your submissions, suggestions, and feedback. Help shape this event by submitting your own talk or track!

- [Submit a track for Fil Dev Summit ETH Denver]()`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I lead a track?',
            collapsedText:
              'Please fill out the provided forms for [FIL Dev Summit ETH Denver]() to lead a track or a talk.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Is there a cost to attend?',
            collapsedText: `This is an invite only event. Please register using [this form to attend]().

- General Admission ($150 USD)
- Early Bird Ticket  ($75 USD), now through Aug 25th!
- Supporters ticket ($1500 USD):  Your supporter's ticket covers the cost of your own attendance & contributes to the FIL Dev Scholar's Program for others to attend as well. Thank you for your support!
- Scholars - Limited Tickets Available. [Apply as a scholar](https://airtable.com/appEjnh5rpWMsjocb/shrusGnJBsjYDlcwS). 
`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I sponsor? What does it include?',
            collapsedText:
              'Yes! We offer multiple levels of sponsorship. Please fill out our [sponsor form]() for more information on what is included in each sponsorship.',
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

export const FIL_DEV_SUMMIT_ETH_DENVER_2024_NAVIGATION_CONTENT = {
  type: NavigationTypeEnum.WITH_BORDER,
  backgroundColor: 'var(--color-white)',
  logo: {
    src: '/media/fildevsummit-logo.png',
    altText: 'FIL Dev Summit Logo',
    link: '/',
  },
  navItems: [
    // {
    //   name: 'Singapore',
    //   href: '#singapore',
    // },

    // {
    //   name: 'Tic',
    //   href: '#tickets',
    // },
    {
      name: 'FAQs',
      href: '#faqs',
    },
  ],
  cta: [
    {
      text: 'Register to Attend',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      href: '',
      target: '_blank',
    },
  ],
};
