import '@root/global.scss';

import { FOOTER_CONTENT } from '@root/content/footer-content';
import { HOMEPAGE_HERO_CONTENT } from '@root/content/homepage-content';
import { NAVIGATION_CONTENT } from '@root/content/navigation-content';
import DefaultLayout from '@components/DefaultLayout';
import Footer from '@root/components/Footer';
import GutterContainer from '@root/components/GutterContainer';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';

export default async function Page(props) {
  const hero = HOMEPAGE_HERO_CONTENT;
  const navContent = NAVIGATION_CONTENT;
  const footerContent = FOOTER_CONTENT;

  return (
    <DefaultLayout>
      <ResponsiveNavbar navContent={navContent} />
      <GutterContainer>
        <SectionEventPage hero={hero} />
      </GutterContainer>

      <Footer {...footerContent} />
    </DefaultLayout>
  );
}
