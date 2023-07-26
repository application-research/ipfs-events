import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';

export default function App({ props, children }: any) {
  return (
    <div className={styles.body} style={{ background: props?.background ?? 'var(--color-white200)' }}>
      {children}
    </div>
  );
}
