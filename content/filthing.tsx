import { BlockTypeEnum, CallToActionVariantEnum, Ratio, TypeName } from '@root/common/types';
import { MARKDOWN_CONTENT } from './markdown-content';

export const FILTHING_2023_HERO_CONTENT = {
  id: 'hero',
  type: BlockTypeEnum.HERO,
  // label: 'Events',
  title: 'Filecoin Dev Summit',
  // date: 'September 11-15, 2023 ',
  // location: 'Upcoming Locations - Asia and Iceland',
  description:
    'Filecoin Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (see IPFS Thing, but bigger!).',
  background: {
    src: 'https://images.pexels.com/photos/11180714/pexels-photo-11180714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
};

export const FILTHING_ICELAND_CALENDAR = {
  formLink: {
    title: 'Submit a Talk or a Track for FIL Thing Iceland 2023',
    link: 'https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90',
  },
};

export const FILTHING_ASIA_CALENDAR = {
  formLink: {
    title: 'Submit a Track & Talk for FIL Thing Asia 2023  ',
    link: 'https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg',
  },
};

export const FILTHING_2023_PAGE_CONTENT = [
  {
    id: 'about',
    direction: 'row',
    title: 'Upcoming Events',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA_GRID,
        media: [
          {
            id: 'media',
            type: BlockTypeEnum.MEDIA,
            heading: 'FIL Dev Summit - Asia',
            subtitle: 'September 11-15, 2023',
            desc: 'Taiwan, Asia',
            smallDesc: 'Organized by Miwa',
            media: {
              type: TypeName.MEDIA_IMAGE,
              src: 'https://images.pexels.com/photos/236517/pexels-photo-236517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              ariaLabel: 'Filecoin Dev Summit',
              link: '#filecoin-dev-iceland',
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
              link: '#filecoin-dev-asia',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'about',
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
    noGutter: 'no',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW,
        heading: 'Asia',
        subtitle: 'September 11-15, 2023',
        description: 'September 11-15, 2023',
        smallDesc: 'Organized by Miwa',
        image: {
          src: 'https://images.pexels.com/photos/236517/pexels-photo-236517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          ariaLabel: 'FIL Dev Summit',
          link: '#filecoin-dev-asia',
        },
      },
    ],
  },
  {
    id: '2',
    title: 'Sponsors',
    direction: 'column',
    block: [
      {
        id: 'participating-teams',
        type: BlockTypeEnum.LOGO_GRID,
        logos: [
          {
            src: '/media/evp.png',
            href: null,
          },
          {
            src: '/media/protocollabs.png',
            href: null,
          },
          {
            src: '/media/evp.png',
            href: null,
          },
          {
            src: '/media/protocollabs.png',
            href: null,
          },
          {
            src: '/media/evp.png',
            href: null,
          },
          {
            src: '/media/protocollabs.png',
            href: null,
          },
          {
            src: '/media/evp.png',
            href: null,
          },
          {
            src: '/media/protocollabs.png',
            href: null,
          },
          {
            src: '/media/evp.png',
            href: null,
          },
          {
            src: '/media/protocollabs.png',
            href: null,
          },
          {
            src: '/media/evp.png',
            href: null,
          },
          {
            src: '/media/protocollabs.png',
            href: null,
          },
        ],
      },
    ],
  },
  // {
  //   id: '2',
  //   title: 'FIL Thing - Asia 2023',
  //   direction: 'column',
  //   block: [
  //     {
  //       id: 'media',
  //       type: BlockTypeEnum.MEDIA,
  //       media: {
  //         type: TypeName.MEDIA_IMAGE,
  //         src: 'https://images.pexels.com/photos/236517/pexels-photo-236517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //         ariaLabel: 'IPFS Thing 2023',
  //         ratio: Ratio.TWENTY_ONE_BY_NINE,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 'about',
  //   direction: 'column',
  //   title: 'Schedule',
  //   block: [
  //     {
  //       type: BlockTypeEnum.SCHEDULE,
  //       calendarData: FILTHING_ASIA_CALENDAR,
  //     },
  //   ],
  // },
  // {
  //   id: '2',
  //   title: 'FIL Thing - Iceland 2023',
  //   direction: 'column',
  //   block: [
  //     {
  //       id: 'media',
  //       type: BlockTypeEnum.MEDIA,
  //       media: {
  //         type: TypeName.MEDIA_IMAGE,
  //         src: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //         ariaLabel: 'IPFS Thing 2023',
  //         ratio: Ratio.TWENTY_ONE_BY_NINE,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 'about',
  //   direction: 'column',
  //   title: 'Schedule',
  //   block: [
  //     {
  //       type: BlockTypeEnum.SCHEDULE,
  //       calendarData: FILTHING_ICELAND_CALENDAR,
  //     },
  //   ],
  // },
  // {
  //   id: '2',
  //   title: 'FAQs',
  //   block: [
  //     {
  //       id: 'media',
  //       type: BlockTypeEnum.COLLAPSABLE,
  //       title: 'How can I lead a track?',
  //       collapsedText: 'Please fill out the provided forms for FIL Thing Asia and FIL Thing Iceland to lead a track or a talk.',
  //       backgroundColor: 'black',
  //     },
  //     {
  //       id: 'media',
  //       type: BlockTypeEnum.COLLAPSABLE,
  //       title: 'How do I contact the organizers?',
  //       collapsedText: 'You can reach out to us at ipfs-thing-2023@ipfs.io',
  //       backgroundColor: 'black',
  //     },
  //     {
  //       id: 'media',
  //       type: BlockTypeEnum.COLLAPSABLE,
  //       title: 'How do I participate?',
  //       collapsedText:
  //         'Recordings will be uploaded to our IPFS Youtube channel: https://www.youtube.com/@IPFSbot . Please check there for any updates. There will not be any live streaming.',
  //       backgroundColor: 'black',
  //     },
  //   ],
  // },
];

// export const FOOTER_FILTHING_CONTENT = {
//   disclaimer: {
//     logo: 'https://static-00.iconduck.com/assets.00/filecoin-iou-cryptocurrency-icon-512x512-gw5j9yhd.png',
//     text: '',
//   },
//   filResourcesCard: {
//     heading: 'Get Tickets',
//     siteList: [
//       {
//         text: "FIL 'Thing' Asia",
//         link: '',
//       },
//       {
//         text: "FIL 'Thing' Iceland",
//         link: '',
//       },
//     ],
//   },
//   copyright: [
//     {
//       link: 'https://discuss.ipfs.tech/tos',
//       text: 'Terms & Conditions',
//     },
//     {
//       link: 'https://discuss.ipfs.tech/privacy',
//       text: 'Privacy',
//     },
//     {
//       link: 'https://ipfs.tech/legal/',
//       text: 'DMCA Policy',
//     },
//   ],
// };
export const FILTHING_NAVIGATION_CONTENT = {
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
      href: '',
      target: '_blank',
    },
    {
      text: 'Tickets for Iceland',
      backgroundColor: 'black',
      textColor: 'white',
      href: '',
      target: '_blank',
    },
  ],
};
