import '@root/global.scss';

import { EVENT_PAGE_CONTENT } from '@root/content/event-page-content';
import { FOOTER_CONTENT } from '@root/content/footer-content';
import { NAVIGATION_CONTENT } from '@root/content/navigation-content';
import DefaultLayout from '@components/DefaultLayout';
import Footer from '@root/components/Footer';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';

export default async function Page(props) {
  const blocks = EVENT_PAGE_CONTENT;
  const footerContent = FOOTER_CONTENT;
  const navContent = NAVIGATION_CONTENT;

  return (
    <DefaultLayout>
      <ResponsiveNavbar navContent={navContent} />

      <SectionEventPage blocks={blocks} />

      <Footer {...footerContent} />
    </DefaultLayout>
  );
}
