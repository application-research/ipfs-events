import styles from '@components/MediaGrid.module.scss';

import MediaBlock from './MediaBlock';

const getGridStyle = (media) => {
  const length = media.length;

  if (length === 2) {
    return 'repeat(2, minmax(0, 1fr))';
  } else if (length === 3) {
    return 'repeat(3, minmax(0, 1fr))';
  } else if (length === 4) {
    return 'repeat(4, minmax(0, 1fr))';
  } else {
    return 'repeat(1, minmax(0, 1fr))';
  }
};

export default function MediaGrid({ media, id }) {
  if (media.length < 1) return;
  const gridStyle = getGridStyle(media);

  return (
    <div className={styles.mediaContainer} style={{ display: 'grid', gridTemplateColumns: gridStyle, gap: '1rem' }}>
      {media?.map((mediaItem, index) => {
        const { desc, heading, subtitle, smallDesc, title } = mediaItem;

        return (
          <section>
            <figure key={index} className={styles.imageWrapper}>
              <MediaBlock {...mediaItem} className={styles.image} />
            </figure>
            <div style={{ display: 'grid', rowGap: '0.2rem' }}>
              <div className={styles.headingContainer}>
                {heading && <h4 className={styles.heading}>{mediaItem.heading}</h4>}
                {smallDesc && <p className={styles.smallDesc}>{mediaItem.smallDesc}</p>}
              </div>

              {title && <p className={styles.title}>{mediaItem.title}</p>}
              {subtitle && <p className={styles.subtitle}>{mediaItem.subtitle}</p>}
              {desc && <p className={styles.smallDesc}>{mediaItem.desc}</p>}
            </div>
          </section>
        );
      })}
    </div>
  );
}
