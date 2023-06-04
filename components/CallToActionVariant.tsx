import styles from '@components/CallToActionVariant.module.scss';
import Link from './Link';
import { CallToActionVariantEnum } from '@root/common/types';

export function CallToActionVariant({ type, cta }) {
  switch (type) {
    case CallToActionVariantEnum.BLACK:
      return (
        <Link className={styles.blackLink} href={cta.link ?? ''} target={cta?.taget ? cta.taget : '_blank'}>
          <button aria-label={cta.text} className={styles.black}>
            {cta.text}
          </button>
        </Link>
      );

    case CallToActionVariantEnum.TEXT:
      return <ButtonText cta={cta} />;
    case CallToActionVariantEnum.WHITE:
      return <Button cta={cta} buttonColor={'var(--color-white)'} />;
    default:
      return <></>;
  }
}

export function Button(cta, buttonColor) {
  return (
    <Link className={styles.blackLink} href={cta.link ?? ''} target={cta?.taget ? cta.taget : '_blank'}>
      <button aria-label={cta.text} className={styles.button}>
        {cta.text}
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
