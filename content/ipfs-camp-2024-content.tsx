import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, NavigationTypeEnum, TypeName } from '@root/common/types';

export const IPFS_CAMP_2024_NAVIGATION_CONTENT = {
  type: NavigationTypeEnum.WITH_BORDER,
  backgroundColor: 'var(--ipfs-camp-blue)',
  textColor: 'var(--color-white)',
  logo: {
    src: '/media/colored-logo.png',
    altText: 'IPFS Camp 2024',
    link: '/',
  },
  navItems: [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Tracks',
      href: '#tracks',
    },
    {
      name: 'Tickets',
      href: '#tickets',
    },
    // {
    //   name: 'Schedule',
    //   href: '#schedule',
    // },
    // {
    //   name: 'Speakers',
    //   href: '#speakers',
    // },
    {
      name: 'FAQ',
      href: '#faq',
    },
  ],
  cta: [
    {
      text: 'Register to Attend',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      textColor: 'white',
      href: 'https://lu.ma/FDS-EthDenver',
      target: '_blank',
    },
  ],
};

export const IPFS_CAMP_2024_FOOTER_CONTENT = {
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
  socialIcons: [
    {
      text: 'IPFS Twitter',
      image: '/media/twitter-icon.png',
      link: 'https://twitter.com/IPFS?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    },
    {
      text: 'IPFS Events Github',
      image: '/media/e.png',
      link: 'https://github.com/ipfs',
    },
    {
      text: 'IPFS Discord',
      image: '/media/discord-icon.png',
      link: 'https://discord.com/invite/ipfs',
    },
    {
      text: 'YouTube',
      image: '/media/youtube-icon.png',
      link: 'https://www.youtube.com/@IPFSbot',
    },
  ],
  copyright: [
    {
      link: 'https://discuss.ipfs.tech/tos',
      text: 'Terms & Conditions',
    },
    {
      link: 'https://discuss.ipfs.tech/privacy',
      text: 'Privacy',
    },
    {
      link: 'https://ipfs.tech/legal/',
      text: 'DMCA Policy',
    },
  ],
};

export const IPFS_CAMP_2024_PAGE_CONTENT = {
  upcomingEvents: [
    {
      date: 'September 2023',
      image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://lu.ma/tdbdprzd',
      location: 'Iceland and Asia',
      name: 'FIL Dev Summit',
    },
    {
      date: 'Q3 2024',
      image: '/media/ipfs-camp.png',
      link: 'https://2024.ipfs.camp/',
      location: 'TBD',
      name: 'IPFS Camp 2024',
    },
  ],
};

export const IPFS_CAMP_2024_MAIN_PAGE_CONTENT = [
  {
    id: 'hero',
    type: BlockTypeEnum.IPFS_CAMP_2024_HERO,

    block: [
      {
        type: BlockTypeEnum.IPFS_CAMP_2024_HERO,

        title: 'IPFS Camp is for those who want to bend the arc of the Internet to be more open, efficient, and secure.',
        description:
          "It's a gathering for the entire community: builders, operators, researchers… and you! Talks, workshops, discussion circles, hacking time, and more — all focused oncelebrating and advancing a better web. Connecting builders and real-world users, organized by thematic tracks, and inspired by both the in-depth conversations and unbounded energy of previous IPFS gatherings, it will be an event to remember.",
        eventDate: '',
        eventLocation: '',

        videoRecap: {
          title: ' IPFS Camp 2022 - Recap ',
          videoLink: '/media/ipfs-camp-2022-highlights.mp4',
        },
      },
    ],
  },
  // {
  //   id: 'schedule',
  //   type: BlockTypeEnum.SCHEDULE_IPFS_CAMP_2024,
  //   title: 'Schedule',
  //   block: [
  //     {
  //       type: BlockTypeEnum.SCHEDULE_IPFS_CAMP_2024,
  //       title: 'Schedule',
  //       scheduleData: {
  //         airtable: {
  //           tableName: 'IPFS Camp 2024 Tracker',
  //           endPoint: 'airtable/ipfs-camp2024',
  //           host: 'ipfsevents.io',
  //           data: [],
  //         },
  //       },
  //     },
  //   ],
  // },
  {
    id: 'what-to-expect',
    direction: 'column',
    noGutter: 'no',
    block: [
      {
        id: 'what-to-expect',
        type: BlockTypeEnum.IPFS_CAMP_2024_WHAT_TO_EXPECT,
        title: 'What to Expect',
        description:
          "IPFS is more than just a 'conference'; it's a global movement of builders, experts, problem-solvers, and visionaries immersed in creating a better web. Expect hands-on workshops, in-depth discussions, and networking opportunities that will help you better understand how to apply the latest advancements in decentralized technologies to solving your real-world challenges.",
        reviews: {
          title: 'Past Participants Say...',
          list: [
            {
              text: '"Talking with extremely talented and committed people helped me learn a lot.',
            },
            {
              text: '"Great sessions and interactive discussions left me feeling inspired and excited for the future."',
            },
            {
              text: '"Everyone was open-minded to newbie questions, challenges, and having a general goal of curiosity and learning."',
            },
            {
              text: '"We found similar projects that closely align, to learn from, to integrate with."',
            },
            {
              text: '"My questions got answered quickly from folks with expert knowledge of IPFS and the ecosystem."',
            },
          ],
        },
        featuredImage: {
          src: '/media/about-collage.jpg',
          alt: 'What to Expect at IPFS Camp',
        },
      },
    ],
  },
  {
    id: 'tracks',
    direction: 'column',
    block: [
      {
        type: BlockTypeEnum.IPFS_CAMP_2024_TRACKS,
        title: 'Tracks',
        description:
          "IPFS is more than just a 'conference'; it's a global movement of builders, experts, problem-solvers, and visionaries immersed in creating a better web. Expect hands-on workshops, in-depth discussions, and networking opportunities that will help you better understand how to apply the latest advancements in decentralized technologies to solving your real-world challenges.",
        trackList: [
          {
            title: 'Opening Keynotes',
            description:
              'A warm and wonderful kickoff to IPFS Camp with keynote speakers, fireside chats, and a sampling of community talks and perspectives on the present and future of IPFS.',
          },
          {
            title: 'Opening Keynotes',
            description:
              'A warm and wonderful kickoff to IPFS Camp with keynote speakers, fireside chats, and a sampling of community talks and perspectives on the present and future of IPFS.',
          },
          {
            title: 'Open Science',
            description: 'This track explores the latest tools, frameworks, and methods for making science and scientific data more efficient, productive, and equitable.',
          },
          {
            title: 'Decentralized Apps and Publishing',
            description: 'Explore the latest tools, frameworks, and best practices for building and deploying dApps that are resilient and put users in control of their data.',
          },
          {
            title: 'Public Records and Human Rights',
            description: 'Discover how IPFS is being used to protect public records and support human rights initiatives worldwide',
          },
          {
            title: 'AI in 2024: Ethics, Ownership, and Data',
            description:
              "In this track, we'll explore urgent topics of attribution, ethics, and payment in the age of AI-generated art, music, and text. Then, we’ll dive into how content-addressed data can forge new opportunities for creators and developers.",
          },
          {
            title: 'Climate Resilience and IPFS',
            description:
              'In the face of the growing climate crisis, reliable and transparent environmental data is more crucial than ever. This track explores real-world applications of IPFS in environmental monitoring, climate modeling, and disaster response.',
          },
          {
            title: 'Syncing Bytes at Scale',
            description:
              "Dive into the latest techniques and tools for efficiently syncing bytes at scale with IPFS. Learn how to optimize data transfer, ensure data integrity, and reduce bandwidth costs. Whether you're working with scientific, media, or enterprise data, this track has something for anyone working with large-scale data.",
          },
          {
            title: 'Libp2p Day',
            description:
              'Join us for a full day dedicated to libp2p, the modular networking stack that powers IPFS, Ethereum, and other decentralized protocols. Learn about the latest developments in libp2p, including new transports, improved NAT traversal, and enhanced security features. Hear from the core developers and researchers behind libp2p, and discover how you can use this powerful library to build your own networks and applications.',
          },
          {
            title: 'IPLD, Databases, and the People Who Love Them',
            description:
              "Meet the passionate developers and researchers pushing the boundaries of what's possible with IPLD. Learn how experts are IPLD to build more efficient, interoperable databases and data structures, and join the efforts to push IPLD forward.",
          },
          {
            title: 'Startup Showcase',
            description: 'Lightning talks from projects and startups using IPFS to solve real-world problems, plus roundtables on how to solve shared challenges.',
          },
        ],
      },
    ],
  },
  {
    id: 'tickets',
    direction: 'column',
    noGutter: 'no',
    block: [
      {
        type: BlockTypeEnum.IPFS_CAMP_2024_TICKETS,
        title: 'Tickets',
        description: 'All tickets include entry to the full 3-day event with coffee, <br /> morning pastries, and lunch each day, plus an opening dinner.',
        ticketList: [
          {
            name: 'Early Bird',
            price: '$595',
            description: 'Early Bird Ticket Wave 3 ends May 10, enjoy an 8% discount!',
            link: 'https://lu.ma/ipfscamp24',
          },

          {
            name: 'Standard',
            price: '$650',
            description: 'Available for purchase.',
            link: 'https://lu.ma/ipfscamp24',
          },

          {
            name: 'Supporter',
            price: '$2,500',
            description: 'You love IPFS and want (and are able!) to support yourself + 1 Scholar to attend. Thank you!',
            link: 'https://lu.ma/ipfscamp24',
          },
        ],
      },
    ],
  },
  {
    id: 'get-involved',
    direction: 'column',
    block: [
      {
        type: BlockTypeEnum.IPFS_CAMP_2024_GET_INVOLVED,
        title: 'Get Involved',
        list: [
          {
            title: 'Submit a Track or Talk',

            link: 'https://airtable.com/appM094R1Ma5HG757/shrWn6XaRgUkYWPm3',
          },
          {
            title: 'Become a Sponsor',
            link: 'https://airtable.com/appM094R1Ma5HG757/shrXTUagRUI1aC4G1',
          },
          {
            title: 'Apply as an IPFS Scholar',
            link: 'https://airtable.com/appM094R1Ma5HG757/shrQGQ8gH7OUXdUuc',
          },
          {
            title: 'Volunteer',
            link: 'mailto:camp@ipfs.io&subject=Volunteer',
          },
        ],
      },
    ],
  },
  {
    id: 'get-involved',
    direction: 'column',
    block: [
      {
        type: BlockTypeEnum.IPFS_CAMP_2024_PAST_EVENTS,
        title: 'Past Camp Events',
        subtitle: '2022 Impact',
        lineOne: [
          {
            number: '17',
            title: 'Tracks',
          },
          {
            number: '100+',
            title: 'Speakers',
          },
        ],
        lineTwo: [
          {
            number: '540',
            title: 'Participants',
          },
        ],
        statsColumnRight: [
          {
            number: '34',
            title: 'IPFS Scholars',
          },
          {
            number: '30',
            title: 'Countries',
          },
          {
            number: '20',
            title: 'Volunteers',
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
      type: CallToActionVariantEnum.SPONSOR,
      target: '_blank',
      buttonColor: 'linear-gradient(to left, #E01633, #CDB235, #4FD3CD, #0098C9)',
      textColor: 'black',
      text: 'Sponsor IPFS Camp 2024',
      link: 'https://airtable.com/appM094R1Ma5HG757/shrXTUagRUI1aC4G1',
    },
    block: [
      {
        id: 'participating-teams',
        type: BlockTypeEnum.LOGO_GRID,
        logosLarge: [
          {
            src: '/media/IPFS_logo.png',
            href: '',
          },
          {
            src: '/media/pl-logo.png',
            href: '',
          },
        ],
      },
    ],
  },
  {
    id: 'faqs',
    direction: 'column',
    block: [
      {
        type: BlockTypeEnum.IPFS_CAMP_2024_FAQ,
        title: 'FAQs',
        faqsLeft: [
          {
            question: 'What is IPFS Camp and who is it for?',
            answer:
              "IPFS Camp is for those who want to bend the arc of the Internet to be more open, efficient, and secure. It's a gathering for the entire IPFS community: builders, operators, researchers… and you! There will be talks, workshops, discussion circles, hacking time, and more — all focused on celebrating and advancing IPFS.",
          },
          {
            question: 'What does the ticket include?',
            answer: 'All tickets include entry to the full 3-day event with coffee, morning pastries, and lunch each day, plus the opening dinner party on Day 1.',
          },
          {
            question: 'Accommodations',
            answer:
              'The venue is located in the heart of Brussels. If you would like to stay at the Radisson, a limited number of rooms are available via a room block at Є199 per night. Booking details will be provided in your confirmation email.',
          },
          {
            question: 'Childcare',
            answer:
              'Childcare will be provided onsite to make this event more accessible to parents and caregivers. Please fill out the optional questions when you purchase your ticket on Luma. We will reach out to you for final RSVP by June 21.',
          },
          {
            question: 'Will this event be livestreamed?',
            answer:
              'All sessions will be recorded and uploaded to the IPFS Youtube channel ASAP. We are also encouraging everyone to join the IPFS Telegram channel to stay up to date with all hallway track conversations.',
          },
        ],
        faqsRight: [
          {
            question: 'Sounds great! How can I participate?',
            answer:
              "If you don't have a ticket yet, head to the Tickets section to purchase a ticket or apply for a discounted one. This is a decentralized event, with over 15 tracks across 3 days. Explore the track descriptions and schedules, and choose your own adventures depending on your interests! You can: [Submit a track or talk](https://airtable.com/appM094R1Ma5HG757/shrWn6XaRgUkYWPm3), [Sponsor](https://airtable.com/appM094R1Ma5HG757/shrXTUagRUI1aC4G1), [Apply as an IPFS Scholar](https://airtable.com/appM094R1Ma5HG757/shrQGQ8gH7OUXdUuc), [Volunteer](mailto:camp@ipfs.io?subject=Volunteer), or tell a friend!",
          },
          { question: 'How can I reach out to the organizers?', answer: 'Please reach out to camp@ipfs.io with any questions or suggestions.' },
          {
            question: 'What is the COVID / sick policy?',
            answer:
              "Masks will be provided at event entrances and throughout the venue. If you are presenting any symptoms of respiratory illness or have come in contact with someone who has presented symptoms or tested positive in the last five days, please do not attend the event for your own and all other attendees' health and safety. You may email camp@ipfs.io for a refund. Rest up and feel better!",
          },
          {
            question: 'Code of Conduct',
            answer: 'This event will follow the [IPFS Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).',
          },
           {
            question: 'What if I need a visa to attend?',
            answer: 'If you require a visa to attend, please use this general [IPFS Camp 2024 Visa Invitation Letter](https://docs.google.com/document/d/1JLZjwaHmm_vGaCkllJYXeaPvHyBhG-Wf60EGZVvQMQY/edit).',
          },
        ],
      },
    ],
  },
  {
    id: 'footer',
    direction: 'column',
    noGutter: 'no',
    block: [
      {
        type: BlockTypeEnum.IPFS_CAMP_2024_FOOTER,
        title: 'Camp Yearbook',
        links: [
          {
            title: 'Camp 2022',
            link: 'https://2022.ipfs.camp/',
          },
          {
            title: 'Camp 2019',
            link: 'https://2019.ipfs.camp/',
          },
        ],
      },
    ],
  },
];

export const IPFS_CAMP_2024_PAGE_STYLE_CONTENT = {
  backgroundColor: 'transparent',
  textColor: 'var(--color-white)',
};
