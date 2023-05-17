import styles from '@components/Hero.module.scss';

export default function Hero({ title }) {
  //   const { title } = hero;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
