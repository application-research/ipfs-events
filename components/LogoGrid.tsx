import styles from '@components/LogoGrid.module.scss';

import Image from './Image';
import Link from './Link';

export default function LogoGrid({ id, logos, text }) {
  return (
    <div id={id} className={styles.container} style={{ width: '100%' }}>
      {logos && (
        <div className={styles.grid}>
          {logos.map((logo, index) => {
            return (
              <div className={styles.gridItem}>
                {logo.href !== null ? (
                  <Link key={index} href={logo.href} target="_blank" className={styles.link}>
                    <Image className={styles.logo} src={logo.src} altText={logo?.altText ?? ''} />
                  </Link>
                ) : (
                  <Image className={styles.logo} src={logo.src} altText={logo?.altText ?? ''} />
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
