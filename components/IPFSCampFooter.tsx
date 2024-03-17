import styles from '@components/IPFSCampFooter.module.scss';

import Link from './Link';

export default function IPFSCampFooter() {
  return (
    <section className={styles.campYearbookSection}>
      <div className={styles.yearbookTitle}>Camp Yearbook</div>
      <div className={styles.buttonsContainer}>
        <Link href={'https://2022.ipfs.camp/'} target="_blank">
          <button className={styles.yearButton}>Camp 2022</button>
        </Link>
        <Link href={'https://2019.ipfs.camp/'} target="_blank">
          <button className={styles.yearButton}>Camp 2019</button>
        </Link>
      </div>
    </section>
  );
}
