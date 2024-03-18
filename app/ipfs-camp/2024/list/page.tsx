import '@root/global.scss';

import Link from 'next/link';
import { headers } from 'next/headers';
import { makeRequest } from '@root/common/utilities';
import FooterTiny from '@root/components/FooterTiny';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';
import { FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT, FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT, FOOTER_FILECOIN_DEV_SUMMIT_CONTENT } from '@root/content/filecoin-dev-summit';
import { FDS_3_LIST_CONTENT } from '@root/content/fil-dev-summit-content';
import { NAVIGATION_HOMEPAGE_CONTENT } from '@root/content/navigation-content';
import CampNavbarLogoMiddle from '@root/components/CampNavbarLogoMiddle';

export async function generateMetadata({ params, searchParams }) {
  const title = 'FIL Dev Summit 2024: ETH Denver';
  const description =
    'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!).';
  const url = 'https://fildev.io';

  return {
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      // SUMMARY_LARGE_IMAGE: 1500x785
      images: ['https://i.ibb.co/XXgFfk0/twitter.png'],
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
  const blocks = FDS_3_LIST_CONTENT;
  const footerContent = FOOTER_FILECOIN_DEV_SUMMIT_CONTENT;
  // const navContent = FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT;
  const pageStyle = FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT;
  const currentHeaders = headers();
  const host = currentHeaders.get('host');
  const navContent = NAVIGATION_HOMEPAGE_CONTENT;

  const promises = blocks.flatMap((innerBlocks) => {
    return innerBlocks.block.map(async (blockItem) => {
      // Fetch table data
      const airtableEndpoint = blockItem.scheduleData.airtable.endPoint;
      let tableData = await makeRequest({
        endpoint: airtableEndpoint,
        host: host,
      });

      // Set data to blockItem.scheduleData.airtable.data
      blockItem.scheduleData.airtable.data = tableData;
    });
  });

  await Promise.all(promises);

  return (
    <div style={{ background: pageStyle.backgroundColor, color: pageStyle.textColor }}>
      <CampNavbarLogoMiddle navContent={navContent} />

      <SectionEventPage blocks={blocks} pageStyle={pageStyle} />

      {/* 
      <section className={styles.campYearbookSection}>
        <div className={styles.yearbookTitle}>Camp Yearbook</div>
        <div className={styles.buttonsContainer}>
          <Link href={'https://2022.ipfs.camp/'} target="_blank">
            <button className={styles.yearButton}>Camp 2022</button>
          </Link>
          <Link href={'https://2019.ipfs.camp/'} target="_blank">
            <button className={styles.yearButton}>Camp 2019</button>
          </Link>
        </div>
      </section>
      */}
    </div>
  );
}
