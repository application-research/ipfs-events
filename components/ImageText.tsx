import styles from '@components/ImageText.module.scss';
import Image from './Image';

export default function ImageText({ title, description, backroundColor, image, id }: any) {
  return (
    <div className={styles.container} id={id}>
      <div className={styles.imageBackground} style={{ background: backroundColor ?? 'none' }}>
        <Image {...image} imageSize={image.imageSize} className={`${image.imageSize ? styles.image : styles.imageWithHeight}`} />
      </div>
      <div style={{ display: 'grid', rowGap: '1rem', paddingTop: '1.5rem' }}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {description && <h4 className={styles.description}>{description}</h4>}
      </div>
    </div>
  );
}
