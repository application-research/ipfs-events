import '@root/global.scss';

import FooterTiny from '@root/components/FooterTiny';
import Hero from '@root/components/Hero';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';
import {
  FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT,
  FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT,
  FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT,
  FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT,
  FOOTER_FILECOIN_DEV_SUMMIT_CONTENT,
} from '@root/content/filecoin-dev-summit';
import { makeRequest } from '@root/common/utilities';

export async function generateMetadata({ params, searchParams }) {
  const title = 'FIL Dev Summit 2023: Singapore and Iceland';
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
  const blocks = FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT;
  const footerContent = FOOTER_FILECOIN_DEV_SUMMIT_CONTENT;
  const hero = FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT;
  const navContent = FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT;
  const pageStyle = FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT;

  const promises = blocks.flatMap((contentItem) =>
    contentItem.block.map(async (blockItem) => {
      if ('scheduleData' in blockItem && blockItem.scheduleData.airtable) {
        try {
          const data = await makeRequest({ endpoint: blockItem.scheduleData.airtable.endPoint, host: blockItem.scheduleData.airtable.host });
          blockItem.scheduleData.airtable.data = data;
        } catch (error) {
          console.error('Error fetching tableData for blockItem:', blockItem, error);
        }
      }
    })
  );

  await Promise.all(promises);

  return (
    <div style={{ background: pageStyle.backgroundColor, color: pageStyle.textColor }}>
      <ResponsiveNavbar navContent={navContent} />

      <div style={{ paddingBottom: '4rem' }}>
        <Hero {...hero} />
      </div>

      <SectionEventPage blocks={blocks} pageStyle={pageStyle} />

      <SectionEventPage blocks={blocks} />
      <FooterTiny {...footerContent} />
    </div>
  );
}
