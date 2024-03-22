import styles from '@components/BlockBuilder.module.scss';

import { Block } from './Block';
import { CallToActionVariant } from './CallToActionVariant';
import { BlockDirectionEnum } from '@root/common/types';

function BlockBuilderDirectionStyle(direction) {
  switch (direction) {
    case BlockDirectionEnum.ROW:
      return styles.directionRow;
    case BlockDirectionEnum.COLUMN:
      return styles.directionCol;
    case BlockDirectionEnum.TWO_COLUMN:
      return styles.directionCol2;
    case BlockDirectionEnum.THREE_COLUMN:
      return styles.directionCol3;
    case BlockDirectionEnum.FOUR_COLUMN:
      return styles.directionCol4;
    default:
      return styles.directionCol;
  }
}

export default function BlockBuilder({ block, cta, cta2, title, subtitle, id, border, color, description, direction }: any) {
  return (
    <div id={id} style={{ display: 'grid', rowGap: '2rem', background: block?.backgroundColor ?? '' }}>
      {(title || description || subtitle) && (
        <section className={styles.row} style={{ borderBottom: border ? '1px solid var(--color-text)' : '' }}>
          <div style={{ display: 'grid', rowGap: '1rem' }}>
            {title && <h1 className={styles.mainTitle}>{title}</h1>}
            {subtitle && (
              <h4 style={{ color: color ?? 'var(--color-white)' }} className={styles.subtitle}>
                {subtitle}
              </h4>
            )}
            {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
          </div>
          {/* 
            <div>
              {cta && <CallToActionVariant cta={cta} type={cta.type} />}
              {cta2 && <CallToActionVariant cta={cta2} type={cta.type} />}
            </div>
          */}
        </section>
      )}

      <div className={`${BlockBuilderDirectionStyle(direction)}`}>
        {block?.map((blockItem, index) => {
          return (
            <div key={index}>
              <Block block={blockItem} key={index} />
            </div>
          );
        })}
      </div>
      <div>
        {cta && <CallToActionVariant cta={cta} type={cta.type} />}
      </div>
    </div>
  );
}
