import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';

export const FIL_DEV_SUMMIT_ETH_DENVER = {
  airtable: {
    endPoint: 'airtable/ipfs-camp2024',
    data: [],
  },
};

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
    endPoint: 'airtable/iceland',
    data: [],
  },
};

export const FIL_DEV_SUMMIT_SINGAPORE = {
  airtable: {
    tableName: 'Asia Talk Track Submissions + Forms',
    endPoint: 'airtable/singapore',
    data: [],
  },
};

export const FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT = [
  {
    id: 'events',
  },
  {
    id: 'recap-video',
    title: 'FDS-2: Iceland Recap',
    direction: 'column',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: TypeName.MEDIA_VIDEO,
          src: 'https://www.youtube.com/watch?v=0tydpHgI_zE',
          ariaLabel: 'FIL Dev Summit 2023 - Iceland',
        },
      },
    ],
  },
  {
    id: 'iceland',
    direction: BlockDirectionEnum.COLUMN,
    title: 'FDS-2: Iceland Schedule',
    description: '',
    cta: {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'View the schedule in a list format',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      link: '/iceland-list',
    },
    // block: [
    //   {
    //     type: BlockTypeEnum.SCHEDULE_ICELAND,
    //     scheduleData: FIL_DEV_SUMMIT_ICELAND,
    //   },
    // ],
  },

  {
    id: 'recap-video',
    title: 'FDS-1: Singapore Recap',
    direction: 'column',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: TypeName.MEDIA_VIDEO,
          src: 'https://youtu.be/JtG08g_Thdc?si=stLVgquaxTc1WvOv',
          alt: 'FIL Dev Summit 2023 - Singapore',
        },
      },
    ],
  },
  {
    id: 'singapore',
    backgroundColor: 'var(--color-white)',

    direction: BlockDirectionEnum.COLUMN,
    title: 'FDS-1: Singapore Schedule',
    description: '',
    cta: {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'view the schedule in a list format',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      link: '/singapore-list',
    },
    // block: [
    //   {
    //     type: BlockTypeEnum.SCHEDULE_SINGAPORE,
    //     scheduleData: FIL_DEV_SUMMIT_SINGAPORE,
    //   },
    // ],
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
      name: 'Events',
      href: '#events',
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

export const FDS_3_LIST_CONTENT = [
  {
    id: 'eth-denver',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    title: 'IPFS Camp 2024 Schedule',
    cta: {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Showcase Your Project at the EXPO',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg',
    },
    block: [
      {
        type: BlockTypeEnum.SCHEDULE_LIST_TOGGLE,
        scheduleData: FIL_DEV_SUMMIT_ETH_DENVER,
        // airtable: {
        //   // tableName: 'Asia Talk Track Submissions + Forms',
        //   endPoint: 'airtable/eth',
        //   host: 'internet-apis.onrender.com',
        //   data: [],
        // },
      },
    ],
  },
];
