'use client';

import styles from '@components/CampFooter.module.scss';

import { BreakpointEnum, useBreakpoint } from '@root/common/use-breakpoint';
import * as React from 'react';
import Link from './Link';
import GutterContainer from './GutterContainer';

export default function CampFooter({ links, socialIcons }: any) {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === BreakpointEnum.XS;

  return (
    <div className={styles.footerBody} style={{ background: 'var(--color-rainbow)' }}>
      <div className={styles.sectionFooter}>
        <GutterContainer>
          <div className={styles.siteFooter}>
            <div className={styles.logo}>
              <img src="/media/black-and-white-logo.png" alt="Logo" />
            </div>

            {!isMobile ? (
              <div className={styles.links}>
                {socialIcons &&
                  socialIcons.map((icon, index) => {
                    return (
                      <div className={styles.socialLinks} key={index}>
                        <Link href={icon.link} linkStyle="animated" target="_blank">
                          <img src={icon.image} alt={icon.text} className={styles.socialIcon} />
                        </Link>
                      </div>
                    );
                  })}

                {links &&
                  links.map((item, index) => {
                    const link = item?.href ? item?.href : '/ipfs-camp/2024';

                    return (
                      <Link href={link} linkStyle="animated" target="_blank" key={index}>
                        {item.name}
                      </Link>
                    );
                  })}
              </div>
            ) : (
              <div className={styles.backToTopButtonContainer}>
                <div className={styles.backToTopButton}>
                  <a href="#top" className={`${styles.toTop} ${styles.link}`}>
                    Back to Top
                  </a>
                </div>
              </div>
            )}
          </div>
        </GutterContainer>
      </div>
    </div>
  );
}
