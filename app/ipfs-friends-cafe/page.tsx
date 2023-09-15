import '@root/global.scss';

import { FOOTER_TINY_CONTENT } from '@root/content/footer-content';
import { IPFS_FRIENDS_CAFE_NAVIGATION_CONTENT, IPFS_FRIENDS_CAFE_PAGE_CONTENT, IPFS_FRIENDS_CAFE_PAGE_HERO_CONTENT } from '@root/content/ipfs-friends-cafe';
import DefaultLayout from '@components/DefaultLayout';
import FooterTiny from '@root/components/FooterTiny';
import Hero from '@root/components/Hero';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';

export async function generateMetadata({ params, searchParams }) {
  const title = 'IPFS Events: IPFS Thing';
  const description =
    'IPFS þing is a week-long gathering for the IPFS implementors community. Everything from talks, workshops, discussion circles, hacking time, and more — all focused on advancing IPFS implementations. ';
  const url = 'https://ipfsevents.io/ipfs-thing';

  return {
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      // SUMMARY_LARGE_IMAGE: 1500x785
      images: [''],
    },
    twitter: {
      title,
      description,
      url,
      handle: '@filecoin',
      cardType: 'summary_large_image',
    },
  };
}

export default async function Page(props) {
  const blocks = IPFS_FRIENDS_CAFE_PAGE_CONTENT;
  const footerContent = FOOTER_TINY_CONTENT;
  const hero = IPFS_FRIENDS_CAFE_PAGE_HERO_CONTENT;
  const navContent = IPFS_FRIENDS_CAFE_NAVIGATION_CONTENT;

  return (
    <DefaultLayout props={{ background: 'var(--color-white200)' }}>
      <ResponsiveNavbar navContent={navContent} />

      <div style={{ paddingBottom: '5rem' }}>
        <Hero {...hero} />
      </div>
      <SectionEventPage blocks={blocks} pageStyle={null} />

      <FooterTiny {...footerContent} />
    </DefaultLayout>
  );
}
