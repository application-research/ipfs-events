import '@root/global.scss';

import { FOOTER_TINY_CONTENT } from '@root/content/footer-content';
import { IPFS_CAMP_PAGE_CONTENT } from '@root/content/ipfs-camp-content';
import { NAVIGATION_HOMEPAGE_CONTENT } from '@root/content/navigation-camp-page-content';
import DefaultLayout from '@components/DefaultLayout';
import CampFooter from '@root/components/CampFooter';
import CampNavbarLogoMiddle from '@root/components/CampNavbarLogoMiddle';
import SectionCamppage from '@root/components/SectionIPFSCampPage';

export async function generateMetadata({ params, searchParams }) {
  const title = 'IPFS Camp';
  const description =
    ' IPFS Camp provides the ideal platform to exchange ideas, collaborate, and co-create solutions for the real-world challenges that the web is currently facing.';
  const url = 'https://ipfsevents.io/ipfs-camp/2024';

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
  const homepage = IPFS_CAMP_PAGE_CONTENT;
  const navContent = NAVIGATION_HOMEPAGE_CONTENT;

  return (
    <DefaultLayout props={{ background: 'var(--color-black)' }}>
      <CampNavbarLogoMiddle navContent={navContent} />
      <SectionCamppage {...homepage} />
      <CampFooter {...footerContent} />
    </DefaultLayout>
  );
}
