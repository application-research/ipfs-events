import styles from '@components/SectionIPFSCampPage.module.scss';
import '@root/global.scss';

import { makeRequest } from '@root/common/utilities';
import { headers } from 'next/headers';
import CampFooter from '@root/components/CampFooter';
import DefaultLayout from '@components/DefaultLayout';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';
import {
  IPFS_CAMP_2024_FOOTER_CONTENT,
  IPFS_CAMP_2024_MAIN_PAGE_CONTENT,
  IPFS_CAMP_2024_NAVIGATION_CONTENT,
  IPFS_CAMP_2024_PAGE_STYLE_CONTENT,
} from '@root/content/ipfs-camp-2024-content';

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
  const navContent = IPFS_CAMP_2024_NAVIGATION_CONTENT;
  const blocks = IPFS_CAMP_2024_MAIN_PAGE_CONTENT;
  const pageStyle = IPFS_CAMP_2024_PAGE_STYLE_CONTENT;

  const promises = blocks?.flatMap((contentItem) =>
    contentItem?.block?.map(async (blockItem) => {
      if ('scheduleData' in blockItem && blockItem.scheduleData.airtable) {
        try {
          const airtableEndpoint = blockItem.scheduleData.airtable.endPoint;
          const data = await makeRequest({ endpoint: airtableEndpoint, host });
          blockItem.scheduleData.airtable.data = data;
        } catch (error) {
          console.error('Error fetching tableData for blockItem:', blockItem, error);
        }
      }
    })
  );

  await Promise.all(promises);

  return (
    <DefaultLayout props={{ background: 'var(--color-black)' }}>
      <ResponsiveNavbar navContent={navContent} />

      <div className={styles.pageContainer} style={{ overflow: 'hidden' }}>
        <img src="/media/squares.svg" className={styles.squaresClass} />
        <SectionEventPage blocks={blocks} pageStyle={pageStyle} />
      </div>

      <CampFooter {...footerContent} />
    </DefaultLayout>
  );
}
