import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, TypeName } from '@root/common/types';

export const HOMEPAGE_HERO_CONTENT = {
  title: 'IPFS powers the Distributed Web & we’re powering their events!',
  description: "IPFS is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.",
};

export const HOMEPAGE_CONTENT = {
  upcomingEvents: [
    {
      date: 'September 2023',
      image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://lu.ma/tdbdprzd',
      location: 'Iceland and Asia',
      name: 'FIL Dev Summit',
    },
    {
      date: 'Q2 2024',
      image: '/media/ipfs-camp.png',
      link: 'https://lu.ma/ipfscamp23-prereg',
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
};
