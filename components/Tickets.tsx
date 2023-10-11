import styles from '@components/Tickets.module.scss';

import { CallToActionVariant } from './CallToActionVariant';
import Link from './Link';

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
                  {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}
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

// .callToAction::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   border: 1px solid transparent;
//   border-radius: inherit;
//   border-image: linear-gradient(to bottom right, var(--gradient-border-blue-green));
//   border-image-slice: 1;
//   z-index: -1;
//   transition: opacity 200ms ease;
//   opacity: 0;
// }

// .callToAction:hover {
//   background: linear-gradient(to bottom right, var(--gradient-border-blue-green-transparent));
//   box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
// }

// .callToAction:hover::before {
//   opacity: 1;
// }
