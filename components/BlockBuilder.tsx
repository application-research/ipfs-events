import styles from '@components/BlockBuilder.module.scss';

import { Block } from './Block';
import { CallToActionVariant } from './CallToActionVariant';

export default function BlockBuilder({ block, cta, title, id, border, description, direction }) {
  return (
    <div id={id} style={{ display: 'grid', rowGap: '2rem' }}>
      {(title || description) && (
        <section style={{ display: 'grid', rowGap: '1rem', borderBottom: border ? '1px solid var(--color-text)' : '' }}>
          <div>
            {' '}
            {title && <h1 className={styles.mainTitle}>{title}</h1>}
            {description && <p>{description}</p>}
          </div>

          {cta && <CallToActionVariant cta={cta} type={cta.type} />}
        </section>
      )}

      <div className={`${direction == 'row' ? styles.directionRow : styles.directionColumn}`}>
        {block?.map((blockItem, index) => {
          return (
            <div key={index}>
              <Block block={blockItem} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
