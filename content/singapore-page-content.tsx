import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum } from '@root/common/types';

export const FILECOIN_DEV_SUMMIT_SINGAPORE_PAGE_CONTENT = [
  {
    id: 'singapore',
    backgroundColor: 'var(--color-white)',
    direction: BlockDirectionEnum.COLUMN,
    endPoint: 'airtable/singapore',
    title: 'Singapore - Schedule',
    cta: {
      type: CallToActionVariantEnum.BUTTON,
      textColor: 'white',
      target: '_blank',
      text: 'Showcase Your Project at the EXPO',
      buttonColor: 'linear-gradient(to right,#39C1CB, #006FEC)',
      link: 'https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg',
    },
    block: [
      {
        type: BlockTypeEnum.SCHEDULE_LIST_TOGGLE_BY_TRACK_TALK_SINGAPORE,
        scheduleData: {
          airtable: {
            tableName: 'Asia Talk Track Submissions + Forms',
          },
        },
      },
      // {
      //   type: BlockTypeEnum.SCHEDULE_LIST_BY_TRACK_ICELAND,
      //   scheduleData: {
      //     airtable: {
      //       tableName: 'NA/EU Talk Track Submissions + Forms',
      //     },
      //   },
      // },
    ],
  },
];
