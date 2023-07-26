import styles from '@components/ImageTextWithOverflow.module.scss';

import Image from './Image';
import GutterContainer from './GutterContainer';

export default function ImageTextWithOverflow({ image, description, heading, cta }) {
  return (
    <div style={{ width: '100%' }} className={styles.container}>
      <GutterContainer>
        <div className={styles.textContainer}>
          {heading && <h1 className={styles.heading}>{heading}</h1>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </GutterContainer>

      <Image className={`${styles.image} ${styles.imageAbsolute} ${styles.maxHeight}`} altText={image.alt} src={image.src} />
    </div>
  );
}
