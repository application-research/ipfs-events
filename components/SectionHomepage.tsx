import styles from '@components/SectionHomepage.module.scss';

import { Ratio } from '@root/common/types';
import { VideoPlayer } from './VideoPlayer';
import Link from './Link';
import React from 'react';

export default function SectionHomepage({ upcomingEvents }) {
  return (
    <div style={{ display: 'grid', rowGap: '8rem', marginTop: '2.5rem', background: 'var(--color-white200)' }}>
      <section>
        <header className={styles.header} style={{ paddingBottom: '4rem' }}>
          <div className={styles.headerText}>
            <h3 className={styles.h3}>IPFS powers the Distributed Web & we’re powering their events!</h3>
            <p>IPFS is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.</p>
          </div>

          <div className={` ${styles.col40} ${styles.buttonContainer}`}>
            <Link style="text" href="https://lu.ma/compute-camp">
              <button className={`${styles.button}`}>Get Tickets for IPFS Camp 2023</button>
            </Link>
          </div>
        </header>
        <div className={styles.mediaContainer}>
          <VideoPlayer src={'/media/ipfs-thing-2023.mp4'} autoPlay muted ariaLabel="video" ratio={Ratio.TWENTY_ONE_BY_NINE} />
        </div>
      </section>

      <div className={styles.twoColumns}>
        <h1 className={styles.h1}>
          IPFS Events play a crucial role in preserving the spirit and momentum of IPFS, fostering connections, facilitating learning, and encouraging contributions in our rapidly
          changing world.
        </h1>
        <p>
          These events not only drive the adoption of IPFS technology but also unlock its limitless potential, revolutionizing the global landscape of information storage, sharing,
          and access.
        </p>
      </div>
      <section>
        <h3 className={styles.h3} style={{ paddingBottom: '2rem' }}>
          Other Upcoming Events
        </h3>

        <section className={styles.grid4cols} style={{ paddingBottom: '1rem' }}>
          {upcomingEvents.map((event, index) => {
            return (
              <div key={index}>
                <Link href={event.link} style="text" target="_blank">
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
      </section>
    </div>
  );
}
