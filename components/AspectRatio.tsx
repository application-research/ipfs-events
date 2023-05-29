import styles from '@components/AspectRatio.module.scss';
import { Ratio } from '@root/common/types';

export interface AspectRatioProps {
  ratio: Ratio;
  children: any;
  props?: any;
}

function getAspectRatio(ratio: Ratio): number {
  switch (ratio) {
    case Ratio.CAROUSEL:
      return 16 / 9;
    case Ratio.ELEVEN_BY_FOUR:
      return 11 / 4;
    case Ratio.FOUR_BY_THREE:
      return 4 / 3;
    case Ratio.ONE_BY_ONE:
      return 1;
    case Ratio.ORIGINAL:
      // Set the default aspect ratio here
      return 16 / 9;
    case Ratio.SIXTEEN_BY_NINE:
      return 16 / 9;
    case Ratio.THREE_BY_FOUR:
      return 3 / 4;
    case Ratio.TWENTY_ONE_BY_NINE:
      return 21 / 9;
    default:
      return 16 / 9;
  }
}

export default function AspectRatio({ children, ratio, props }: AspectRatioProps) {
  const aspectRatio = getAspectRatio(ratio);
  const paddingBottomCalc = `${(1 / aspectRatio) * 100}%`;
  return (
    <div className={styles.outerWrapper} style={{ paddingBottom: `${paddingBottomCalc}`, ...props }}>
      <div className={styles.innerWrapper}>{children}</div>
    </div>
  );
}
