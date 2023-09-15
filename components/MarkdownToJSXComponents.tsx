import styles from '@components/MarkdownToJSXComponents.module.scss';
import Image from './Image';

export const MarkdownToJSXComponents = {
  a: (props) => <a {...props} className={styles.link} target="_blank" />,
  p: (props) => <p {...props} className={styles.p} />,
  span: (props) => <span {...props} className={styles.span} />,
  h1: (props) => <h1 {...props} className={styles.h1} />,
  h2: (props) => <h1 {...props} className={styles.h2} />,
  h3: (props) => <h1 {...props} className={styles.h3} />,
  h4: (props) => <h1 {...props} className={styles.h4} />,
  ol: (props) => <ol {...props} className={styles.ol} />,
  ul: (props) => <ul {...props} className={styles.ul} />,
  li: (props) => <li {...props} className={styles.li} />,
  em: (props) => <em {...props} className={styles.em} />,
  img: (props) => <Image {...props} className={styles.image} alt="Filecoin TLDR blog" style={{ borderRadius: 'var(--border-radius-small)' }} />,
  figure: (props) => <figure {...props} className={styles.figure} alt="Filecoin TLDR blog" />,
  blockquote: (props) => <blockquote {...props} className={styles.blockquote} />,
  figcaption: (props) => <figcaption {...props} className={styles.figcaption} />,
  strong: (props) => <strong {...props} className={styles.strong} />,
};
