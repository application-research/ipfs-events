'use client';
import styles from '@components/Collapsable.module.scss';

import { MarkdownToJSX } from './Markdown';
import { useState } from 'react';
import PlusSVG from './svgs/PlusSVG';

export function Collapsable({ id, title, backgroundColor, textColor, collapsedText }) {
  const [isExpanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!isExpanded);
  }

  return (
    <div
      id={id ?? ''}
      className={styles.container}
      onClick={toggleExpanded}
      style={{ background: backgroundColor ? backgroundColor : 'var(--color-black200)', color: textColor ? textColor : 'var(--text-white)', display: 'grid', rowGap: '1rem' }}
    >
      <div className={styles.heading}>
        <h4>{title}</h4>
        <PlusSVG className={styles.plusIcon} props={{ width: '2rem' }} />{' '}
      </div>

      {isExpanded && (
        <section className={`${styles.collapsedText} ${styles.expanded}`}>
          <MarkdownToJSX>{collapsedText}</MarkdownToJSX>
        </section>
      )}
    </div>
  );
}
