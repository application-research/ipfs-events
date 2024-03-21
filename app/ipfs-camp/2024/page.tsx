import '@root/global.scss';

import { FOOTER_TINY_CONTENT } from '@root/content/footer-content';
import { headers } from 'next/headers';
import { IPFS_CAMP_PAGE_CONTENT } from '@root/content/ipfs-camp-content';
import { makeRequest } from '@root/common/utilities';
import { NAVIGATION_HOMEPAGE_CONTENT } from '@root/content/navigation-camp-page-content';
import CampFooter from '@root/components/CampFooter';
import CampNavbarLogoMiddle from '@root/components/CampNavbarLogoMiddle';
import DefaultLayout from '@components/DefaultLayout';
import SectionCamppage from '@root/components/SectionIPFSCampPage';

export async function generateMetadata({ params, searchParams }) {
  const title = 'IPFS Camp 2024';
  const description =
    'IPFS Camp provides the ideal platform to exchange ideas, collaborate, and co-create solutions for the real-world challenges that the web is currently facing.';
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
  const currentHeaders = headers();
  const host = currentHeaders.get('host');

  const footerContent = FOOTER_TINY_CONTENT;
  const homepage = IPFS_CAMP_PAGE_CONTENT;
  const navContent = NAVIGATION_HOMEPAGE_CONTENT;
  const airtableAPI = 'airtable/ipfs-camp2024';
  function fetchData() {
    return new Promise(async (resolve, reject) => {
      try {
        const airtableEndpoint = airtableAPI;
        const data = await makeRequest({ endpoint: airtableEndpoint, host });
        resolve(data);
      } catch (error) {
        console.error('Error fetching tableData for block', error);
        reject(error);
      }
    });
  }
  const scheduleData = await Promise.all([fetchData()]);
  const scheduleDataRecords = scheduleData[0];

  return (
    <DefaultLayout props={{ background: 'var(--color-black)' }}>
      <CampNavbarLogoMiddle navContent={navContent} />
      <SectionCamppage {...homepage} scheduleData={scheduleDataRecords} />
      <CampFooter {...footerContent} />
    </DefaultLayout>
  );
}
