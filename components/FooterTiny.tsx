import styles from '@components/FooterTiny.module.scss';

import GutterContainer from './GutterContainer';
import Link from './Link';

export default function FooterTiny(footerContent) {
  const { socialIcons } = footerContent;

  return (
    <GutterContainer>
      <div className={`${styles.container} ${styles.footer}`}>
        <Link style="animated" href="https://protocol.ai/" target="_blank">
          <h4>Protocol Labs</h4>
        </Link>

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
      </div>
    </GutterContainer>
  );
}
