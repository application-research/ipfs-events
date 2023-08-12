import styles from '@components/CallToActionVariant.module.scss';

import { CallToActionVariantEnum } from '@root/common/types';
import Link from './Link';

export function CallToActionVariant({ type, cta }) {
  switch (type) {
    case CallToActionVariantEnum.BUTTON:
      return <Button {...cta} />;
    case CallToActionVariantEnum.BORDER:
      return (
        <Button
          {...cta}
          textColor={cta?.textColor ?? 'var(--color-black200)'}
          buttonColor={cta?.buttonColor ? cta.buttonColor : 'none'}
          borderColor={cta?.borderColor ? cta.borderColor : '1px solid var(--color-black)'}
        />
      );
    case CallToActionVariantEnum.TEXT:
      return <ButtonText {...cta} />;
    case CallToActionVariantEnum.WHITE:
      return <Button {...cta} buttonColor={'var(--color-white)'} textColor={'var(--color-black200)'} />;
    default:
      return <></>;
  }
}

export function Button({ buttonColor, borderColor, className, variant, target, textColor, text, href, link }: any) {
  let buttonVariant = styles.button;

  if (variant === CallToActionVariantEnum.BORDER) {
    buttonVariant = styles.borderButton;
  }

  console.log(buttonColor, borderColor, className, variant, target, textColor, text, href, link);
  return (
    <Link className={`${styles.blackLink} ${className}`} href={(href || link) ?? ''} target={target ? target : '_blank'}>
      <button
        style={{
          background: buttonColor ? buttonColor : 'var(--color-black)',
          color: textColor ? textColor : 'var(--color-white)',
          border: `1px solid ${borderColor}`,
        }}
        aria-label={text}
        className={buttonVariant}
      >
        {text}
      </button>
    </Link>
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
