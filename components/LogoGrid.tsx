import styles from '@components/LogoGrid.module.scss';

import Image from './Image';

export default function LogoGrid({ id, logos, text }) {
  return (
    <div id={id} className={styles.container} style={{ width: '100%' }}>
      {logos && (
        <div className={styles.col6}>
          {logos.map((logo, index) => {
            return (
              <div key={index} className={styles.col}>
                <Image className={styles.logo} src={logo.src} altText={logo?.altText ?? ''} />
              </div>
            );
          })}
        </div>
      )}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
