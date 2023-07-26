import { BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';
import { MARKDOWN_CONTENT } from './markdown-content';

export const FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO_NO_BACKGROUND,
  title: 'Filecoin Dev Summit',
  // date: 'September 11-15, 2023 ',
  // location: 'Upcoming Locations - Asia and Iceland',
  description:
    'Filecoin Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (see IPFS Thing, but bigger!).',
};

export const FILECOIN_DEV_SUMMIT_ICELAND_CALENDAR = {
  formLink: {
    title: 'Submit a Talk/Track',
    link: 'https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90',
  },
};

export const FILECOIN_DEV_SUMMIT_ASIA_CALENDAR = {
  formLink: {
    title: 'Submit a Talk/Track',
    link: 'https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg',
  },
};

export const FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT = {
  backgroundColor: 'var(--color-beige)',
  textColor: 'var(--color-black)',
};

export const FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT = [
  {
    id: '2',
    subtitle: 'Sponsors',
    direction: 'column',
    backgroundColor: 'red',
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
    backgroundColor: 'var(--color-beige)',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA_GRID,
        media: [
          {
            id: 'media',
            type: BlockTypeEnum.MEDIA,
            heading: 'FIL Dev Summit - Singapore',
            subtitle: 'September 11-15, 2023',
            desc: 'Singapore',
            smallDesc: 'Organized by Miwa',
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

            heading: 'FIL Dev Summit - Iceland',
            subtitle: 'September 25-29, 2023',
            desc: 'Reykjavík, Iceland',
            smallDesc: 'Organized by Filecoin Foundation',
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
    backgroundColor: 'var(--color-beige)',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
        heading: 'Singapore',
        subtitle: 'September 11-15, 2023',
        description: 'September 11-15, 2023',
        smallDesc: 'Organized by Miwa',
        image: {
          src: 'https://images.pexels.com/photos/3152126/pexels-photo-3152126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          ariaLabel: 'FIL Dev Summit',
          link: '#filecoin-dev-singapore',
        },
      },
    ],
  },
  {
    backgroundColor: 'var(--color-beige)',
    id: 'about',
    direction: 'column',
    title: 'Filecoin Dev Summit - Singapore Schedule',
    cta: {
      type: CallToActionVariantEnum.BLACK,
      buttonColor: 'black',
      textColor: 'white',
      target: '_blank',
      text: 'Tickets for Asia',
      link: 'https://lu.ma/tdbdprzd',
    },
    block: [
      {
        type: BlockTypeEnum.SCHEDULE,
        calendarData: FILECOIN_DEV_SUMMIT_ASIA_CALENDAR,
      },
    ],
  },
  {
    id: 'filecoin-dev-iceland',
    backgroundColor: 'var(--color-beige)',
    direction: 'column',
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
        heading: 'Iceland',
        subtitle: 'September 25-29, 2023',
        description: 'September 25-29, 2023',
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
    cta: {
      type: CallToActionVariantEnum.BLACK,
      buttonColor: 'black',
      textColor: 'white',
      target: '_blank',
      text: 'Tickets for Iceland',
      link: 'https://lu.ma/20menvfi',
    },
    block: [
      {
        type: BlockTypeEnum.SCHEDULE,
        calendarData: FILECOIN_DEV_SUMMIT_ICELAND_CALENDAR,
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
        title: 'How can I lead a track?',
        collapsedText: 'Please fill out the provided forms for Filecoin Dev Summit Asia and Filecoin Dev Summit Iceland to lead a track or a talk.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Who is it for?',
        collapsedText:
          'FVM smart contract builders, core protocol devs, implementation engineering teams, tool builders, storage providers, large storage clients, token holders engaged in network governance, and more! People who care about how and why the protocol is evolving - Folks who are writing FIPS, implementing tools, or writing smart contracts. People who have product requirements. IPLD-yfiying the data as an example.',
        backgroundColor: 'black',
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'What is the goal of Filecoin Dev Summit?',
        collapsedText:
          'What do we want to come out of Fil Thing? We want to bring the Fil dev community together, have important convos, show how the network is evolving, build collaboration connections between teams, collectively set a roadmap for critical protocol evolutions and extensions for next year, setting us up to review projects that we will launch really big at lab week and beyond.',
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
  backgroundColor: 'var(--color-beige)',
  logo: {
    src: 'https://static-00.iconduck.com/assets.00/filecoin-iou-cryptocurrency-icon-512x512-gw5j9yhd.png',
    altText: 'ipfs-logo',
    link: '/',
  },
  cta: [
    {
      text: 'Tickets for Asia',
      backgroundColor: 'black',
      textColor: 'white',
      href: 'https://lu.ma/tdbdprzd',
      target: '_blank',
    },
    {
      text: 'Tickets for Iceland',
      backgroundColor: 'black',
      textColor: 'white',
      href: 'https://lu.ma/20menvfi',
      target: '_blank',
    },
  ],
};
