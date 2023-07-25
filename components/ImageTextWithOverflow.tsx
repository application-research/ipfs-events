import styles from '@components/ImageTextWithOverflow.module.scss';

import Image from './Image';
import GutterContainer from './GutterContainer';

export default function ImageTextWithOverflow({ image, description, heading, cta }) {
  return (
    <div style={{ width: '100%' }} className={styles.container}>
      <GutterContainer>
        <div className={styles.textContainer}>
          <div className={styles.column}>{heading && <h1 className={styles.heading}>{heading}</h1>}</div>
        </div>{' '}
        {description && <p className={styles.description}>{description}</p>}
      </GutterContainer>

      <Image className={`${styles.image} ${styles.imageAbsolute}`} altText={image.alt} src={image.src} />
    </div>
  );
}
