import styles from '@components/BlockBuilder.module.scss';
import { Block } from './Block';

export default function BlockBuilder({ blocks }) {
  return (
    <div>
      {blocks?.map((block) => {
        const { ...rest } = block;
        return (
          <div id={block?.id} className={block?.borderTop ? styles.borderTop : 'none'}>
            <div className={styles.body}>
              <Block {...rest} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
