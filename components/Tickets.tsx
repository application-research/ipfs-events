import styles from '@components/Tickets.module.scss';

import { CallToActionVariant } from './CallToActionVariant';
import Link from './Link';
import { MarkdownToJSX } from './Markdown';

export default function Tickets({ backgroundColor, textColor, tickets }) {
  return (
    <div className={styles.container} style={{ color: textColor ?? 'var(--color-white)', backgroundColor: backgroundColor ?? 'var(--color-black)' }}>
      <div className={styles.row}>
        {tickets?.map((ticket, index) => {
          const { cta, description, price, name, img } = ticket ?? null;

          return (
            <div key={index} className={styles.column}>
              <div className={styles.itemContent}>
                {img && (
                  <Link href={cta?.link} target="_blank">
                    <img className={styles.image} src={img?.src} aria-label={img?.ariaLabel ?? 'image'} />
                  </Link>
                )}

                <section className={styles.textContent}>
                  {name && <h4 className={styles.name}>{name}</h4>}
                  {description && (
                    <p className={styles.description}>
                      <MarkdownToJSX>{description}</MarkdownToJSX>
                    </p>
                  )}
                </section>
              </div>

              <div className={styles.callToAction}>
                {cta && <CallToActionVariant type={cta.type} cta={cta} />}
                {price && <h3 className={styles.price}>{price}</h3>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
