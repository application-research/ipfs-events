import styles from 'system/typography/Typography.module.scss';
import styles2 from '@components/MarkdownToJSXComponents.module.scss';

import { classNames } from '@root/common/utilities';

export const MarkdownToJSXComponents = {
  a: (props) => <a {...props} className={styles2.link} target="_blank" />,
  p: (props) => <p {...props} className={styles.p} />,
  h1: (props) => <h1 {...props} className={classNames(styles.h1, styles.markdownHeadings)} />,
  h2: (props) => <h2 {...props} className={classNames(styles.h2, styles.markdownHeadings)} />,
  h3: (props) => <h3 {...props} className={classNames(styles.h3, styles.markdownHeadings)} />,
  h4: (props) => <h4 {...props} className={classNames(styles.h4, styles.markdownHeadings)} />,
  h5: (props) => <h5 {...props} className={classNames(styles.h5, styles.markdownHeadings)} />,
  h6: (props) => <h6 {...props} className={classNames(styles.h6, styles.markdownHeadings)} />,
  ol: (props) => <ol {...props} className={styles2.ol} />,
  ul: (props) => <ul {...props} className={styles2.ul} />,
  li: (props) => <li {...props} className={styles2.li} />,
  em: (props) => <em {...props} className={styles2.em} />,
  img: (props) => <img {...props} className={styles2.image} alt="PLVS" />,
  figure: (props) => <figure {...props} className={styles.figure} alt="PLVS" />,
  blockquote: (props) => (
    <div className={styles2.blockquoteSpacing}>
      <blockquote {...props} className={styles2.blockquote} />
    </div>
  ),
  figcaption: (props) => <figcaption {...props} className={styles2.figcaption} />,
  u: (props) => <u {...props} className={styles2.underline} />,
  del: (props) => <del {...props} className={styles2.strikethrough} />,
  strong: (props) => <strong {...props} className={styles2.strong} />,
};
