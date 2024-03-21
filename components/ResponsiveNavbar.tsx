import styles from '@components/ResponsiveNavbar.module.scss';

import { CallToActionVariant } from './CallToActionVariant';
import { CallToActionVariantEnum, NavigationTypeEnum } from '@root/common/types';
import GutterContainer from './GutterContainer';
import Link from './Link';

export default function ResponsiveNavbar({ navContent }) {
  let { logo, navItems } = navContent;
  const showBorder = navContent.type == NavigationTypeEnum.WITH_BORDER;

  return (
    <nav
      className={styles.navbar}
      style={{ borderBottom: showBorder ? '1px solid var(--ipfs-camp-blue)' : '', background: navContent?.backgroundColor ?? 'var(--color-white200)' }}
    >
      <GutterContainer>
        <div className={styles.container} style={{ color: navContent?.textColor ? navContent?.textColor : '' }}>
          {logo?.src && (
            <Link href={'/'}>
              <div className={styles.logo}>
                <img src={logo.src} className={styles.logo} />
              </div>
            </Link>
          )}
          <div className={styles.container}>
            <ul className={styles.list} style={{ paddingRight: '2rem' }}>
              {navItems?.map((navItem, index) => {
                return (
                  <li className={styles.listItem} key={index}>
                    <Link linkStyle="animated-white" href={navItem.href}>
                      {navItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {navContent?.cta?.map((ctaItem, index) => {
              return <CallToActionVariant type={CallToActionVariantEnum.BUTTON} cta={ctaItem} key={index} />;
            })}
          </div>
        </div>
      </GutterContainer>
    </nav>
  );
}
