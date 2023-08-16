import styles from '@components/Schedule.module.scss';

import { formatAirtableMetaData, getSpeakers } from '@root/resolvers/airtable-import';
import { headers } from 'next/headers';
import { makeRequest } from '@root/common/utilities';
import { SCHEDULE_ICELAND } from '@root/content/schedule-iceland';
import Schedule from './Schedule';
import Speakers from './Speakers';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default async function ScheduleIceland({ scheduleData }) {
  if (scheduleData?.airtable?.tableName == null) return null;

  const currentHeaders = headers();
  const host = currentHeaders.get('host');
  const iceland = await makeRequest({ host, endpoint: 'airtable/iceland' });

  //const emptyDatesToAdd = ['Mon, Sep 24', 'Fri, Sep 28'];

  const formattedAirtableData = formatAirtableMetaData(iceland.data);

  // const formattedCalendarData: any = getFormattedAirtableFields(formattedAirtableData);
  // const calendarData = calendarDataWithAddedDates(formattedCalendarData, emptyDatesToAdd);

  const speakers = getSpeakers(formattedAirtableData);

  const calendarData = SCHEDULE_ICELAND;

  const submitTrack = {
    text: 'submit a track or talk for Iceland',
    url: 'https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90',
  };

  return (
    <>
      <div style={{ display: 'grid', rowGap: '7rem' }}>
        <Schedule calendarData={calendarData} submitTrack={submitTrack} />

        {speakers.length > 0 && (
          <div style={{ display: 'grid', rowGap: '2rem' }}>
            <h1 style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-weight-light' }}> Speakers</h1>
            <Speakers speakers={speakers} />
          </div>
        )}
      </div>
    </>
  );
}
