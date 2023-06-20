import styles from '@components/ImageTextCard.module.scss';
import Image from './Image';

export default function ImageTextCard({ title, description, image, id }: any) {
  return (
    <div className={styles.container} id={id}>
      <div className={styles.imageBackground} style={{ background: image.backroundColor ?? 'white' }}>
        <Image className={styles.image} {...image} />
      </div>
      <div style={{ display: 'grid', rowGap: '1rem', paddingTop: '1.5rem' }}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {description && <h4 className={styles.description}>{description}</h4>}
      </div>
    </div>
  );
}
