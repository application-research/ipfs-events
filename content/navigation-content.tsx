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
    schedule: 'Tickets',
    href: '#schedule',
  },
  {
    name: 'Contact',
    href: '',
  },
];

export const NAVIGATION_HOMEPAGE_CONTENT = {
  logo: { src: '/media/colored-logo.png' },
  navItems: [
    {
      title: 'IPFS Thing',
      // link: '/ipfs-thing/2024',
      dropdown: [
        {
          title: 'IPFS Thing 2023',
          link: 'https://2023.ipfs-thing.io/',
          image: 'https://blog.libp2p.io/assets/img/ipfs-thing-2023-02.4b6a8a95.jpg',
          target: '_blank',
        },
        {
          title: 'IPFS Thing 2022',
          link: 'https://2022.ipfs-thing.io/',
          image: 'https://blog.ipfs.tech/assets/img/20220716-174634-mummilu.bf115848.jpg',
          target: '_blank',
        },
      ],
    },
    {
      title: 'IPFS Camp',
      link: '/ipfs-camp/2023',
      dropdown: [
        {
          title: 'IPFS Camp 2023',
          link: 'https://lu.ma/ipfscamp23-prereg',
          image: 'https://blog.ipfs.tech/assets/img/chooseyouradventure.bf5cb5ad.jpeg',
        },
        {
          title: 'IPFS Camp 2022',
          link: 'https://2022.ipfs.camp/',
          image: 'https://blog.ipfs.tech/assets/img/ipfsfunding.b99f5959.jpeg',
        },
      ],
    },
    {
      title: 'IPFS Friends + Cafe',
      link: 'https://lu.ma/ipfsnfriends-paris23',
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
    src: '/media/ipfs-logo.png',
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
      name: 'Tickets',
      href: 'http://localhost:3008/ipfs-thing#tickets',
      target: '_self',
    },
    {
      name: 'Contact',
      href: 'http://localhost:3008/ipfs-thing#contact',
      target: '_self',
    },
  ],
};
