'use client';
import styles from '@components/MediaGridScrollable.module.scss';

import { CallToActionVariant } from './CallToActionVariant';
import { useRef, useState } from 'react';
import RightArrowSVG from './svgs/RightArrowSVG';
import GutterContainer from './GutterContainer';

export default function MediaGridScrollable({ mediaRow, title }) {
  if (!mediaRow) return <></>;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(mediaRow.length > 4);

  const containerRef = useRef<HTMLDivElement>(null);

  function scrollToRight() {
    const tableElement = containerRef.current;

    if (tableElement) {
      tableElement.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  }

  function scrollToLeft() {
    const tableElement = containerRef.current;

    if (tableElement) {
      tableElement.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  }

  function handleScroll() {
    const tableElement = containerRef.current;

    if (tableElement) {
      const { scrollLeft, scrollWidth, clientWidth } = tableElement;

      // Check if scrolled all the way to the left
      setShowArrowLeft(scrollLeft > 0);

      // Check if there's more content to the right to scroll
      setShowArrowRight(scrollLeft < scrollWidth - clientWidth);
    }
  }
  return (
    <div>
      {title && (
        <GutterContainer>
          <h1 className={styles.mainTitle} style={{ paddingBottom: '2.2rem' }}>
            {title}
          </h1>
        </GutterContainer>
      )}
      <div
        style={{
          display: 'grid',
          rowGap: '1rem',
        }}
      >
        <div
          ref={containerRef}
          onScroll={handleScroll}
          id={mediaRow?.id}
          className={`${styles.grid4Cols} ${styles.scrollableContainer} ${mediaRow[0] ? styles.paddingScrollLeft : ''} ${
            mediaRow[mediaRow.length - 1] ? styles.paddingScrollRight : '0'
          }`}
          style={{
            flexGrow: 1,
            flexShrink: 1,
          }}
        >
          {mediaRow.map((scrollableItem, index) => {
            const { description, label, border, media, icon, heading, subtitle } = scrollableItem ?? null;

            return (
              <div
                key={index}
                className={styles.scrollableItem}
                style={{
                  border: border ? '1px solid var(--color-black)' : '',
                  borderRadius: border ? 'var(--border-radius-tiny)' : '',
                  padding: border ? '1.2rem' : '',
                }}
              >
                {scrollableItem?.url ? (
                  <a href={scrollableItem.url} className={styles.cardLink}>
                    {icon && <img className={styles.icon} src={icon.src} alt={icon?.alt ?? 'icon'} />}

                    {/* to do: <MediaBlock media={media} key={index} /> */}
                    {heading && <h3 className={styles.heading}>{heading}</h3>}
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    {description && <p className={styles.description}>{description}</p>}

                    {scrollableItem.label && (
                      <div className={`${styles.button} ${styles.buttonContainer}`} style={{ paddingTop: '1.5rem' }}>
                        <CallToActionVariant cta={label} type={label?.type ? label.type : 'link'} />
                      </div>
                    )}
                  </a>
                ) : (
                  <>
                    {/*  to do: <MediaBlock media={media} key={index} /> */}
                    {icon && <img className={styles.icon} src={icon.src} alt={icon?.alt ?? 'icon'} />}

                    {heading && <h3 className={styles.heading}>{heading}</h3>}
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    {description && <p className={styles.description}>{description}</p>}

                    {scrollableItem.label && (
                      <div className={`${styles.button} ${styles.buttonContainer}`} style={{ paddingTop: '1.5rem' }}>
                        <CallToActionVariant cta={label} type={label?.type ? label.type : 'link'} />
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexDirection: 'row',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <span className={`${styles.buttonContainer} ${styles.gutterLeft}`}>
            <button
              aria-label="Left Arrow to Scroll Table"
              className={`
              ${styles.arrowButton} 
              ${styles.arrowLeft} 
              ${styles.visible}`}
              style={{
                background: showArrowLeft ? 'var(--color-black)' : 'var(--gray100)',
                color: showArrowLeft ? 'var(--color-white)' : 'var(--gray400)',
                cursor: showArrowLeft ? 'pointer' : '',
              }}
              onClick={scrollToRight}
            >
              <RightArrowSVG color={showArrowLeft ? 'var(--color-white)' : 'var(--gray500)'} style={{ height: '0.5rem', transform: 'scaleX(-1)' }} />
            </button>
          </span>
          <div className={styles.dots}>
            {mediaRow.length > 4 && (
              <div className={styles.dots}>
                {mediaRow.slice(0, 3).map((_, index) => (
                  <span key={index} className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`} onClick={() => setCurrentIndex(index)} />
                ))}
              </div>
            )}
          </div>
          <span className={`${styles.buttonContainer} ${styles.gutterRight}`}>
            <button
              aria-label="Right Arrow to Scroll Table"
              className={`${styles.arrowButton} ${styles.arrowRight} ${styles.visible}`}
              style={{
                background: showArrowRight ? 'var(--color-black)' : 'var(--gray100)',
                color: showArrowRight ? 'var(--color-white)' : 'var(--gray400)',
                cursor: showArrowRight ? 'pointer' : '',
              }}
              onClick={scrollToLeft}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === '') {
                  scrollToLeft();
                }
              }}
            >
              <RightArrowSVG color={showArrowRight ? 'var(--color-white)' : 'var(--gray500)'} style={{ height: '0.5rem' }} />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
