import { BlockTypeEnum } from '@root/common/types';
import MediaBlock from './MediaBlock';

export function Block({ card }) {
  switch (card.type) {
    case (card.type = BlockTypeEnum.MEDIA):
      return <MediaBlock {...card} />;
    case (card.type = BlockTypeEnum.BANNER):
      return <>banner</>;
    default:
      return <></>;
  }
}
