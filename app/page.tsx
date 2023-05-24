import '@root/global.scss';

import { FOOTER_TINY_CONTENT } from '@root/content/footer-content';
import { HOMEPAGE_CONTENT } from '@root/content/homepage-content';
import { NAVIGATION_CONTENT } from '@root/content/navigation-content';
import DefaultLayout from '@components/DefaultLayout';
import FooterTiny from '@root/components/FooterTiny';
import GutterContainer from '@root/components/GutterContainer';
import NavbarLogoMiddle from '@root/components/NavbarLogoMiddle';
import SectionHomepage from '@root/components/SectionHomepage';

export default async function Page(props) {
  const footerContent = FOOTER_TINY_CONTENT;
  const homepage = HOMEPAGE_CONTENT;
  const navContent = NAVIGATION_CONTENT;

  return (
    <DefaultLayout>
      <NavbarLogoMiddle navContent={navContent} />
      <GutterContainer>
        <SectionHomepage {...homepage} />
      </GutterContainer>

      <FooterTiny {...footerContent} />
    </DefaultLayout>
  );
}
