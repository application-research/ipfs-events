import styles from '@components/Speakers.module.scss';

export default function Speakers({ speakers }) {
  return (
    <div className={styles.container}>
      {speakers.map((speaker, index) => {
        return <div key={index}>{speaker}</div>;
      })}
    </div>
  );
}
