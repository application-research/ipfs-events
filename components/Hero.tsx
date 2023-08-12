import styles from '@components/Hero.module.scss';

import { CallToActionVariant } from './CallToActionVariant';
import GutterContainer from './GutterContainer';
import { MarkdownToJSX } from './Markdown';

export default function Hero({ background, cta, date, description, label, location, title }: any) {
  const containerStyle = {
    backgroundImage: background && `url(${background.src})`,
  };

  return (
    <div className={`${styles.container} ${background && styles.backgroundImage}`} style={containerStyle}>
      <GutterContainer>
        <section className={`${styles.rowGap} ${background && styles.textBackground}`}>
          {label && <p className={styles.label}>{label}</p>}
          {title && <h1 className={styles.title}>{title}</h1>}
          {(date || location) && (
            <div style={{ display: 'grid', rowGap: '0.5rem' }}>
              {date && <p className={styles.date}>{date}</p>}
              {location && (
                <p className={styles.location}>
                  <i>{location}</i>
                </p>
              )}
            </div>
          )}
          {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}

          {cta && (
            <div className={styles.row} style={{ paddingTop: '1rem' }}>
              {cta.map((ctaItem, index) => {
                return <CallToActionVariant key={index} type={ctaItem.type} cta={ctaItem} />;
              })}
            </div>
          )}
        </section>
      </GutterContainer>
    </div>
  );
}
