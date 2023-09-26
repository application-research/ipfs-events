import styles from '@components/Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.container}>
      <p className={styles.loadingText}>Loading</p>
    </div>
  );
}
