import styles from '@components/TicketCard.module.scss';

import Link from './Link';

export default function TicketCard({ ctaLink, description, price, name }) {
  return (
    <div className={styles.container}>
      <section className={styles.textContent} style={{ display: 'grid', rowGap: '1rem' }}>
        {name && <h4 className={styles.name}>{name}</h4>}
        {price && <h3 className={styles.price}>{price}</h3>}
        {description && <p className={styles.description}>{description}</p>}

        <div className={styles.callToAction}>
          {ctaLink && (
            <Link href={ctaLink} className={styles.ctaLink}>
              Order Now
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
