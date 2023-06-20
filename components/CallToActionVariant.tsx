import styles from '@components/CallToActionVariant.module.scss';

import { CallToActionVariantEnum } from '@root/common/types';
import Link from './Link';

export function CallToActionVariant({ type, cta }) {
  switch (type) {
    case CallToActionVariantEnum.BLACK:
      return <Button {...cta} buttonColor={cta?.backgroundColor ?? 'var(--color-black200)'} textColor={cta?.textColor ?? 'var(--color-white)'} />;
    case CallToActionVariantEnum.BORDER:
      return <Button {...cta} textColor={cta?.textColor ?? 'var(--color-black200)'} buttonColor={cta?.backgroundColor ?? 'none'} borderColor={cta.buttonColor} />;
    case CallToActionVariantEnum.TEXT:
      return <ButtonText {...cta} />;
    case CallToActionVariantEnum.WHITE:
      return <Button {...cta} buttonColor={'var(--color-white)'} textColor={'var(--color-black200)'} />;
    default:
      return <></>;
  }
}

export function Button({ buttonColor, borderColor, className, variant, target, textColor, text, link }: any) {
  let buttonVariant = styles.button;

  if (variant === CallToActionVariantEnum.BORDER) {
    buttonVariant = styles.borderButton;
  }

  return (
    <>
      <Link className={`${styles.blackLink} ${className}`} href={link ?? ''} target={target ? target : '_blank'}>
        <button
          style={{
            background: buttonColor ? buttonColor : 'none',
            color: textColor ? textColor : 'var(--color-white)',
            border: borderColor ?? `1px solid ${borderColor ? borderColor : ''}`,
          }}
          aria-label={text}
          className={buttonVariant}
        >
          {text}
        </button>
      </Link>
    </>
  );
}

export function ButtonText({ cta }) {
  return (
    <Link href={cta.link ?? ''} target={cta?.taget ? cta.taget : '_blank'}>
      <button aria-label={cta.text} className={`${styles.text} ${styles.colorText}`} style={{ border: 'none', background: 'none' }}>
        {cta.text}
      </button>
    </Link>
  );
}

export function ButtonWithLink({ cta }) {
  return (
    <Link className={styles.button} href={cta.link ?? ''} target={cta?.taget ? cta.taget : '_blank'}>
      <button aria-label={cta.text}>{cta.text}</button>
    </Link>
  );
}
