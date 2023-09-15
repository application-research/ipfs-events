import '@root/global.scss';

import { FOOTER_TINY_CONTENT } from '@root/content/footer-content';
import { HOMEPAGE_CONTENT } from '@root/content/homepage-content';
import { NAVIGATION_HOMEPAGE_CONTENT } from '@root/content/navigation-content';
import DefaultLayout from '@components/DefaultLayout';
import FooterTiny from '@root/components/FooterTiny';
import GutterContainer from '@root/components/GutterContainer';
import NavbarLogoMiddle from '@root/components/NavbarLogoMiddle';
import SectionHomepage from '@root/components/SectionHomepage';
import Hero from '@root/components/Hero';
import SectionEventPage from '@root/components/SectionEventPage';

export async function generateMetadata({ params, searchParams }) {
  const title = 'IPFS.Events';
  const description =
    "Welcome to IPFS Events: IPFS powers the Distributed Web & we’re powering their events! IPFS is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.";
  const url = 'https://ipfsevents.io';

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
  const footerContent = FOOTER_TINY_CONTENT;
  const blocks = HOMEPAGE_CONTENT;
  const navContent = NAVIGATION_HOMEPAGE_CONTENT;

  return (
    <DefaultLayout>
      <NavbarLogoMiddle navContent={navContent} />
      {/* <div style={{ paddingBottom: '5rem' }}>
        <Hero {...hero} />
      </div> */}
      <SectionEventPage blocks={blocks} />
      <FooterTiny {...footerContent} />
    </DefaultLayout>
  );
}
