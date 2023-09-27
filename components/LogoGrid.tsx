import styles from '@components/LogoGrid.module.scss';

import Image from './Image';
import Link from './Link';
import { classNames } from '@root/common/utilities';

export default function LogoGrid({ id, logosLarge, logosMedium, logosSmall, text }) {
  return (
    <div id={id} className={styles.container} style={{ width: '100%' }}>
      {logosLarge && (
        <div className={styles.gridLarge}>
          {logosLarge.map((logo, index) => {
            return (
              <div className={styles.gridItem}>
                {logo.href !== null ? (
                  <Link key={index} href={logo.href} target="_blank" className={styles.link}>
                    <Image className={classNames(styles.logo, styles.logoLarge)} src={logo.src} altText={logo?.altText ?? ''} />
                  </Link>
                ) : (
                  <Image className={classNames(styles.logo, styles.logoLarge)} src={logo.src} altText={logo?.altText ?? ''} />
                )}
              </div>
            );
          })}
        </div>
      )}

      {logosMedium && (
        <div className={`${styles.gridMedium}`}>
          {logosMedium.map((logo, index) => {
            return (
              <div className={styles.gridItem}>
                {logo.href !== null ? (
                  <Link key={index} href={logo.href} target="_blank" className={styles.link}>
                    <Image className={classNames(styles.logo, styles.logoMedium)} src={logo.src} altText={logo?.altText ?? ''} />
                  </Link>
                ) : (
                  <Image className={classNames(styles.logo, styles.logoMedium)} src={logo.src} altText={logo?.altText ?? ''} />
                )}
              </div>
            );
          })}
        </div>
      )}

      {logosSmall && (
        <div className={`${styles.gridSmall}`}>
          {logosSmall.map((logo, index) => {
            return (
              <div className={styles.gridItem}>
                {logo.href !== null ? (
                  <Link key={index} href={logo.href} target="_blank" className={styles.link}>
                    <Image className={classNames(styles.logo, styles.logoSmall)} src={logo.src} altText={logo?.altText ?? ''} />
                  </Link>
                ) : (
                  <Image className={classNames(styles.logo, styles.logoSmall)} src={logo.src} altText={logo?.altText ?? ''} />
                )}
              </div>
            );
          })}
        </div>
      )}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
