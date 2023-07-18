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
import { FILTHING_2023_HERO_CONTENT, FILTHING_2023_PAGE_CONTENT, FILTHING_NAVIGATION_CONTENT, FOOTER_FILTHING_CONTENT } from '@root/content/filthing';

export default async function Page(props) {
  const blocks = FILTHING_2023_PAGE_CONTENT;
  const footerContent = FOOTER_FILTHING_CONTENT;
  const hero = FILTHING_2023_HERO_CONTENT;
  const navContent = FILTHING_NAVIGATION_CONTENT;

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
