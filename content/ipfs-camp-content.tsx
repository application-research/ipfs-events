import { NavigationTypeEnum } from '@root/common/types';

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
      link: '/ipfs-camp/2024',
      location: 'TBD',
      name: 'IPFS Camp 2024',
    },
  ],
};
