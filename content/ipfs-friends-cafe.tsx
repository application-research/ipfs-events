import { BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, Ratio, TypeName } from '@root/common/types';

export const IPFS_FRIENDS_CAFE_PAGE_HERO_CONTENT = {
  id: 'hero',
  title: 'IPFS Friends + Cafe',
  date: 'Community-Hosted Events',
  location: 'Virtual & In Person',
  description: 'Events that foster knowledge exchange, community growth, collaboration, innovation, and the continued advancement of IPFS as groundbreaking technology',
  cta: [
    {
      type: CallToActionVariantEnum.BUTTON,
      backgroundColor: '#589396',
      textColor: 'white',
      target: '_blank',
      text: 'Sign Up to Host an Event',
      link: 'https://linktr.ee/ipfscommunity?lt_utm_source=lt_share_link#287213225',
    },
  ],
};

export const IPFS_FRIENDS_FOOTER_CONTENT = {
  disclaimer: {
    logo: '/media/ipfs-friends-cafe-logo2.png',
    heading: 'IPFS Friends + Cafe fosters knowledge exchange, community growth, collaboration, innovation, and the continued advancement of IPFS as groundbreaking technology',
    text: '',
  },
  filResourcesCard: {
    heading: 'Resources',
    siteList: [
      {
        text: 'IPFS',
        link: 'https://ipfs.tech/',
      },
      {
        text: 'IPFS Event Github',
        link: 'https://github.com/ipfs-shipyard/ipfs-thing-2023',
      },
      {
        text: 'YouTube',
        link: 'https://www.youtube.com/@IPFSbot',
      },
    ],
  },

  socialsCard: {
    icon: '/media/message-bubbles.png',
    socialIcons: [
      {
        text: 'IPFS Twitter',
        image: '/media/twitter-icon.png',
        link: 'https://twitter.com/filecointldr?lang=en',
      },
      {
        text: 'IPFS Events Github',
        image: '/media/e.png',
        link: 'https://github.com/filecoin-project/community#forums',
      },
      {
        text: 'IPFS Discord',
        image: '/media/discord-icon.png',
        link: 'https://discord.com/invite/ipfs',
      },
      {
        text: 'Youtube',
        image: '/media/youtube-icon.png',
        link: 'https://www.youtube.com/channel/UCPyYmtJYQwxM-EUyRUTp5DA',
      },
    ],
  },
  copyright: [
    {
      link: 'https://discuss.ipfs.tech/tos',
      text: 'Terms & Conditions',
    },
    {
      link: 'https://discuss.ipfs.tech/privacy',
      text: 'Privacy Policy',
    },
    {
      link: 'https://ipfs.tech/legal/',
      text: 'DMCA Policy',
    },
  ],
};

export const IPFS_FRIENDS_CAFE_NAVIGATION_CONTENT = {
  type: NavigationTypeEnum.WITH_BORDER,
  logo: {
    src: '/media/ipfs-friends-cafe-logo2.png',
    altText: 'ipfs-logo',
    link: '/',
  },
  //   navItems: [
  //     {
  //       name: 'About',
  //       href: '/ipfs-friends-cafe#ipfs-friends-about',
  //       target: '_self',
  //     },
  //     {
  //       name: 'Past Events',
  //       href: '/ipfs-friends-cafe#ipfs-friends-past-events',
  //       target: '_self',
  //     },
  //     {
  //       name: 'FAQs',
  //       href: '/ipfs-friends-cafe#ipfs-friends-questions',
  //       target: '_self',
  //     },
  //   ],
  cta: [
    {
      text: 'Sign Up to Host an Event',
      backgroundColor: '#589396',
      textColor: 'white',
      href: 'https://linktr.ee/ipfscommunity?lt_utm_source=lt_share_link#287213225',
      target: '_blank',
    },
  ],
};

export const IPFS_FRIENDS_CAFE_PAGE_CONTENT = [
  // {
  //   id: 'hero',
  //   type: BlockTypeEnum.HERO,
  //   title: 'IPFS Friends + Cafe',
  //   date: 'Community-Hosted Events',
  //   location: 'Virtual & In Person',
  //   description: 'Events that foster knowledge exchange, community growth, collaboration, innovation, and the continued advancement of IPFS as groundbreaking technology',
  //   cta: [
  //     {
  //       type: CallToActionVariantEnum.BLACK,
  //       backgroundColor: '#589396',
  //       textColor: 'white',
  //       target: '_blank',
  //       text: 'Sign Up to Host an Event',
  //       link: 'https://linktr.ee/ipfscommunity?lt_utm_source=lt_share_link#287213225',
  //     },
  //   ],
  // },
  {
    id: 'ipfs-friends-about',
    direction: 'column',
    title: 'About',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.IMAGE_TEXT,
        image: {
          type: TypeName.MEDIA_IMAGE,
          imageSize: 'fit',
          src: '/media/ipfs-friends-about.png',
          ariaLabel: 'IPFS Thing 2023',
        },
      },
      {
        type: BlockTypeEnum.TEXT,
        bigTitle: "At our core, we're here to support you, our community, in sharing and spreading the greatness of IPFS.",
        paragraph: "Whether you're a tech guru or just curious about IPFS, we offer a helping hand to bring IPFS learnings and content to your own community. ",
      },
    ],
  },
  // {
  //   id: 'ipfs-friends-about',
  //   direction: 'row',
  //   block: [
  //     {
  //       type: BlockTypeEnum.TEXT,
  //       bigTitle:
  //         'Our regular community events are designed to break down barriers and foster connections, so no one misses out on the excitement and progress happening in the IPFS ecosystem.',
  //       paragraph:
  //         "We understand the importance of accessibility and inclusivity which is why we're dedicated to ensuring that IPFS knowledge reaches every curious mind.We're excited for you to join our global network of IPFS enthusiasts!",
  //     },
  //     {
  //       id: 'media',
  //       type: BlockTypeEnum.IMAGE_TEXT,
  //       image: {
  //         type: TypeName.MEDIA_IMAGE,
  //         src: 'https://blog.ipfs.tech/assets/img/ipfs-thing-1.47413b26.png',
  //         ariaLabel: 'IPFS Thing 2023',
  //       },
  //     },
  //   ],
  // },
  {
    id: 'ipfs-friends-past-events',
    direction: 'row',
    title: 'Goals of IPFS + Friends',
    description:
      'Overall, these community-hosted events serve as a catalyst for knowledge exchange, community growth, collaboration, innovation, and the continued advancement of IPFS as a groundbreaking technology',
    block: [
      {
        id: 'past-event',
        type: BlockTypeEnum.MEDIA_GRID,
        media: [
          {
            id: 'past-event',
            media: {
              type: TypeName.MEDIA_IMAGE_ICON,
              alt: 'Logistics',
              src: '/media/trees.png',
            },
            title: 'Growth of IPFS community',
          },
          {
            id: 'past-event',
            media: {
              type: TypeName.MEDIA_IMAGE_ICON,
              alt: 'Maintain progress & momentum',
              src: '/media/blocks.png',
            },
            title: 'Maintain progress & momentum',
          },
          {
            id: 'past-event',
            media: {
              type: TypeName.MEDIA_IMAGE_ICON,
              alt: 'Offers more opportunities to collaborate & foster connections between Camp + Thing',
              src: '/media/network.png',
            },
            title: 'Foster Connections between Camp + Thing',
          },
          {
            id: 'past-event',
            media: {
              type: TypeName.MEDIA_IMAGE_ICON,
              alt: 'Promote accessibility & inclusivity by breaking down barriers to IPFS knowledge',
              src: '/media/speaker.png',
            },
            title: 'Promote accessibility & inclusivity by breaking down barriers to IPFS knowledge',
          },
        ],
      },
    ],
  },
  {
    id: 'ipfs-friends-past-events',
    direction: 'row',
    title: 'How We Can Help',
    block: [
      {
        id: 'past-event',
        type: BlockTypeEnum.MEDIA_GRID,
        media: [
          {
            media: {
              type: TypeName.MEDIA_IMAGE_ICON,
              alt: 'Logistics',
              src: '/media/logistics.png',
            },
            title: 'Logistics',
            subtitle: 'Registration, comms, & basic marketing',
          },
          {
            id: 'past-event',
            type: TypeName.MEDIA_IMAGE,
            media: {
              type: TypeName.MEDIA_IMAGE_ICON,
              alt: 'Securing PLN Speakers',
              src: '/media/speakers.png',
            },
            title: 'Securing PLN Speakers',
            subtitle: 'Our Support to notify and secure PLN speakers or content for your event',
          },
          {
            id: 'past-event',
            type: TypeName.MEDIA_IMAGE,
            media: {
              type: TypeName.MEDIA_IMAGE_ICON,
              alt: 'Providing Swag',
              src: '/media/swag.png',
            },
            title: 'Providing Swag',
            subtitle: "Pins, stickers, sunnies, mugs, hats - you name it, we're on it",
          },
        ],
      },
    ],
  },
  {
    id: 'ipfs-friends-questions',
    title: 'FAQs',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        backgroundColor: '#589396',
        title: 'What is IPFS Friends + Cafe?',
        collapsedText: `At our core, we're here to support you, our community, in sharing and spreading the greatness of
IPFS. Whether you're a tech guru or just curious about IPFS, we offer a helping hand to bring IPFS
learnings and content to your own community.

Twice a year, we host large-scale events where IPFS users come together from all over the world-
but we believe in keeping the spirit & momentum alive throughout the year with smaller community
events. These more intimate gatherings provide opportunities for everyone to stay connected, learn,
and contribute to the ever-evolving world of IPFS.

We understand the importance of accessibility and inclusivity which is why we're dedicated to
ensuring that IPFS knowledge reaches every curious mind. Our regular community events are
designed to break down barriers and foster connections, so no one misses out on the excitement
and progress happening in the IPFS ecosystem.

We're excited for you to join our global network of IPFS enthusiasts. Together, we can drive the
adoption and limitless possibilities of the IPFS technology, transforming the way we store, share, and
access information across the globe.`,
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        backgroundColor: '#589396',
        title: 'How do I host an event?',
        collapsedText: `We'd love to learn about your ideas for hosting an IPFS + Friends Cafe Community Event. Reach out to [miwa@protocol.ai](mailto:miwa@protocol.ai) or fill out this  [Interest Form]([https://www.linkedin.com/in/uraleva/](https://linktr.ee/ipfscommunity?lt_utm_source=lt_share_link#287213225)https://linktr.ee/ipfscommunity?lt_utm_source=lt_share_link#287213225).`,
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        backgroundColor: '#589396',
        title: 'What are the goals of IPFS Friends + Cafe?',
        collapsedText: `### Knowledge sharing and education:
The event provides a platform to share and disseminate knowledge about IPFS. It allows participants to learn from one another, engage in discussions, and gain a deeper understanding of the tech.

Gathering feedback, insights, and collaboration:
The event provides an opportunity to gather feedback and insights from the [PFS community. Attendees can share their experiences, challenges, and suggestions, which can inform future improvements and developments in the IPFS network.


### Awareness and adoption:
By organizing an event, you can raise awareness about IPFS and its potential applications. It helps attract attention from those who may be interested in adopting IPFS for their projects or exploring its capabilities.



### Community building + Showcasing innovation:

The event brings together IPFS users from around the world, fostering a sense of community and collaboration. It allows participants to connect, network, and build relationships with like-minded individuals who share a passion for IPFS and web3. It's also a platform to showcase innovative projects, use cases, and applications built on top of IPFS. It demonstrates the practicality and real-world impact of the technology, inspiring others to explore its possibilities.`,
      },
    ],
  },
];
