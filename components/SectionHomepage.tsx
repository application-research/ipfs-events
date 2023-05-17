import styles from '@components/SectionHomepage.module.scss';

import BlockBuilder from './BlockBuilder';
import GutterContainer from './GutterContainer';
import Hero from './Hero';
import MediaBlock from './MediaBlock';
import { VideoPlayer } from './VideoPlayer';

export default function SectionHomepage({ hero }) {
  console.log('hero', hero.title);

  return (
    <div style={{ background: 'var(--color-white200)', display: 'grid', rowGap: '3rem' }}>
      <section>
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

      <h1>About</h1>

      <section className={styles.flexContainer}>
        <p className={`${styles.p} ${styles.sixty}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus felis, luctus sit amet suscipit nec, vehicula hendrerit urna. Integer vel.
        </p>
        <h4 className={`${styles.h4} ${styles.fourty}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultrices dui. Aenean dapibus elit ac turpis laoreet posuere. Phasellus iaculis nibh eu quam accumsan, sit
          amet tincidunt risus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultrices dui. Aenean dapibus{' '}
        </h4>
      </section>
      <h1>Sponsors</h1>
      <h1>Participating Teams</h1>
      <h1>Schedule</h1>
      <h1>Ticketing</h1>
    </div>
  );
}
