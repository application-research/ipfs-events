'use client';
import styles from '@components/Collapsable.module.scss';

import { useState } from 'react';
import PlusSVG from './svgs/PlusSVG';
import { MarkdownToJSX } from './Markdown';

export function Collapsable({ id, title, collapsedText }) {
  const [isExpanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!isExpanded);
  }

  return (
    <div id={id ?? ''} className={styles.container} onClick={toggleExpanded} style={{ display: 'grid', rowGap: '1rem' }}>
      <div className={styles.heading}>
        <h4>{title}</h4>
        <PlusSVG className={styles.plusIcon} props={{ width: '2rem' }} />{' '}
      </div>

      {isExpanded && (
        <section className={styles.collapsedText}>
          <MarkdownToJSX>{collapsedText}</MarkdownToJSX>
        </section>
      )}
    </div>
  );
}
