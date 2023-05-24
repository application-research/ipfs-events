import styles from '@components/SectionHomepage.module.scss';

import Link from './Link';
import Image from './Image';

export default function SectionHomepage({ upcomingEvents }) {
  return (
    <div style={{ display: 'grid', rowGap: '4rem', marginTop: '2.5rem', background: 'var(--color-white200)' }}>
      <header className={styles.header}>
        <h3 className={styles.col60}>
          IPFS þing is a week-long gathering for the IPFS implementors community. Everything from talks, workshops, discussion circles, hacking time, and more — all focused on
          advancing IPFS implementations.
        </h3>
        <div className={` ${styles.col40} ${styles.buttonContainer}`}>
          <Link style="text" href="https://lu.ma/compute-camp">
            <button className={`${styles.button}`}>Get Tickets Now</button>
          </Link>
        </div>
      </header>

      <div className={styles.mediaContainer}>
        <iframe
          style={{ borderRadius: 'var(--border-radius-small)' }}
          width="100%"
          height="450"
          src="https://youtu.be/_puqZ6JYbZI?autoplay=1"
          title="IPFS Thing"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <section>
        <h3 style={{ paddingBottom: '2rem' }}>Other Upcoming Events</h3>

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
