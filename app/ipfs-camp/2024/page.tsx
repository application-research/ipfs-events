import '@root/global.scss';

import { FOOTER_TINY_CONTENT } from '@root/content/footer-content';
import { IPFS_CAMP_PAGE_CONTENT } from '@root/content/ipfs-camp-content';
import { NAVIGATION_HOMEPAGE_CONTENT } from '@root/content/navigation-camp-page-content';
import DefaultLayout from '@components/DefaultLayout';
import CampFooter from '@root/components/CampFooter';
import CampNavbarLogoMiddle from '@root/components/CampNavbarLogoMiddle';
import SectionCamppage from '@root/components/SectionIPFSCampPage';

export default async function Page(props) {
  const footerContent = FOOTER_TINY_CONTENT;
  const homepage = IPFS_CAMP_PAGE_CONTENT;
  const navContent = NAVIGATION_HOMEPAGE_CONTENT;

  return (
    <DefaultLayout props={{ background: 'var(--color-black-fade)' }}>
      <CampNavbarLogoMiddle navContent={navContent} />

      <SectionCamppage {...homepage} />

      <CampFooter {...footerContent} />
    </DefaultLayout>
  );
}
