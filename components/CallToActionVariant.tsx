import styles from '@components/CallToActionVariant.module.scss';

import { CallToActionVariantEnum } from '@root/common/types';
import Link from './Link';

export function CallToActionVariant({ type, cta }) {
  switch (type) {
    case CallToActionVariantEnum.BLACK:
      return <Button {...cta} buttonColor={cta?.backgroundColor ?? 'var(--color-black200)'} textColor={cta?.textColor ?? 'var(--color-white)'} />;
    case CallToActionVariantEnum.BORDER:
      return (
        <Button
          {...cta}
          textColor={cta?.textColor ?? 'var(--color-black200)'}
          buttonColor={cta?.buttonColor ? cta.buttonColor : 'var(--color-black)'}
          borderColor={cta?.borderColor ? cta.borderColor : 'none'}
        />
      );
    case CallToActionVariantEnum.TEXT:
      return <ButtonText {...cta} />;
    case CallToActionVariantEnum.WHITE:
      return <Button {...cta} buttonColor={'var(--color-white)'} textColor={'var(--color-black200)'} />;
    case CallToActionVariantEnum.SPONSOR:
      return (
        <div>
          <Link href={cta.link ?? ''} target={cta?.target ? cta.target : '_blank'}>
            <div style={{ color: cta.color ?? 'var(--color-white)' }} className={styles.ctaText}>
              {cta.text}
            </div>
          </Link>
        </div>
      );
    default:
      return <></>;
  }
}

export function Button({ buttonColor, borderColor, className, variant, target, textColor, text, href, link }: any) {
  let buttonVariant = styles.button;

  if (variant === CallToActionVariantEnum.BORDER) {
    buttonVariant = styles.borderButton;
  }

  return (
    <>
      <Link className={`${styles.blackLink} ${className}`} href={(href || link) ?? ''} target={target ? target : '_blank'}>
        <button
          style={{
            background: buttonColor ? buttonColor : 'var(--color-black)',
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

export function ButtonText({ buttonColor, borderColor, className, variant, target, textColor, text, href, link }: any) {
  return (
    <Link href={href ?? link} target={target ? target : '_blank'}>
      <button aria-label={text} className={`${styles.text} ${styles.colorText}`} style={{ border: 'none', background: '', color: textColor }}>
        {text}
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
