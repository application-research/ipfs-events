'use client';

import styles from '@components/Footer.module.scss';

import { BreakpointEnum, useBreakpoint } from '@root/common/use-breakpoint';
import * as React from 'react';
import Link from './Link';

export default function Footer({ disclaimer, filResourcesCard, contactUsCard, socialsCard, copyright }) {
  const { siteList } = filResourcesCard;

  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === BreakpointEnum.XS;

  return (
    <div className={styles.footerBody}>
      <div className={styles.sectionFooter}>
        <div className={styles.siteFooter}>
          <div className={styles.gridEqualHeight}>
            <div className={`${styles.disclaimer} ${styles.cardBorder}`}>
              <div className={styles.logo}>
                <img src={disclaimer.logo} />
              </div>
              <div className={`${styles.subheading} ${styles.alignment}`}>{disclaimer.heading}</div>
              <p className={styles.text}>{disclaimer.text}</p>
            </div>

            <div className={`${styles.columnContainer} ${styles.columnContainerCard} ${styles.cardBorder}`}>
              <div className={styles.heading}>{filResourcesCard.heading}</div>
              <ul className={`${styles.filResources} ${styles.list}`}>
                {siteList.map((site, index) => {
                  return (
                    <li key={index}>
                      <a href={site.link} target="_blank" className={styles.link}>
                        {site.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {isMobile ? (
              <div className={`${styles.mobileContact} ${styles.cardBorder} `}>
                <div className={styles.icon}>
                  <img src={contactUsCard.icon} />
                </div>
                <div className={styles.text}>
                  <div className={styles.heading}>{contactUsCard.heading}</div>
                  <div className={styles.description} dangerouslySetInnerHTML={{ __html: contactUsCard.text }} />
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className={styles.sectionContact}>
              <div className={`${styles.contact} ${styles.cardBorder}`}>
                <div className={styles.textContact}>
                  <div className={styles.heading}>{contactUsCard.heading}</div>
                  <div className={styles.description} dangerouslySetInnerHTML={{ __html: contactUsCard.text }} />
                </div>
              </div>

              <div className={`${styles.socials} ${styles.cardBorder}`}>
                <div className={styles.panelTop}>
                  <div className={styles.icon}></div>
                  <div className={styles.textContact}>
                    <div className={styles.heading}>{socialsCard.heading}</div>
                  </div>
                </div>
                <div className={styles.socialIcons}>
                  <div className={styles.socialIconsRow}>
                    {socialsCard.socialIcons.map((socialCard, index) => {
                      const { text, image, link } = socialCard;

                      return (
                        <div key={index} className={styles.socialIcon}>
                          <a target="_blank" href={link} className={styles.link}>
                            <img src={image} className={styles.socialIconImage} />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.termsCopyright}>
            <div className={styles.col}>
              <div className={styles.sectionCopyright}>
                {copyright.map((link, index) => {
                  return (
                    <Link href={link.link} className={styles.link} key={index} target="_blank" style={'animated-white'}>
                      {link.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.backToTopSection} style={{ paddingTop: '2.5rem' }}>
          <div className={styles.backToTop}>
            <a href="#top" className={`${styles.toTop} ${styles.link}`}>
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
