export const NAVIGATION_ITEMS_CONTENT = [
  {
    schedule: 'About',
    href: '#about',
  },
  {
    schedule: 'Schedule',
    href: '#schedule',
  },

  {
    name: 'Contact',
    href: '#contact',
  },
];

export const NAVIGATION_HOMEPAGE_CONTENT = {
  logo: { src: '/media/colored-logo.png' },
  navItems: [
    {
      title: 'IPFS Camp',
      link: null,
      dropdown: [
        {
          header: 'Upcoming Event',
          title: 'IPFS Camp 2023',
          date: 'October 28 - November 5, 2023',
          location: 'Location TBD',
          link: 'https://lu.ma/ipfscamp23-prereg',
          image: 'https://blog.ipfs.tech/assets/img/chooseyouradventure.bf5cb5ad.jpeg',
          target: '_blank',
        },
        {
          header: 'Past Events',
          title: 'IPFS Camp 2022',
          location: 'Lisbon, Portugal',
          link: 'https://2022.ipfs.camp/',
          image: 'https://blog.ipfs.tech/assets/img/ipfsfunding.b99f5959.jpeg',
          target: '_blank',
        },
        {
          title: 'IPFS Camp 2019',
          location: 'Barcelona, Spain',
          link: 'https://2019.ipfs.camp/',
          image: 'https://blog.textile.io/content/images/downloaded_images/IPFS-Camp-2019--The-Highlights-and-Takeaways/1-OXfDETjmZqNL1nT3t8himA.jpeg',
          target: '_blank',
        },
      ],
    },
    {
      title: 'IPFS Thing',
      link: null,
      dropdown: [
        {
          header: 'Upcoming Event',
          date: 'TBD, 2024',
          location: 'TBD',
          title: 'IPFS Thing 2024',
          link: null,
          image: 'https://blog.ipfs.tech/assets/img/181806539-3c71476c-b247-4400-9778-5ccfce635f17.fac0cf11.png',
        },
        {
          header: 'Past Events',
          date: 'April 15th - 19th, 2023',
          location: 'Brussels, Belgium',
          title: 'IPFS Thing 2023',
          link: 'https://2023.ipfs-thing.io/',
          image: 'https://blog.libp2p.io/assets/img/ipfs-thing-2023-02.4b6a8a95.jpg',
          target: '_blank',
        },
        {
          title: 'IPFS Thing 2022',
          date: 'July 11 - 17, 2022',
          location: 'Reykjavík, Iceland',
          link: 'https://2022.ipfs-thing.io/',
          image: 'https://blog.ipfs.tech/assets/img/20220716-174634-mummilu.bf115848.jpg',
          target: '_blank',
        },
      ],
    },
    {
      title: 'IPFS Friends + Cafe',
      link: '/ipfs-friends-cafe',
      target: '_blank',
    },
    {
      title: 'Calendar',
      link: 'https://lu.ma/ipfs',
      target: '_blank',
    },
    // {
    //   title: 'Scholars',
    //   link: '',
    //   target: '_blank',
    // },
    // {
    //   title: 'Get Involved',
    //   link: '',
    // },
  ],
};

export const NAVIGATION_CONTENT = {
  logo: {
    src: '/media/ipfs-logo2.png',
    altText: 'ipfs-logo',
    link: '/',
  },
  navItems: [
    {
      name: 'About',
      href: 'http://localhost:3008/ipfs-thing#about',
      target: '_self',
    },
    {
      name: 'Schedule',
      href: 'http://localhost:3008/ipfs-thing#schedule',
      target: '_self',
    },
    {
      name: 'Contact',
      href: 'http://localhost:3008/ipfs-thing#contact',
      target: '_self',
    },
  ],
  cta: [
    {
      text: 'Get Tickets Now',
      href: '#tickets',
      target: '_self',
    },
  ],
};
