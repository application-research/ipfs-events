import styles from '@components/BlockBuilder.module.scss';

import { Block } from './Block';
import GutterContainer from './GutterContainer';

export default function BlockBuilder({ title, id, description, block }) {
  return (
    <div id={id} style={{ display: 'grid', rowGap: '2rem' }}>
      {(title || description) && (
        <GutterContainer>
          <section className={styles.borderBottom} style={{ display: 'grid', rowGap: '1rem' }}>
            {title && <h1 className={styles.mainTitle}>{title}</h1>}
            {description && <p>{description}</p>}
          </section>
        </GutterContainer>
      )}

      {block?.map((blockItem, index) => {
        return (
          <div key={index}>
            <Block block={blockItem} key={index} />
          </div>
        );
      })}
    </div>
  );
}
