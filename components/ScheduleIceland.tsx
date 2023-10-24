'use client';

import styles from '@components/Schedule.module.scss';

import { calendarDataWithAddedDates, formatAirtableMetaData, getFormattedAirtableFields, getSpeakers } from '@root/resolvers/airtable-import';
import { useState, useEffect } from 'react';
import Schedule from './Schedule';
import Speakers from './Speakers';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function ScheduleIceland({ scheduleData }) {
  const [icelandData, setIcelandData] = useState<any[] | null>(null);
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (scheduleData?.airtable?.tableName) {
      const organizeData = async () => {
        const formattedAirtableData = formatAirtableMetaData(scheduleData?.airtable?.data);
        const fetchedSpeakers = getSpeakers(formattedAirtableData);
        setIcelandData(formattedAirtableData);
        setSpeakers(fetchedSpeakers);
      };

      organizeData();
    }
  }, [scheduleData]);

  const toggleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  if (!icelandData) return null;

  const submitTrack = {
    text: 'submit a track or talk for Iceland',
    url: 'https://airtable.com/appEjnh5rpWMsjocb/shr6SmQjqdgn5Pc90',
  };
  const emptyDatesToAdd = ['Fri Sep 28 2023 20:00:00 GMT+0900 (Japan Standard Time)'];
  const formattedAirtableData = getFormattedAirtableFields(icelandData);
  const calendarData = calendarDataWithAddedDates(formattedAirtableData, emptyDatesToAdd);

  return (
    <>
      <div style={{ paddingBottom: '2rem', display: 'grid', rowGap: '3rem' }}>
        <div onClick={toggleExpandCollapse} className={styles.scheduleToggle}>
          <p>View Full Schedule & Event Speakers</p>

          <button aria-label="View Full Schedule" onClick={toggleExpandCollapse} className={styles.expandCollapseButton}>
            <div className={isExpanded ? styles.arrowUp : styles.arrowDown}></div>
          </button>
        </div>
        {isExpanded && calendarData && <Schedule calendarData={calendarData} scheduleId={'singapore-schedule'} />}

        {isExpanded && submitTrack.url && (
          <a href={submitTrack.url} className={styles.link} target="_blank">
            <section className={styles.callToAction}>
              <div className={styles.callToActionTextContainer}>
                <p className={styles.plusIcon}>+</p>
                <p className={styles.callToActionText}>{submitTrack.text}</p>
              </div>
            </section>
          </a>
        )}

        {isExpanded && speakers.length > 0 && (
          <div style={{ display: 'grid', rowGap: '2rem' }}>
            <h1 style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-weight-light' }}> Speakers</h1>
            <Speakers speakers={speakers} />
          </div>
        )}
      </div>
    </>
  );
}
