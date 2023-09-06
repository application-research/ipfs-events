import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'FIL Dev Summit',
  description:
    "FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!). This summit is more than just a meetup—it's a place for meaningful and impactful conversations that help push Filecoin forward. <br><br> Discussions at the summit will cover a wide range of topics, from protocol scalability and network improvements to the intricacies of data onboarding and governance structures.These conversations serve to share and refine improvements - where participants can gain insights from diverse perspectives, challenge assumptions, and collectively arrive at innovative solutions to the challenges faced by the Filecoin ecosystem.",
};

export const FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-white)',
  textColor: 'var(--color-black)',
};

export const FIL_DEV_SUMMIT_ICELAND = {
  airtable: {
    tableName: 'NA/EU Talk Track Submissions + Forms',
  },
};

export const FIL_DEV_SUMMIT_SINGAPORE = {
  airtable: {
    tableName: 'Asia Talk/Track Submissions + Forms',
  },
};

export const FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT = [
  {
    id: '2',
    subtitle: 'Sponsors',
    direction: BlockDirectionEnum.COLUMN,
    cta: {
      type: CallToActionVariantEnum.BORDER,
      target: '_blank',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      text: 'Sponsor FIL Dev Summit',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shrn57n37JyLSOTlV',
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
            src: 'https://miro.medium.com/v2/resize:fit:2400/1*yjx1hYS0aLMntv_IQjIyyw.png',
            href: 'https://www.glif.io/',
          },
          {
            src: 'https://i.ibb.co/JrQzymQ/Fil-Fi-logo.jpg',
            href: 'https://filfi.io/',
          },
            {
            src: 'https://www.minefi.io/images/logo.png',
            href: 'https://www.minefi.io/',
          },
          },
        ],
      },
    ],
  },
  {
    id: 'about',
    direction: BlockDirectionEnum.ROW,
    title: 'Upcoming Events',
    backgroundColor: 'var(--color-white)',
    block: [
      {
        id: 'upcoming-events',
        type: BlockTypeEnum.MEDIA_GRID,
        media: [
          {
            id: 'upcoming-events',
            type: BlockTypeEnum.MEDIA,
            heading: 'FIL Dev Summit - Singapore',
            subtitle: 'September 12 - 14th, 2023',
            smallDesc: 'Organized by Filecoin Foundation',
            media: {
              type: TypeName.MEDIA_IMAGE,
              src: '/media/singapore-full.png',
              ariaLabel: 'FIL Dev Summit',
              link: '#singapore',
            },
          },
          {
            id: 'upcoming-events',
            type: TypeName.MEDIA_IMAGE,
            heading: 'FIL Dev Summit - Iceland',
            subtitle: 'September 25 - 27th, 2023',
            smallDesc: 'Organized by Miwa',
            media: {
              type: TypeName.MEDIA_IMAGE,
              src: '/media/iceland-full.jpg',
              ariaLabel: 'FIL Dev Summit',
              link: '#iceland',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'tickets',
    title: 'Apply to Attend',
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
            price: '$150',
            name: 'Singapore',
            backgroundColor: 'white',
            textColor: 'black',
            description:
              'Apply to attend Singapore FIL Dev Summit from September 12-14, 2023. </br></br> General Admission is $150 for all three days. Early bird tickets are 50% off until August 25.',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              target: '_blank',
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              text: 'Apply to Attend',
              link: 'https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04',
            },
          },
          {
            id: 'media',
            type: BlockTypeEnum.TICKET_CARD,
            price: '$150',
            backgroundColor: 'white',
            textColor: 'black',
            name: 'Iceland',
            description:
              'Apply to attend Iceland FIL Dev Summit from September 25-27, 2023. </br></br> General Admission is $150 for all three days. Early bird tickets are 50% off until August 25.',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              target: '_blank',
              text: 'Apply to Attend',
              link: 'https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04',
            },
          },
          {
            id: 'media',
            type: BlockTypeEnum.TICKET_CARD,
            backgroundColor: 'white',
            textColor: 'black',
            price: '',
            name: 'Scholars',
            description:
              'This program is designed to provide opportunities for individuals from underrepresented communities, unique circumstances, or developing areas to participate in FIL Dev Summit.',
            cta: {
              type: CallToActionVariantEnum.BORDER,
              buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
              textColor: 'white',
              target: '_blank',
              text: 'Scholar Application',
              link: 'https://airtable.com/appEjnh5rpWMsjocb/shrusGnJBsjYDlcwS',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'singapore',
    direction: BlockDirectionEnum.COLUMN,
    noGutter: 'no',
    backgroundColor: 'var(--color-white)',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
        heading: 'Singapore',
        description: 'September 12 - 14th, 2023',
        image: {
          src: '/media/singapore-long.png',
          ariaLabel: 'FIL Dev Summit - Singapore',
        },
      },
    ],
  },
  {
    id: 'singapore',
    backgroundColor: 'var(--color-white)',

    direction: BlockDirectionEnum.COLUMN,
    title: 'FIL Dev Summit - Singapore Schedule',
    block: [
      {
        type: BlockTypeEnum.SCHEDULE_SINGAPORE,
        scheduleData: FIL_DEV_SUMMIT_SINGAPORE,
      },
      // {
      //   type: BlockTypeEnum.SPEAKERS,
      //   location: LocationEnum.SINGAPORE,
      // },
    ],
  },
  {
    id: 'iceland',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
        heading: 'Iceland',
        description: 'September 25 - 27th, 2023',
        smallDesc: 'Organized by Miwa',
        image: {
          alt: 'Iceland September 25 - 27th, 2023',
          src: '/media/iceland-full.jpg',
        },
      },
    ],
  },
  {
    id: 'iceland',
    direction: BlockDirectionEnum.COLUMN,
    title: 'FIL Dev Summit - Iceland Schedule',
    cta: {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Showcase Your Project at the EXPO',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shr4Pv7K5CxTo6DGi',
    },
    block: [
      {
        type: BlockTypeEnum.SCHEDULE_ICELAND,
        scheduleData: FIL_DEV_SUMMIT_ICELAND,
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
            title: 'What is FIL Dev Summit?',
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
            title: 'Why are there two separate events? Do I have to attend both? How Do I know which to attend?',
            collapsedText:
              'We are hosting two back-to-back Filecoin protocol events in different locations to reduce overhead costs and travel time. You do not need to attend both events; choose the one that makes the most sense for you. The events, tracks, and talks will be recorded and uploaded to watch [on our youtube](https://www.youtube.com/@IPFSbot) throughout the event.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I participate at FIL Dev Summit?',
            collapsedText: `- **Join the conversations**: Join [#fil-dev-summit](https://app.slack.com/client/TEHTVS1L6/C05LHC1ULG1) in [Filecoin](https://filecoinproject.slack.com/ssb/redirect) Slack to stay connected with the conversations happening during the event and beyond.	

- **Tell a friend**: Let us know if there is someone you think we should invite, or direct them to our [website](https://fildev.io/).

- **Lead a Track**: Submit your track for either/both locations in the schedule section of our [website](https://fildev.io/).

- **Give a Talk**: Not ready to lead an entire track, but still would like to contribute? Submit your talk for either/both locations in the schedule section of our website.

- **Volunteer**: Email [hello@fildev.io](mailto:hello@fildev.io) if you’d like to help make the production of this event a success. We could really use your help!


- **Sponsor**: Your support helps bring together different teams from around the world to advance the core protocol development and evolve the Filecoin network. If you’re interested in sponsorship, please email us at [hello@fildev.io](mailto:hello@fildev.io) for more information.		


- **Become a Scholar**: Note that this program is designed to provide opportunities for individuals from underrepresented communities, unique circumstances, or developing areas to participate in FIL Dev Summit. Priority will be given to individuals with a history of strong contributions to FIL implementations and related projects, or potential future contributions to the FIL Implementors community.

- **Keep up the momentum!**: After the event, all of the tracks will be posted to the Filecoin Youtube channel. Be sure to share your talk or track videos with the world! Help the broader community see all of the great work that has transpired and get a sense of what they can expect to see more of for the rest of the year and beyond.`,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What are the venues for FIL Dev Summit?',
            collapsedText:
              'Logistical details will be sent to you once your application has been received, approved, and you have completed the registration for this event by purchasing a ticket.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'What if I need a visa?',
            collapsedText:
              'See the attached docs for Letter of Support/Invitation for Entry Visa: [Iceland](https://drive.google.com/file/d/1jZ8ZbYnX8nvJeS01ou7eKPWKY94IVTfb/view?usp=sharing) and [Singapore](https://drive.google.com/file/d/1Biowq7ENIF9aGNTz69rF0c7yHCusbXyd/view?usp=sharing).',
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
            collapsedText: `This is a choose-your-own-adventure event, so please choose the track(s), sessions, arrival and departure dates, and activities that are interesting and relevant to you. We are actively working on putting together an amazing schedule based on your submissions, suggestions, and feedback. Help shape this event by submitting your own talk or track!

- [Submit for Asia](https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg)

- [Submit for EU/NA](https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90) `,
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'How can I lead a track?',
            collapsedText:
              'Please fill out the provided forms for [FIL Dev Summit Asia](https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg) and [FIL Dev Summit EU/NA](https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90) to lead a track or a talk.',
            backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
          },
          {
            id: 'media',
            type: BlockTypeEnum.COLLAPSABLE,
            title: 'Is there a cost to attend?',
            collapsedText: `This is an invite only event. Please fill out [this form to apply to attend](https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04).

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
              'Yes! We offer multiple levels of sponsorship for both locations. Please fill out our [sponsor form](https://airtable.com/appEjnh5rpWMsjocb/shrn57n37JyLSOTlV) for more information on what is included in each sponsorship.',
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
            title: 'Code of conduct/covid policy',
            collapsedText: ` We will be following the [Code of Conduct](https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md).

          FIL Dev Summit Covid Policy:

          - Masks and testing are optional and at your discretion.

          - If you are presenting any symptoms of being sick or have come in contact with someone who has presented symptoms or tested positive in the last five days, please do not attend the event for your own and all other attendees' health and safety. Rest up and feel better!`,
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

      // {
      //   id: 'media',
      //   type: BlockTypeEnum.COLLAPSABLE,
      //   title: 'Will there be recordings or live streams?',
      //   collapsedText: 'Please fill out the provided forms for FIL Dev Summit Asia and FIL Dev Summit Iceland to lead a track or a talk.',
      //   backgroundColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      // },
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
};

export const FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT = {
  type: NavigationTypeEnum.WITH_BORDER,
  backgroundColor: 'var(--color-white)',
  logo: {
    src: '/media/fildevsummit-logo.png',
    altText: 'FIL Dev Summit Logo',
    link: '/',
  },
  navItems: [
    {
      name: 'Singapore',
      href: '#singapore',
    },
    {
      name: 'Iceland',
      href: '#iceland',
    },
    {
      name: 'Tickets',
      href: '#tickets',
    },
    {
      name: 'FAQs',
      href: '#faqs',
    },
  ],
  cta: [
    {
      text: 'Apply to Attend',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      href: 'https://airtable.com/appEjnh5rpWMsjocb/shran7li4slfQSB04',
      target: '_blank',
    },
  ],
};
