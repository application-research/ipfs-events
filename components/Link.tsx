import styles from '@components/Link.module.scss';

import NextLink from 'next/link';
import { ReactNode } from 'react';

function SwitchLinkStyle(style) {
  let defaultStyle;

  switch (style) {
    case 'animated':
      return (defaultStyle = `${styles.animated}  ${styles.black}`);
    case 'animated-white':
      return (defaultStyle = `${styles.animated} ${styles.white}`);
    case 'text':
    default:
      return (defaultStyle = `${styles.black}`);
  }
}

export interface LinkProps {
  children: ReactNode;
  className?: string;
  color?: string;
  href: string;
  props?: any;
  linkStyle?: string;
  target?: string;
}

export default function Link({ children, className, color, href, props, linkStyle, target }: LinkProps) {
  const defaultStyle = SwitchLinkStyle(linkStyle);

  return (
    <a href={href} className={`${defaultStyle} ${className}`} {...props} target={target ?? '_self'}>
      <span>{children}</span>
    </a>
  );
}
