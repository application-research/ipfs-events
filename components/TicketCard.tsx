import styles from '@components/TicketCard.module.scss';

import { CallToActionVariant } from './CallToActionVariant';
import Link from './Link';

export default function TicketCard({ backgroundColor, textColor, cta, description, price, name, img }) {
  return (
    <div className={styles.container} style={{ color: textColor ?? 'var(--color-white)', backgroundColor: backgroundColor ?? 'var(--color-black)' }}>
      {img && (
        <Link href={cta?.link} target="_blank">
          <img className={styles.image} src={img?.src} aria-label={img?.ariaLabel ?? 'image'} />
        </Link>
      )}

      <section className={styles.textContent} style={{ display: 'grid', rowGap: '1rem' }}>
        {name && <h4 className={styles.name}>{name}</h4>}
        {description && <p className={styles.description}>{description}</p>}

        <div className={styles.callToAction}>
          {cta && <CallToActionVariant type={cta.type} cta={cta} />}
          {price && <h3 className={styles.price}>{price}</h3>}
        </div>
      </section>
    </div>
  );
}
