import styles from '@components/SectionEventPage.module.scss';

import BlockBuilder from './BlockBuilder';

export default function SectionEventPage({ blocks }) {
  console.log(blocks, 'blocks');
  return (
    <div style={{ background: 'var(--color-white200)', display: 'grid', rowGap: '3rem' }}>
      <div>
        <div style={{ display: 'grid', rowGap: '3rem' }}>
          {blocks.map((blockItems, index) => {
            const { block, description, id, title } = blockItems ?? null;

            return <BlockBuilder block={block} description={description} id={id} title={title} key={index} />;
          })}
        </div>
      </div>

      {/* <h1 id="about" className={styles.mainTitle}>
        About
      </h1>

      <section className={styles.flexContainer} style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <p className={`${styles.p} ${styles.sixty}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus felis, luctus sit amet suscipit nec, vehicula hendrerit urna. Integer vel.
        </p>
        <h4 className={`${styles.h4} ${styles.fourty}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultrices dui. Aenean dapibus elit ac turpis laoreet posuere. Phasellus iaculis nibh eu quam accumsan, sit
          amet tincidunt risus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultrices dui. Aenean dapibus{' '}
        </h4>
      </section>

      <h1 id="shedule" className={styles.mainTitle}>
        Schedule
      </h1> */}
      {/* <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23f2fbff&ctz=America%2FNew_York&title=IPFS%20Thing&mode=WEEK&src=Y181MWM1NTBkNjYyYmZiODI4MTdlYjNjMTQ0YjQxNDVhMzc2YzFhOGUyNzRjY2RmYTA0YTU4MDIyMTk2NWRlZTBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
      /> */}
    </div>
  );
}

{
  /* <section className={styles.calander}>
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
      </section> */
}
