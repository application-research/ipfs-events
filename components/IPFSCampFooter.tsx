import styles from '@components/IPFSCampFooter.module.scss';

import Link from './Link';

export default function IPFSCampFooter({ title, links }) {
  return (
    <section className={styles.campYearbookSection}>
      {title && <div className={styles.yearbookTitle}>{title}</div>}
      <div className={styles.buttonsContainer}>
        {links.map((item, index) => {
          return (
            <Link href={item.link} target="_blank" key={index}>
              <button className={styles.yearButton}>{item.title}</button>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
