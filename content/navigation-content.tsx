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
      link: '/ipfs-thing/2024',
      dropdown: [
        {
          title: 'IPFS Thing 2023',
          link: '/ipfs-thing/2023',
          image: 'https://blog.libp2p.io/assets/img/ipfs-thing-2023-02.4b6a8a95.jpg',
        },
        {
          title: 'IPFS Thing 2022',
          link: '/ipfs-thing/2022',
          image: 'https://blog.ipfs.tech/assets/img/20220716-174634-mummilu.bf115848.jpg',
        },
      ],
    },
    {
      title: 'IPFS Camp',
      link: '/ipfs-camp/2023',
      dropdown: [
        {
          title: 'IPFS Camp 2023',
          link: '/ipfs-camp/2023',
          image: 'https://blog.ipfs.tech/assets/img/chooseyouradventure.bf5cb5ad.jpeg',
        },
        {
          title: 'IPFS Camp 2022',
          link: '/ipfs-camp/2022',
          image: 'https://blog.ipfs.tech/assets/img/ipfsfunding.b99f5959.jpeg',
        },
      ],
    },
    {
      title: 'IPFS Friends + Cafe',
      link: 'https://www.canva.com/design/DAFjLxim8uQ/zwv7ZGCGbCHsJPy9g0V6qA/view?utm_content=DAFjLxim8uQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1',
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
