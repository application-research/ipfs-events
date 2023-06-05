import { BlockTypeEnum } from '@root/common/types';
import { Collapsable } from './Collapsable';
import GutterContainer from './GutterContainer';
import Hero from './Hero';
import MediaBlock from './MediaBlock';
import TicketCard from './TicketCard';

export function Block({ block }) {
  switch (block.type) {
    case (block.type = BlockTypeEnum.COLLAPSABLE):
      return <Collapsable {...block} />;
    case (block.type = BlockTypeEnum.HERO):
      return (
        <div style={{ paddingBottom: '5rem' }}>
          <Hero {...block} />
        </div>
      );
    case (block.type = BlockTypeEnum.MEDIA):
      return <MediaBlock {...block} />;
    case (block.type = BlockTypeEnum.TICKET_CARD):
      return <TicketCard {...block} />;
    default:
      return <></>;
  }
}
