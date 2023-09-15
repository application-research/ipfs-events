import { BlockTypeEnum, TypeName } from '@root/common/types';

export const HOMEPAGE_HERO_CONTENT = {
  title: 'IPFS powers the Distributed Web & we’re powering their events!',
  description: "IPFS is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.",
};

// export const HOMEPAGE_CONTENT = {
//   upcomingEvents: [
//     {
//       date: 'September 2023',
//       image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       link: 'https://lu.ma/tdbdprzd',
//       location: 'Iceland and Asia',
//       name: 'Filecoin Dev Summit',
//     },
//     {
//       date: 'Q2 2024',
//       image: '/media/ipfs-camp.png',
//       link: '/ipfs-camp/2024',
//       location: 'TBD',
//       name: 'IPFS Camp 2023',
//     },
//     {
//       date: 'Q3 2024',
//       image: 'https://blog.ipfs.tech/assets/img/181806539-3c71476c-b247-4400-9778-5ccfce635f17.fac0cf11.png',
//       link: null,
//       location: 'TBD',
//       target: '_self',
//       name: 'IPFS Thing 2024',
//     },
//   ],
// };

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
          src: '/media/event-sample3.png',
          ariaLabel: 'IPFS Thing 2023 Recap',
        },
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
        upcomingEvents: [
          {
            date: 'September 2023',
            image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            link: 'https://lu.ma/tdbdprzd',
            location: 'Iceland and Asia',
            name: 'Filecoin Dev Summit',
          },
          {
            date: 'Q2 2024',
            image: '/media/ipfs-camp.png',
            link: '/ipfs-camp/2024',
            location: 'TBD',
            name: 'IPFS Camp 2023',
          },
          {
            date: 'Q3 2024',
            image: 'https://blog.ipfs.tech/assets/img/181806539-3c71476c-b247-4400-9778-5ccfce635f17.fac0cf11.png',
            link: null,
            location: 'TBD',
            target: '_self',
            name: 'IPFS Thing 2024',
          },
        ],
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
        type: BlockTypeEnum.IMAGE_TEXT,
        image: {
          alt: 'Logistics',
          src: '/media/ipfs-friends-trees.png',
          backgroundColor: 'white',
        },
        description: 'Growth of IPFS community',
      },
      {
        id: 'past-event',
        type: BlockTypeEnum.IMAGE_TEXT,
        image: {
          alt: 'Maintain progress & momentum',
          src: '/media/ipfs-friends-people.png',
          backgroundColor: 'white',
        },
        description: 'Maintain progress & momentum',
      },
      {
        id: 'past-event',
        type: BlockTypeEnum.IMAGE_TEXT,
        image: {
          alt: 'Offers more opportunities to collaborate & foster connections between Camp + Thing',
          src: '/media/ipfs-friends-cloud.png',
          backgroundColor: 'white',
        },
        description: 'Foster Connections between Camp + Thing',
      },
      {
        id: 'past-event',
        type: BlockTypeEnum.IMAGE_TEXT,
        image: {
          alt: 'Promote accessibility & inclusivity by breaking down barriers to IPFS knowledge',
          src: '/media/ipfs-friends-books.png',
          backgroundColor: 'white',
        },
        description: 'Promote accessibility & inclusivity by breaking down barriers to IPFS knowledge',
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
        type: BlockTypeEnum.IMAGE_TEXT,
        image: {
          alt: 'Logistics',
          src: '/media/logistics.png',
          backgroundColor: 'white',
        },
        title: 'Logistics',
        description: 'Registration, comms, & basic marketing',
      },
      {
        id: 'past-event',
        type: BlockTypeEnum.IMAGE_TEXT,
        image: {
          alt: 'Securing PLN Speakers',
          src: '/media/special-guests.png',
          backgroundColor: 'white',
        },
        title: 'Securing PLN Speakers',
        description: 'Our Support to notify and secure PLN speakers or content for your event',
      },
      {
        id: 'past-event',
        type: BlockTypeEnum.IMAGE_TEXT,
        image: {
          alt: 'Providing Swag',
          src: '/media/swag.png',
          backgroundColor: 'white',
        },
        title: 'Providing Swag',
        description: "Pins, stickers, sunnies, mugs, hats - you name it, we're on it",
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
        collapsedText: `We'd love to learn about your ideas for hosting an IPFS + Friends Cafe Community Event. Reach out to miwa@protocol.ai or fill out this  [Interest Form]([https://www.linkedin.com/in/uraleva/](https://linktr.ee/ipfscommunity?lt_utm_source=lt_share_link#287213225)https://linktr.ee/ipfscommunity?lt_utm_source=lt_share_link#287213225).`,
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
