import styles from '@components/SectionEventPage.module.scss';

import BlockBuilder from './BlockBuilder';
import GutterContainer from './GutterContainer';
import { FadeInSection } from './FadeInSection';

export default function SectionEventPage({ blocks }) {
  return (
    <div style={{ background: 'var(--color-white200)', display: 'grid', rowGap: '3rem' }}>
      <div style={{ display: 'grid', rowGap: '7rem', position: 'relative' }}>
        {blocks.map((blockItems, index) => {
          const { block, border, description, direction, id, title, noGutter } = blockItems ?? {};

          return (
            <FadeInSection key={index}>
              {noGutter ? (
                <BlockBuilder block={block} description={description} id={id} title={title} direction={direction} border={border} />
              ) : (
                <GutterContainer>
                  <BlockBuilder block={block} description={description} id={id} title={title} direction={direction} border={border} />
                </GutterContainer>
              )}
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
}
