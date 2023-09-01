'use client';

import styles from '@components/Schedule.module.scss';

import { calendarDataWithAddedDates, formatAirtableMetaData, getFormattedAirtableFields, getSpeakers } from '@root/resolvers/airtable-import';
import { makeRequest } from '@root/common/utilities';
import { useEffect, useState } from 'react';
import Schedule from './Schedule';
import Speakers from './Speakers';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function ScheduleSingapore({ scheduleData }) {
  const [singaporeData, setSingaporeData] = useState<any[] | null>([]);
  const [speakers, setSpeakers] = useState<any[]>([]);

  useEffect(() => {
    if (scheduleData?.airtable?.tableName) {
      const fetchData = async () => {
        const singapore = await makeRequest({ endpoint: 'airtable/singapore' });
        const formattedAirtableData = formatAirtableMetaData(singapore.data);
        const fetchedSpeakers = getSpeakers(formattedAirtableData);
        setSingaporeData(formattedAirtableData);
        setSpeakers(fetchedSpeakers);
      };

      fetchData();
    }
  }, [scheduleData]);

  if (!singaporeData) return null;

  const submitTrack = {
    text: 'submit a track or talk for Singapore',
    url: 'https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg',
  };

  const emptyDatesToAdd = ['Mon Sep 11 2023 20:00:00 GMT+0900 (Japan Standard Time)', 'Fri Sep 15 2023 20:00:00 GMT+0900 (Japan Standard Time)'];
  const formattedAirtableData = getFormattedAirtableFields(singaporeData);
  const calendarData = calendarDataWithAddedDates(formattedAirtableData, emptyDatesToAdd);

  return (
    <>
      <div style={{ paddingBottom: '4rem', display: 'grid', rowGap: '3rem' }}>
        {calendarData && <Schedule calendarData={calendarData} />}

        {submitTrack.url && (
          <a href={submitTrack.url} className={styles.link} target="_blank">
            <section className={styles.callToAction}>
              <div className={styles.callToActionTextContainer}>
                <p className={styles.plusIcon}>+</p>
                <p className={styles.callToActionText}>{submitTrack.text}</p>
              </div>
            </section>
          </a>
        )}
      </div>

      {speakers.length > 0 && (
        <div style={{ display: 'grid', rowGap: '2rem' }}>
          <h1 style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-weight-light' }}> Speakers</h1>
          <Speakers speakers={speakers} />
        </div>
      )}
    </>
  );
}
