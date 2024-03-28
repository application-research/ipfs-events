'use client';
import styles from '@components/SectionIPFSCampPage.module.scss';

import { MarkdownToJSX } from './Markdown';
import { useState } from 'react';

export default function IpfsCampFAQ({ title, faqsLeft, faqsRight }) {
  const [expandedFaqLeft, setExpandedFaqLeft] = useState(null);
  const [expandedFaqRight, setExpandedFaqRight] = useState(null);

  const toggleFaq = (side, index) => {
    if (side === 'left') {
      if (expandedFaqLeft === index) {
        setExpandedFaqLeft(null);
      } else {
        setExpandedFaqLeft(index);
      }
    } else {
      if (expandedFaqRight === index) {
        setExpandedFaqRight(null);
      } else {
        setExpandedFaqRight(index);
      }
    }
  };

  return (
    <section className={styles.faqSection} id="faq">
      {title && (
        <h1 className={styles.sectionTitle} style={{ paddingBottom: '2rem' }}>
          {title}
        </h1>
      )}
      <div className={styles.faqColumns}>
        <div className={styles.faqLeft}>
          {faqsLeft.map((faq, index) => (
            <div className={styles.faqBorderWrapper} key={index} onClick={() => toggleFaq('left', index)}>
              <div className={`${styles.faqContent} ${expandedFaqLeft === index ? styles.open : ''}`}>
                <h4>{faq.question}</h4>
                <div className={styles.plusSymbol}>{expandedFaqLeft === index ? '-' : '+'}</div>
              </div>
              {expandedFaqLeft === index && (
                <div className={styles.faqAnswer}>
                  <MarkdownToJSX>{faq.answer}</MarkdownToJSX>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.faqRight}>
          {faqsRight.map((faq, index) => (
            <div className={styles.faqBorderWrapper} key={index} onClick={() => toggleFaq('right', index)}>
              <div className={`${styles.faqContent} ${expandedFaqRight === index ? styles.open : ''}`}>
                <h4>{faq.question}</h4>
                <div className={styles.plusSymbol}>{expandedFaqRight === index ? '-' : '+'}</div>
              </div>
              {expandedFaqRight === index && (
                <div className={styles.faqAnswer}>
                  <MarkdownToJSX>{faq.answer}</MarkdownToJSX>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
