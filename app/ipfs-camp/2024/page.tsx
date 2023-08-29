import '@root/global.scss';

import {
  IPFS_FRIENDS_CAFE_NAVIGATION_CONTENT,
  IPFS_FRIENDS_CAFE_PAGE_CONTENT,
  IPFS_FRIENDS_CAFE_PAGE_HERO_CONTENT,
  IPFS_FRIENDS_FOOTER_CONTENT,
} from '@root/content/ipfs-friends-cafe';
import DefaultLayout from '@components/DefaultLayout';
import Footer from '@root/components/Footer';
import Hero from '@root/components/Hero';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';

export default async function Page(props) {
  const blocks = IPFS_FRIENDS_CAFE_PAGE_CONTENT;
  const footerContent = IPFS_FRIENDS_FOOTER_CONTENT;
  const hero = IPFS_FRIENDS_CAFE_PAGE_HERO_CONTENT;
  const navContent = IPFS_FRIENDS_CAFE_NAVIGATION_CONTENT;

  return (
    <DefaultLayout props={{ background: 'var(--color-white200)' }}>
      <ResponsiveNavbar navContent={navContent} />

      <div style={{ paddingBottom: '5rem' }}>
        <Hero {...hero} />
      </div>
      <SectionEventPage blocks={blocks} pageStyle={null} />

      <Footer {...footerContent} />
    </DefaultLayout>
  );
}
