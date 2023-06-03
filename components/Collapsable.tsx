'use client';
import styles from '@components/Collapsable.module.scss';

import { useState } from 'react';
import PlusSVG from './svgs/PlusSVG';
import { MarkdownToJSX } from './Markdown';

export function Collapsable({ id, title, collapsedText }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div id={id ?? ''} onClick={toggleExpanded} className={styles.container} style={{ display: 'grid', rowGap: '1rem' }}>
      <div className={styles.heading}>
        <h4>{title}</h4>
        <PlusSVG className={styles.plusIcon} props={{ width: '2rem' }} onClick={toggleExpanded} />
      </div>

      {expanded && (
        <section className={styles.collapsedText}>
          <MarkdownToJSX>{collapsedText}</MarkdownToJSX>
        </section>
      )}
    </div>
  );
}
