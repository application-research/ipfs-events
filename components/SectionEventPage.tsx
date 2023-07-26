import styles from '@components/SectionEventPage.module.scss';

import BlockBuilder from './BlockBuilder';
import GutterContainer from './GutterContainer';
import { FadeInSection } from './FadeInSection';

export default function SectionEventPage({ blocks, pageStyle }) {
  return (
    <div style={{ background: pageStyle?.backgroundColor ?? 'var(--color-white200)', display: 'grid', rowGap: '3rem' }}>
      <div className={styles.grid}>
        {blocks.map((blockItems, index) => {
          const { block, border, cta, subtitle, description, direction, id, title, noGutter } = blockItems ?? {};

          return (
            <FadeInSection key={index}>
              {noGutter ? (
                <BlockBuilder block={block} cta={cta} description={description} subtitle={subtitle} id={id} title={title} direction={direction} border={border} />
              ) : (
                <GutterContainer>
                  <BlockBuilder block={block} cta={cta} description={description} subtitle={subtitle} id={id} title={title} direction={direction} border={border} />
                </GutterContainer>
              )}
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
}
