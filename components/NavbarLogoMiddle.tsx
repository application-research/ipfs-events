'use client';
import styles from '@components/NavbarLogoMiddle.module.scss';

import ArrowSVG from './svgs/ArrowBoldSVG';
import GutterContainer from './GutterContainer';
import Link from './Link';
import ArrowSVGStyleTwo from './svgs/ArrowBoldSVG';
import { useState } from 'react';

export default function NavbarLogoMiddle({ navContent }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const { navItems } = navContent;
  const middleIndex = Math.floor(navItems.length / 2);
  const leftSide = navItems.slice(0, middleIndex);
  const rightSide = navItems.slice(middleIndex);

  return (
    <GutterContainer>
      <div className={`${styles.container} ${styles.navbar}`}>
        <div className={styles.columns}>
          <div className={`${styles.column} ${styles.container}`} style={{ gap: '2rem' }}>
            {leftSide.map((item, index) => {
              return (
                <div key={index}>
                  {!item.dropdown && (
                    <Link linkStyle="animated" href={item.link}>
                      <p>{item.title}</p>
                    </Link>
                  )}
                  {item?.dropdown && (
                    <section className={styles.dropdownContainer}>
                      <div className={`${styles.container}`} style={{ gap: '1rem' }}>
                        <Link linkStyle="animated" href={item?.link ?? ''}>
                          <p>{item.title}</p>
                        </Link>

                        <ArrowSVG className={styles.arrow} />
                      </div>
                      <Dropdown dropdown={item?.dropdown} />
                    </section>
                  )}
                </div>
              );
            })}
          </div>
          <div className={styles.logoWrapper}>
            <img src={navContent.logo.src} className={styles.logo} alt="IPFS Logo" />
          </div>
          <div className={`${styles.column} ${styles.container}`} style={{ gap: '2rem' }}>
            {rightSide.map((item, index) => {
              return (
                <div key={index}>
                  {!item.dropdown && (
                    <Link linkStyle="animated" href={item.link} target={item?.target ?? '_self'}>
                      <p>{item.title}</p>
                    </Link>
                  )}
                  {item?.dropdown && (
                    <>
                      <p>{item.title}</p>

                        <div className={`${styles.dropdownRow}`}>
                          <Dropdown dropdown={item?.dropdown} />
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </GutterContainer>
    </nav>
  );
}

function Dropdown({ dropdown }) {
  return (
    <section className={`${styles.dropdownContent}`}>
      <GutterContainer>
        <div className={styles.dropdownRow}>
          {dropdown.map((dropdownItem, index) => {
            return (
              <div key={index}>
                {dropdownItem?.header && <h4 className={styles.header}>{dropdownItem.header}</h4>}

                <div style={{ display: 'grid', rowGap: '0.5rem', marginTop: dropdownItem?.header ? '0' : '2.5rem' }}>
                  <Link linkStyle="text" href={dropdownItem?.link ?? ''} target={dropdownItem?.target ?? '_self'}>
                    <img src={dropdownItem.image} className={styles.dropdownImage} />
                  </Link>
                  <span>
                    <Link linkStyle="animated" href={dropdownItem?.link ?? ''} target={dropdownItem?.target ?? '_self'}>
                      <p>{dropdownItem.title}</p>
                    </Link>
                  </span>
                  <Link linkStyle="text" href={dropdownItem?.link ?? ''} target={dropdownItem?.target ?? '_self'}>
                    <span style={{ display: 'grid', rowGap: '0.2rem' }}>
                      <p className={styles.date}>{dropdownItem?.date}</p>
                      <p className={styles.location}>
                        <i>{dropdownItem?.location}</i>
                      </p>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </GutterContainer>
    </section>
  );
}
