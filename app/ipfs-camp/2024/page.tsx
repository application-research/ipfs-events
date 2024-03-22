import '@root/global.scss';

import { FOOTER_TINY_CONTENT } from '@root/content/footer-content';
import { headers } from 'next/headers';
import { IPFS_CAMP_2024_FOOTER_CONTENT, IPFS_CAMP_2024_NAVIGATION_CONTENT, IPFS_CAMP_2024_PAGE_CONTENT } from '@root/content/ipfs-camp-content';
import { makeRequest } from '@root/common/utilities';
import { NAVIGATION_HOMEPAGE_CONTENT } from '@root/content/navigation-camp-page-content';
import CampFooter from '@root/components/CampFooter';
import DefaultLayout from '@components/DefaultLayout';
import SectionCamppage from '@root/components/SectionIPFSCampPage';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';

export async function generateMetadata({ params, searchParams }) {
  const title = 'IPFS Camp 2024';
  const description =
    'IPFS Camp provides the ideal platform to exchange ideas, collaborate, and co-create solutions for the real-world challenges that the web is currently facing.';
  const url = 'https://2024.ipfs.camp/';

  return {
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      // SUMMARY_LARGE_IMAGE: 1500x785
      images: [
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/09c9937a-10cc-444d-906b-8194ef20b77b.png',
          width: 1200,
          height: 628,
        },
      ],
    },
    twitter: {
      title,
      description,
      url,
      handle: '@filecoin',
      cardType: 'summary_large_image',
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/09c9937a-10cc-444d-906b-8194ef20b77b.png'],
    },
  };
}

export default async function Page(props) {
  const currentHeaders = headers();
  const host = currentHeaders.get('host');

  const footerContent = IPFS_CAMP_2024_FOOTER_CONTENT;
  const homepage = IPFS_CAMP_2024_PAGE_CONTENT;
  const navContent = IPFS_CAMP_2024_NAVIGATION_CONTENT;

  function fetchData() {
    return new Promise(async (resolve, reject) => {
      try {
        const airtableEndpoint = 'airtable/ipfs-camp2024';
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
      <ResponsiveNavbar navContent={navContent} />

      <SectionCamppage scheduleData={scheduleDataRecords} upcomingEvents={homepage} />
      <CampFooter {...footerContent} />
    </DefaultLayout>
  );
}
