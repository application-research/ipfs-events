import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';

export default function App(props, style) {
  return (
    <div className={styles.body} {...style}>
      {props.children}
    </div>
  );
}
