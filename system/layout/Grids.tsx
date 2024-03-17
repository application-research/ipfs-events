import styles from 'system/layout/Grids.module.scss';

export default function getScheduleGrid(columnCount) {
  switch (columnCount) {
    case 2:
      return styles.schedule2columns;
    case 3:
      return styles.schedule3columns;
    case 4:
      return styles.schedule4columns;
    case 5:
      return styles.schedule5columns;
    default:
      return styles.schedule4columns;
  }
}
