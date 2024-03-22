import '@root/global.scss';

import { FDS_3_LIST_CONTENT } from '@root/content/fil-dev-summit-content';
import { FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT } from '@root/content/filecoin-dev-summit';
import { headers } from 'next/headers';
import { makeRequest } from '@root/common/utilities';
import { NAVIGATION_HOMEPAGE_CONTENT } from '@root/content/navigation-content';
import CampNavbarLogoMiddle from '@root/components/CampNavbarLogoMiddle';
import SectionEventPage from '@root/components/SectionEventPage';

export async function generateMetadata({ params, searchParams }) {
  const title = 'IPFS Camp 2024';
  const description =
    'IPFS Camp provides the ideal platform to exchange ideas, collaborate, and co-create solutions for the real-world challenges that the web is currently facing.';
  const url = 'https://2024.ipfs.camp';

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
  const blocks = FDS_3_LIST_CONTENT;
  const pageStyle = FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT;
  const currentHeaders = headers();
  const host = currentHeaders.get('host');
  const navContent = NAVIGATION_HOMEPAGE_CONTENT;

  const promises = blocks.flatMap((innerBlocks) => {
    return innerBlocks.block.map(async (blockItem) => {
      const airtableEndpoint = blockItem.scheduleData.airtable.endPoint;
      let tableData = await makeRequest({
        endpoint: airtableEndpoint,
        host: host,
      });

      blockItem.scheduleData.airtable.data = tableData;
    });
  });

  await Promise.all(promises);

  return (
    <div style={{ background: pageStyle.backgroundColor, color: pageStyle.textColor }}>
      <CampNavbarLogoMiddle navContent={navContent} />

      <SectionEventPage blocks={blocks} pageStyle={pageStyle} />
    </div>
  );
}
