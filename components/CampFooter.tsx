'use client';

import styles from '@components/CampFooter.module.scss';

import { BreakpointEnum, useBreakpoint } from '@root/common/use-breakpoint';
import * as React from 'react';
import Link from './Link';
import GutterContainer from './GutterContainer';

export default function CampFooter({ disclaimer, filResourcesCard, contactUsCard, socialsCard, copyright }: any) {
  const { siteList } = filResourcesCard ?? [];

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
            <div className={styles.referralsContainer}>
              <Link href={"/ipfs-camp/2024"} target="_blank">
                <span className={styles.footerReferrals}>IPFS Camp</span>
              </Link>
              <Link href={"https://2023.ipfs-thing.io/"} target="_blank">
                <span className={styles.footerReferrals}>IPFS Thing</span>
              </Link>
              <Link href={"/ipfs-friends-cafe"} target="_blank">
                <span className={styles.footerReferrals}>IPFS Cafe</span>
              </Link>
              <Link href={"https://lu.ma/ipfs"} target="_blank">
                <span className={styles.footerReferrals}>Calendar</span>
              </Link>
            </div>
          </div>
        </GutterContainer>
      </div>
    </div>
  );
}
