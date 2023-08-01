import styles from '@components/ScrollTableTooltip.module.scss';

import RightArrowSVG from './svgs/RightArrowSVG';

export default function ScrollTableTooltip({ backgroundColor, showArrowLeft, showArrowRight, tableRef }) {
  function scrollTableToRight() {
    const tableElement = tableRef.current;

    if (tableElement) {
      tableElement.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  }

  function scrollTableToLeft() {
    const tableElement = tableRef.current;

    if (tableElement) {
      tableElement.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  }
  return (
    <>
      <button
        aria-label="Left Arrow to Scroll Table"
        className={`
              ${styles.arrowButton} 
              ${styles.arrowLeft} 
               ${styles.visible}`}
        style={{
          background: showArrowLeft ? 'var(--gray300)' : 'var(--gray100)',
          color: showArrowLeft ? 'var(--gray800)' : 'var(--gray400)',
          cursor: showArrowLeft ? 'pointer' : '',
        }}
        onClick={scrollTableToRight}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === '') {
            scrollTableToRight();
          }
        }}
      >
        <RightArrowSVG color={showArrowLeft ? 'var(--textBlack)' : 'var(--gray500)'} style={{ height: '0.5rem', transform: 'scaleX(-1)' }} />
      </button>
      Scroll to see the full table{' '}
      <button
        aria-label="Right Arrow to Scroll Table"
        className={`${styles.arrowButton} ${styles.arrowRight} ${styles.visible}`}
        style={{
          background: showArrowRight ? 'var(--gray300)' : 'var(--gray100)',
          color: showArrowRight ? 'var(--gray800)' : 'var(--gray400)',
          cursor: showArrowRight ? 'pointer' : '',
        }}
        onClick={scrollTableToLeft}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === '') {
            scrollTableToLeft();
          }
        }}
      >
        <RightArrowSVG color={showArrowRight ? 'var(--textBlack)' : 'var(--gray500)'} style={{ height: '0.5rem' }} />
      </button>
    </>
  );
}
