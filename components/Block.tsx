import { BlockTypeEnum } from '@root/common/types';
import { Collapsable } from './Collapsable';
<<<<<<< HEAD
import EventsRow from './EventsRow';
=======

import Collapsables from './Collapsables';
>>>>>>> 769859b (updated columns for block direction)
import Hero from './Hero';
import ImageText from './ImageText';
import ImageTextWithOverflow from './ImageTextWithOverflow';
import LogoGrid from './LogoGrid';
import MediaBlock from './MediaBlock';
import MediaGrid from './MediaGrid';
import MediaGridScrollable from './MediaGridScrollable';
import Schedule from './Schedule';
import Table from './Table';
import Text from './Text';
import Tickets from './Tickets';
import ScheduleIceland from './ScheduleIceland';
import ScheduleSingapore from './ScheduleSingapore';
import ScheduleListByTrack from './ScheduleListByTrack';
import ScheduleListByTalks from './ScheduleListByTalks';
import ScheduleListToggleByTimeOrTrack from './ScheduleListToggle';

export function Block({ block }) {
  switch (block.type) {
    case (block.type = BlockTypeEnum.COLLAPSABLE):
      return <Collapsable {...block} />;
    case (block.type = BlockTypeEnum.COLLAPSABLES):
      return <Collapsables {...block} />;
    case (block.type = BlockTypeEnum.MEDIA_GRID):
      return <MediaGrid {...block} />;
    case (block.type = BlockTypeEnum.MEDIA_GRID_SCROLLABLE):
      return <MediaGridScrollable {...block} />;
    case (block.type = BlockTypeEnum.HERO):
      return <Hero {...block} />;
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
    case (block.type = BlockTypeEnum.SCHEDULE_ICELAND):
      return <ScheduleIceland {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_SINGAPORE):
      return <ScheduleSingapore {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_LIST_BY_TRACK_ICELAND):
      return <ScheduleListByTrack {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_LIST_BY_TALK_ICELAND):
      return <ScheduleListByTalks {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_LIST_TOGGLE_BY_TRACK_TALK_ICELAND):
      return <ScheduleListToggleByTimeOrTrack {...block} />;
    case (block.type = BlockTypeEnum.TABLE):
      return <Table {...block} />;
    case (block.type = BlockTypeEnum.TICKET_CARD):
      return <Tickets {...block} />;
    case (block.type = BlockTypeEnum.TEXT):
      return <Text {...block} />;
    case (block.type = BlockTypeEnum.UPCOMING_EVENTS):
      return <EventsRow {...block} />;
    default:
      return <></>;
  }
}
