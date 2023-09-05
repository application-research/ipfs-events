'use client';

import styles from '@components/Footer.module.scss';

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
        <div className={styles.siteFooter} style={{ display: 'flex', justifyContent: 'space-between' }}>
          
          {/* Left Side: Logo */}
          <div style={{ flex: 1 }}>
            <div className={styles.logo}>
              <img src="/media/colored-logo.png" alt="Logo" />
            </div>
          </div>

          {/* Right Side: IPFS Camp, IPFS Thing, and Calendar */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div className={styles.heading} style={{ margin: '0 15px' }}>IPFS Camp</div>
            <div className={styles.heading} style={{ margin: '0 15px' }}>IPFS Thing</div>
            <div className={styles.heading} style={{ margin: '0 15px' }}>IPFS Cafe</div>
            <div className={styles.heading} style={{ margin: '0 15px' }}>Calendar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
