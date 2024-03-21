'use client';

import styles from '@components/Schedule.module.scss';

import { addDatesIfLessThan3EventDays, formatAirtableMetaData, getFormattedAirtableFields, getSpeakers } from '@root/resolvers/airtable-import';
import { useState, useEffect } from 'react';
import Schedule from './Schedule';
import Speakers from './Speakers';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function ScheduleIPFSCamp2024({ scheduleData }) {
  const [formatedSchedule, setFormatedSchedule] = useState<any[] | null>(null);
  const [speakers, setSpeakers] = useState<any[]>([]);

  useEffect(() => {
    if (scheduleData) {
      const organizeData = async () => {
        const formattedAirtableData = formatAirtableMetaData(scheduleData);

        const fetchedSpeakers = getSpeakers(formattedAirtableData);

        setFormatedSchedule(formattedAirtableData);
        setSpeakers(fetchedSpeakers);
      };

      organizeData();
    }
  }, [scheduleData]);

  if (!formatedSchedule) return null;

  const submitTalk = {
    text: 'Submit a Track/Talk for IPFS Camp 2024',
    url: 'https://airtable.com/appM094R1Ma5HG757/shrWn6XaRgUkYWPm3',
  };

  const formattedAirtableData = getFormattedAirtableFields(formatedSchedule);
  const calendarData = addDatesIfLessThan3EventDays(formattedAirtableData);

  const scheduleStyle = {
    backgroundColor: 'var(--ipfs-camp-blue)',
    textColor: 'var(--color-white)',
    labelColor: 'var(--color-blue)',
  };

  return (
    <div style={{ paddingBottom: '2rem', display: 'grid', rowGap: '3rem' }}>
      <Schedule calendarData={calendarData} scheduleId={'schedule-ipfs-camp2024'} scheduleStyle={scheduleStyle} />

      <a href={submitTalk.url} className={styles.link} target="_blank">
        <section className={styles.callToAction}>
          <div className={styles.callToActionTextContainer}>
            <p className={styles.plusIcon} style={{ color: scheduleStyle.textColor }}>
              +
            </p>
            <p className={styles.callToActionText} style={{ color: scheduleStyle.textColor }}>
              {submitTalk.text}
            </p>
          </div>
        </section>
      </a>

      <div id="speakers" style={{ display: 'grid', rowGap: '2rem' }}>
        <h1 style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-weight-light' }}> Speakers</h1>
        <Speakers speakers={speakers} scheduleStyle={scheduleStyle} />
      </div>
    </div>
  );
}
