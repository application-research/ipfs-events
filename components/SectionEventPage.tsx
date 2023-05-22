import styles from '@components/SectionEventPage.module.scss';

import Hero from './Hero';

export default function SectionEventPage({ hero }) {
  return (
    <div style={{ background: 'var(--color-white200)', display: 'grid', rowGap: '3rem' }}>
      <section style={{ paddingBottom: '5rem' }}>
        <Hero {...hero} />

        <div className={styles.mediaContainer} style={{ paddingBottom: '1rem' }}>
          <img className={`${styles.sixty} ${styles.image}`} src="/media/ipfscamp-2023.png" />
          <img className={`${styles.fourty} ${styles.image}`} src="/media/ipfs-thing-2024.png" />
        </div>
        <div className={styles.mediaContainer}>
          <iframe
            style={{ borderRadius: 'var(--border-radius-small)' }}
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/_puqZ6JYbZI"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <h1 className={styles.mainTitle}>About</h1>

      <section className={styles.flexContainer} style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <p className={`${styles.p} ${styles.sixty}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus felis, luctus sit amet suscipit nec, vehicula hendrerit urna. Integer vel.
        </p>
        <h4 className={`${styles.h4} ${styles.fourty}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultrices dui. Aenean dapibus elit ac turpis laoreet posuere. Phasellus iaculis nibh eu quam accumsan, sit
          amet tincidunt risus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultrices dui. Aenean dapibus{' '}
        </h4>
      </section>

      <h1 className={styles.mainTitle}>Schedule</h1>
      <section className={styles.calander}>
        <section className={styles.calander}>
          <div className={styles.eventHeading}>
            <p>Fri</p>
            <p>April 14</p>
          </div>
          <div className={styles.eventHeading}>
            <p> Sat</p>
            <p>April 15</p>
          </div>
          <div className={styles.eventHeading}>
            <p> Sun</p>
            <p>April 16</p>
          </div>
          <div className={styles.eventHeading}>
            <p> Mon</p>
            <p>April 17</p>
          </div>
          <div className={styles.eventHeading}>
            <p> Tue</p>
            <p>April 18</p>
          </div>
          <div className={styles.eventHeading}>
            <p> Wed</p>
            <p>April 19</p>
          </div>
          <div className={styles.eventHeading}>
            <p>Thur</p>
            <p>April 20</p>
          </div>
        </section>
      </section>

      <section className={styles.calander}>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
      </section>
      <section className={styles.calander}>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
      </section>
      <section className={styles.calander} style={{ paddingBottom: '4rem' }}>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
        <div className={styles.eventStyle}>
          <div className={styles.eventBox}>
            <p>Event Name</p>
            <p>Time</p>
            <p>Location</p>
            <p># of people</p>
          </div>
        </div>
      </section>
      <h1 className={styles.mainTitle}>Sponsors</h1>
      <h1 className={styles.mainTitle}>Participating Teams</h1>

      <h1 className={styles.mainTitle}>Ticketing</h1>
    </div>
  );
}
