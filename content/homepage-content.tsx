import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, TypeName } from '@root/common/types';

export const HOMEPAGE_HERO_CONTENT = {
  title: 'IPFS powers the Distributed Web & we’re powering their events!',
  description: "IPFS is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.",
};

export const HOMEPAGE_CONTENT = [
  {
    id: 'ipfs-friends-about',
    direction: 'column',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.HERO,
        title: 'IPFS powers the Distributed Web & we’re powering their events!',
        description: "IPFS is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.",
        // cta: [
        //   {
        //     type: CallToActionVariantEnum.BORDER,
        //     buttonColor: 'black',
        //     textColor: 'white',
        //     target: '_blank',
        //     text: 'Get Tickets for FIL Dev Summit',
        //     link: 'https://fildev.io',
        //   },
        // ],
      },
    ],
  },
  {
    id: 'ipfs-friends-about',
    direction: 'column',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: TypeName.MEDIA_VIDEO,
          src: '/media/ipfs-camp-2022.mp4',
          ariaLabel: 'IPFS Thing 2023 Recap',
        },
      },
    ],
  },
  {
    id: 'about',
    direction: BlockDirectionEnum.ROW,
    title: "Don't know which event to attend?",
    backgroundColor: 'var(--color-white)',
    noGutter: true,
    block: [
      {
        id: 'upcoming-events',
        type: BlockTypeEnum.MEDIA_GRID_SCROLLABLE,
        mediaRow: [
          {
            id: 'upcoming-events',
            type: BlockTypeEnum.MEDIA,
            heading: 'FIL Dev Summit',
            // subtitle: 'September, 2023',
            description:
              'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!).',
            url: 'https://fildev.io',
            icon: {
              type: TypeName.MEDIA_IMAGE,
              src: '/media/fildevsummit-logo.png',
              ariaLabel: 'FIL Dev Summit',
              link: '#singapore',
            },
          },
          {
            id: 'upcoming-events',
            type: TypeName.MEDIA_IMAGE,
            heading: 'IPFS Camp',
            // subtitle: 'Q2 2024',
            description:
              'IPFS is more than just a ‘conference’; it’s a global movement of builders and visionaries committed to creating a better web. Over the course of three days, we will host hundreds of talks, workshops, and hacking sessions, all focused on the latest advancements in decentralized technologies and the future of the internet.',
            url: 'https://ipfsevents.io/ipfs-camp/2024',
            icon: {
              type: TypeName.MEDIA_IMAGE,
              src: '/media/ipfs-camp-logo-black.png',
              ariaLabel: 'FIL Dev Summit',
              link: '#iceland',
            },
          },
          {
            id: 'upcoming-events',
            type: BlockTypeEnum.MEDIA,
            url: 'https://2023.ipfs-thing.io/',
            heading: 'IPFS þing',
            description:
              'IPFS þing is a week-long gathering for the IPFS implementors community. Everything from talks, workshops, discussion circles, hacking time, and more — all focused on advancing IPFS implementations.',
            // subtitle: 'September 12 - 14th, 2023',
            icon: {
              type: TypeName.MEDIA_IMAGE,
              src: '/media/ipfsthing-logo.png',
              ariaLabel: 'IPFS þing',
              link: '#singapore',
            },
          },
          {
            id: 'upcoming-events',
            type: BlockTypeEnum.MEDIA,
            heading: 'IPFS Friends & Cafe',
            // subtitle: 'September 12 - 14th, 2023',
            description: 'Events that foster knowledge exchange, community growth, collaboration, innovation, and the continued advancement of IPFS as groundbreaking technology',
            url: '/ipfs-friends-cafe',
            icon: {
              type: TypeName.MEDIA_IMAGE,
              src: '/media/ipfs-friends-cafe-logo2.png',
              ariaLabel: 'FIL Dev Summit',
              link: '#singapore',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'upcoming-events',
    direction: 'column',
    title: 'Upcoming Events',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.UPCOMING_EVENTS,
        events: [
          {
            date: ' May 1-5 2024',
            image: '/media/ipfs-camp.png',
            link: '/ipfs-camp/2024',
            location: 'Krakow, Poland',
            name: 'IPFS Camp 2024',
          },
          {
            date: 'Q4 2024',
            image: 'https://blog.ipfs.tech/assets/img/181806539-3c71476c-b247-4400-9778-5ccfce635f17.fac0cf11.png',
            link: null,
            location: 'Location TBD',
            target: '_self',
            name: 'IPFS Thing 2024',
          },
        ],
      },
    ],
  },
];
