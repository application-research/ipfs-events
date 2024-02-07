import '@root/global.scss';

import FooterTiny from '@root/components/FooterTiny';
import Hero from '@root/components/Hero';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';
import { FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT, FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT, FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT, FOOTER_FILECOIN_DEV_SUMMIT_CONTENT } from '@root/content/fildevsummit/filecoin-dev-singapore-iceland-2023';
import { FIL_DEV_SUMMIT_PAGE_STYLE_CONTENT } from '@root/content/fildevsummit/filecoin-dev-iceland';


export default async function Page(props) {
  const blocks = FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT;
  const footerContent = FOOTER_FILECOIN_DEV_SUMMIT_CONTENT;
  const hero = FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT;
  const navContent = FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT;
  const pageStyle = FIL_DEV_SUMMIT_PAGE_STYLE_CONTENT;

  return (
    <div style={{ background: pageStyle.backgroundColor, color: pageStyle.textColor }}>
      <ResponsiveNavbar navContent={navContent} />

      <div style={{ paddingBottom: '4rem' }}>
        <Hero {...hero} />
      </div>

      <SectionEventPage blocks={blocks} pageStyle={pageStyle} />

      <FooterTiny {...footerContent} />
    </div>
  );
}
