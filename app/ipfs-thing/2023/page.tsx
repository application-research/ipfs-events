import '@root/global.scss';

import { EVENT_PAGE_CONTENT, EVENT_PAGE_HERO_CONTENT } from '@root/content/event-page-content';
import { FOOTER_CONTENT } from '@root/content/footer-content';
import { NAVIGATION_CONTENT } from '@root/content/navigation-content';
import DefaultLayout from '@components/DefaultLayout';
import Footer from '@root/components/Footer';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';
import Hero from '@root/components/Hero';

export async function generateMetadata({ params, searchParams }) {
  const title = 'IPFS.Thing';
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
  const blocks = EVENT_PAGE_CONTENT;
  const footerContent = FOOTER_CONTENT;
  const hero = EVENT_PAGE_HERO_CONTENT;
  const navContent = NAVIGATION_CONTENT;

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
