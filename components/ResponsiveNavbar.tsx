import styles from '@components/ResponsiveNavbar.module.scss';

import { CallToActionVariant } from './CallToActionVariant';
import { CallToActionVariantEnum } from '@root/common/types';
import GutterContainer from './GutterContainer';
import Link from './Link';

export default function ResponsiveNavbar({ navContent }) {
  let { logo, navItems } = navContent;

  return (
    <nav className={styles.navbar}>
      <GutterContainer>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo.src} className={styles.logo} />
          </div>
          <div className={styles.container}>
            <ul className={styles.list} style={{ paddingRight: '2rem' }}>
              {navItems?.map((navItem, index) => {
                console.log(navItem, 'navItem');
                return (
                  <li className={styles.listItem} key={index}>
                    <Link style="animated" href={navItem.href}>
                      {navItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {navContent?.cta?.map((ctaItem, index) => {
              return <CallToActionVariant type={CallToActionVariantEnum.BLACK} cta={ctaItem} key={index} />;
            })}
          </div>
        </div>
      </GutterContainer>
    </nav>
  );
}
