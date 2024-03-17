import styles from '@components/ImageWithTextOverflow.module.scss';

import Image from './Image';
import GutterContainer from './GutterContainer';

export default function ImageWithOverflow({ alt, image, description, subtitle, heading }) {
  return (
    <div style={{ width: '100%' }} className={styles.container}>
      <GutterContainer>
        <div className={styles.textContainer} style={{ paddingBottom: '1rem' }}>
          {heading && <h1 className={styles.heading}>{heading}</h1>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {subtitle && (
          <p className={styles.subtitle} style={{ paddingBottom: '2rem' }}>
            <strong>{subtitle}</strong>
          </p>
        )}
      </GutterContainer>

      <Image className={`${styles.image} ${styles.imageAbsolute} ${styles.maxHeight}`} altText={alt ?? 'image'} src={image.src} />
    </div>
  );
}
