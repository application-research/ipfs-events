import styles from '@components/SectionHomepage.module.scss';

import Link from './Link';

export default function SectionHomepage() {
  return (
    <div style={{ display: 'grid', rowGap: '4rem', marginTop: '2.5rem', background: 'var(--color-white200)' }}>
      <header className={styles.header}>
        <h3 className={styles.col60}>
          IPFS þing is a week-long gathering for the IPFS implementors community. Everything from talks, workshops, discussion circles, hacking time, and more — all focused on
          advancing IPFS implementations.
        </h3>
        <div className={` ${styles.col40} ${styles.buttonContainer}`}>
          <Link style="text" href="">
            <button className={`${styles.button}`}>Get Tickets Now</button>
          </Link>
        </div>
      </header>

      <div className={styles.mediaContainer}>
        <iframe
          style={{ borderRadius: 'var(--border-radius-small)' }}
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/6dojCBJQmqg?autoplay=1"
          title="IPFS Thing"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <section>
        <h3 style={{ paddingBottom: '2rem' }}>Other Upcoming Events</h3>

        <section className={styles.mediaContainer} style={{ paddingBottom: '1rem' }}>
          <div>
            <img
              className={`${styles.col50} ${styles.image}`}
              src="https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/4:3/w_3556,h_2667,c_limit/Eiffel-Tower_GettyImages-1060266626.jpg"
            />

            <div className={styles.containerOverImage}>
              <p className={`${styles.tinyText}`}>IPFS Camp 2023</p>

              <p className={`${styles.tinyText}`}>Paris, France | October 10, 2024</p>
            </div>
          </div>
          <div>
            <img
              className={`${styles.col50} ${styles.image}`}
              src="https://media-assets.vanityfair.it/photos/644c24f7cd60f0ca3be60db8/4:3/w_5332,h_3999,c_limit/AdobeStock_251121174.jpeg"
            />

            <div className={styles.containerOverImage}>
              <p className={`${styles.tinyText}`}>IPFS Camp 2023</p>

              <p className={`${styles.tinyText}`}>Tokyo, Japan | October 10, 2024</p>
            </div>
          </div>
          <div>
            <img className={`${styles.col50} ${styles.image}`} src="https://static.theprint.in/wp-content/uploads/2020/07/city-3323160_1280-e1594792391409.jpg" />

            <div className={styles.containerOverImage}>
              <p className={`${styles.tinyText}`}>IPFS Camp 2023</p>

              <p className={`${styles.tinyText}`}>Hong Kong | October 10, 2024</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
