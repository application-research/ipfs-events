import styles from '@components/TicketCard.module.scss';

import { CallToActionVariant } from './CallToActionVariant';
import { CallToActionVariantEnum } from '@root/common/types';
import Link from './Link';

export default function TicketCard({ cta, description, price, name, img }) {
  return (
    <div className={styles.container}>
      {img && (
        <Link href={cta?.link} target="_blank">
          <img className={styles.image} src={img?.src} aria-label={img?.ariaLabel ?? 'image'} />
        </Link>
      )}

      <section className={styles.textContent} style={{ display: 'grid', rowGap: '1rem' }}>
        {name && <h4 className={styles.name}>{name}</h4>}
        {description && <p className={styles.description}>{description}</p>}

        <div className={styles.callToAction}>
          {cta && <CallToActionVariant type={CallToActionVariantEnum.WHITE} cta={cta} />}
          {price && <h3 className={styles.price}>{price}</h3>}
        </div>
      </section>
    </div>
  );
}
