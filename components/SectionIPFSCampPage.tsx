import styles from '@components/SectionIPFSCampPage.module.scss';

import { Ratio } from '@root/common/types';
import { VideoPlayer } from './VideoPlayer';
import Link from './Link';
import React from 'react';

export default function SectionCamppage({ upcomingEvents }) {
  return (
    <div className={styles.pageContainer}>
      <div style={{ display: 'grid', rowGap: '8rem', marginTop: '2.5rem', background: 'var(--color-black200)' }}>
        <section>
          <img src="/media/ipfs-camp-2024.png" alt="IPFS Camp 2024" className={styles.imageClass} />
          <header className={styles.header} style={{ paddingBottom: '4rem' }}>
            <div className={styles.headerText}>
              <h3 className={styles.h3}>IPFS is more than just a ‘conference’; it’s a global movement of builders and visionaries committed to creating a better web. </h3>
              <p>Over the course of three days, we will host hundreds of talks, workshops, and hacking sessions, all focused on the latest advancements in decentralized technologies and the future of the internet. IPFS Camp provides the ideal platform to exchange ideas, collaborate, and co-create solutions for the real-world challenges that the web is currently facing.</p>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="564" height="457" viewBox="0 0 564 457" fill="none">
                <path 
                    d="M120.782 32.3641C120.782 32.3641 1.58132 63 40.1581 119.934C78.7345 176.868 422.805 132.753 447.428 218.508C459.666 261.127 410.739 275.773 364.08 289.127C316.63 302.709 273.007 352.037 295.73 390.707C340.904 467.586 466.655 329.914 531.557 424.09" 
                    stroke="url(#paint0_linear_778_2)" 
                    strokeWidth="63.9167" 
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_778_2" x1="554.599" y1="466.891" x2="47.6704" y2="4.44691" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#08ADE3"/>
                    <stop offset="0.5" stopColor="#CDAB37"/>
                    <stop offset="1" stopColor="#E01C33"/>
                    </linearGradient>
                </defs>
                </svg>
                {/* Your other components and elements */}
            </div>
          </header>
            {/* New box underneath */}
            <div className={styles.headerBox}>
                <p>Random text about the event</p>
            </div>
            <div className={styles.headerText}>
                <h3 className={styles.h3}> IPFS Thing Recap </h3>
            </div>
          <div className={styles.mediaContainer}>
            <VideoPlayer src={'/media/ipfs-thing-2023.mp4'} autoPlay muted ariaLabel="video" ratio={Ratio.TWENTY_ONE_BY_NINE} />
          </div>
        </section>

        <div className={styles.twoColumns}>
          <h1 className={styles.h1}>
            Get Involved
          </h1>
            {/* Input boxes here */}
        </div>
        <section>
          <h3 className={styles.h3} style={{ paddingBottom: '2rem' }}>
            Past Camp Events
          </h3>
          {/* Impact section */}

          <section className={styles.grid4cols} style={{ paddingBottom: '1rem' }}>
            {upcomingEvents.map((event, index) => {
              return (
                <div key={index}>
                  <Link href={event?.link ?? ''} style="text" target={event?.target ?? '_blank'}>
                    <img className={`${styles.col50} ${styles.image}`} src={event.image} />
                    <div className={styles.containerOverImage}>
                      <p className={`${styles.smallText}`} style={{ fontWeight: 'bold' }}>
                        {event.name}
                      </p>

                      <p className={`${styles.tinyText}`}>
                        {event.location} | {event.date}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </section>
          {/* FAQ */}
        </section>
      </div>
    </div>
  );
}
