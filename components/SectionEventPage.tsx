import styles from '@components/SectionEventPage.module.scss';

import BlockBuilder from './BlockBuilder';
import GutterContainer from './GutterContainer';

export default function SectionEventPage({ blocks }) {
  return (
    <div style={{ background: 'var(--color-white200)', display: 'grid', rowGap: '3rem' }}>
      <GutterContainer>
        <div style={{ display: 'grid', rowGap: '7rem', position: 'relative' }}>
          {blocks.map((blockItems, index) => {
            const { block, description, direction, id, title } = blockItems ?? null;

            return <BlockBuilder block={block} description={description} id={id} title={title} key={index} direction={direction} />;
          })}
        </div>
      </GutterContainer>
    </div>
  );
}
