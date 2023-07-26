import styles from '@components/FooterTiny.module.scss';

import GutterContainer from './GutterContainer';
import Link from './Link';

export default function FooterTiny(footerContent) {
  const { socialIcons, links } = footerContent;

  return (
    <GutterContainer>
      <div className={`${styles.container} ${styles.footer}`}>
        <div className={styles.row}>
          {links?.map((link, index) => {
            return (
              <Link key={index} style="animated" href={link.href} target="_blank">
                <h4 className={styles.link}>{link.name}</h4>
              </Link>
            );
          })}
        </div>
        {socialIcons && (
          <div className={styles.container}>
            {socialIcons.map((socialCard, index) => {
              const { text, image, link } = socialCard;

              return (
                <div key={index} className={styles.socialIcon}>
                  <a target="_blank" href={link} className={styles.link}>
                    <img src={image} className={styles.socialIconImage} />
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </GutterContainer>
  );
}
