import { BlockTypeEnum } from '@root/common/types';
import { Collapsable } from './Collapsable';
import Collapsables from './Collapsables';
import EventsRow from './EventsRow';
import Hero from './Hero';
import ImageText from './ImageText';
import LogoGrid from './LogoGrid';
import MediaBlock from './MediaBlock';
import MediaGrid from './MediaGrid';
import MediaGridScrollable from './MediaGridScrollable';
import Schedule from './Schedule';
import ScheduleListByTalks from './ScheduleListByTalks';
import ScheduleListByTrack from './ScheduleListByTrack';
import ScheduleListToggleByTimeOrTrack from './ScheduleListToggle';
import Table from './Table';
import Text from './Text';
import Tickets from './Tickets';
import ImageTextWithOverflow from './ImageTextWithOverflow';
import ScheduleIPFSCamp2024 from './ScheduleIPFSCamp2024';

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
    case (block.type = BlockTypeEnum.SCHEDULE_IPFS_CAMP_2024):
      return <ScheduleIPFSCamp2024 {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_LIST_BY_TRACK_ICELAND):
      return <ScheduleListByTrack {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_LIST_BY_TALK_ICELAND):
      return <ScheduleListByTalks {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_LIST_TOGGLE_BY_TRACK_TALK_ICELAND):
      return <ScheduleListToggleByTimeOrTrack {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_LIST_BY_TRACK_SINGAPORE):
      return <ScheduleListByTrack {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_LIST_BY_TALK_SINGAPORE):
      return <ScheduleListByTalks {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_LIST_TOGGLE_BY_TRACK_TALK_SINGAPORE):
      return <ScheduleListToggleByTimeOrTrack {...block} />;
    case (block.type = BlockTypeEnum.SCHEDULE_LIST_TOGGLE):
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
