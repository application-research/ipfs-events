import { BlockTypeEnum } from '@root/common/types';
import { Collapsable } from './Collapsable';

import Collapsables from './Collapsables';
import Hero from './Hero';
import ImageText from './ImageText';
import ImageTextWithOverflow from './ImageTextWithOverflow';
import LogoGrid from './LogoGrid';
import MediaBlock from './MediaBlock';
import MediaGrid from './MediaGrid';
import Schedule from './Schedule';
import Table from './Table';
import Text from './Text';
import TicketCard from './TicketCard';

export function Block({ block }) {
  switch (block.type) {
    case (block.type = BlockTypeEnum.COLLAPSABLE):
      return <Collapsable {...block} />;
    case (block.type = BlockTypeEnum.COLLAPSABLES):
      return <Collapsables {...block} />;
    case (block.type = BlockTypeEnum.MEDIA_GRID):
      return <MediaGrid {...block} />;
    case (block.type = BlockTypeEnum.HERO):
      return (
        <div style={{ paddingBottom: '5rem' }}>
          <Hero {...block} />
        </div>
      );
    case (block.type = BlockTypeEnum.IMAGE_TEXT):
      return <ImageText {...block} />;
    case (block.type = BlockTypeEnum.IMAGE_TEXT_WITH_OVERFLOW):
      return <ImageTextWithOverflow {...block} />;
    case (block.type = BlockTypeEnum.LOGO_GRID):
      return <LogoGrid {...block} />;
    case (block.type = BlockTypeEnum.MEDIA):
      return <MediaBlock {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE):
      return <Schedule {...block} />;
    case (block.type = BlockTypeEnum.TABLE):
      return <Table {...block} />;
    case (block.type = BlockTypeEnum.TICKET_CARD):
      return <TicketCard {...block} />;
    case (block.type = BlockTypeEnum.TEXT):
      return <Text {...block} />;
    default:
      return <></>;
  }
}
