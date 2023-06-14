import styles from '@components/Table.module.scss';

export default function Table({ content }) {
  const columns = Object.keys(content[0]);

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            {column}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {content.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="cell">
                {row[column]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
