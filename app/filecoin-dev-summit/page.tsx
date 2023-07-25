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
import {
  FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT,
  FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT,
  FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT,
  FOOTER_FILECOIN_DEV_SUMMIT_CONTENT,
} from '@root/content/filecoin-dev-summit';

export default async function Page(props) {
  const blocks = FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT;
  const footerContent = FOOTER_FILECOIN_DEV_SUMMIT_CONTENT;
  const hero = FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT;
  const navContent = FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT;

  return (
    <DefaultLayout>
      <ResponsiveNavbar navContent={navContent} />

      <div style={{ paddingBottom: '5rem' }}>
        <Hero {...hero} />
      </div>

      <SectionEventPage blocks={blocks} />

      <Footer {...footerContent} />
    </DefaultLayout>
  );
}
