'use client';
import styles from 'components/ScheduleListByTrack.module.scss';

import { classNames, makeRequest } from '@root/common/utilities';
import { formatAirtableMetaData, getFormattedAirtableFields, sortCalendarDataByDate, sortTracksByOrder } from '@root/resolvers/airtable-import';
import { useEffect, useState } from 'react';
import Loading from './Loading';

export default function ScheduleListByTrack({ scheduleData }) {
  const [eventData, setEventData] = useState<any[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    if (scheduleData?.airtable?.tableName) {
      const fetchData = async () => {
        try {
          const res = await makeRequest({ endpoint: 'airtable/iceland' });
          const formattedAirtableData = formatAirtableMetaData(res.data);

          setEventData(formattedAirtableData);

          setLoading(false);
        } catch (e) {
          console.log(e);
          setLoading(false); // Also set it to false in case of error
        }
      };

      fetchData();
    }
  }, [scheduleData]);
  if (isLoading != false) return <Loading />;

  if (!eventData) return null;

  const cleanedAirtableData = getFormattedAirtableFields(eventData);
  const formattedAirtableData = sortCalendarDataByDate(cleanedAirtableData);

  if (!formattedAirtableData) return null;

  const allDates = Object.keys(formattedAirtableData);

  return (
    <>
      <div className={styles.tracksFilterRow}>
        <p className={styles.tracksFilterText}>Sort by Date</p>
        <select className={styles.tracksFilter} value={selectedDate || ''} onChange={(e) => setSelectedDate(e.target.value)}>
          <option value="">All Dates</option>
          {allDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      {Object?.entries(formattedAirtableData)?.map(([date, events]: any) => {
        if (selectedDate && selectedDate !== date) return null;

        return (
          <div key={date} className={styles.list}>
            {date && (
              <h2 className={styles.date} style={{ paddingTop: '1rem' }}>
                {date}
              </h2>
            )}

            {events &&
              (events as any).map((event, index) => (
                <div key={index}>
                  <div className={styles.border} style={{ padding: '1.5rem 1rem 1rem 1rem', display: 'grid', rowGap: '0.5rem' }}>
                    {event.title && <h3 className={styles.title}>{event.title}</h3>}
                    {event.trackDetails ? (
                      <div className={classNames(styles.row)}>
                        {event.trackDetails.time && <p className={styles.time}>{event.trackDetails.time}</p>}
                        {event.trackDetails.capacity && <p> Room: {event.trackDetails.roomName}</p>}
                        {event.trackDetails.capacity && <p> Capacity: {event.trackDetails.capacity}</p>}
                      </div>
                    ) : null}
                    {event?.records.length > 1 && <h4 style={{ padding: '0.5rem 0rem' }}>Scheduled Talks</h4>}

                    {event.records?.map((record, index) => {
                      return (
                        <div key={index}>
                          {index === 0 && (record?.firstName || record?.desc) && (
                            <div className={classNames(styles.grid2Cols, styles.scheduleRow)}>
                              <p className={classNames(styles.col10, styles.scheduleRowTitle)}>Time</p>
                              <p className={classNames(styles.col20, styles.scheduleRowTitle)}>Title</p>
                              <p className={classNames(styles.col10, styles.scheduleRowTitle)}>Speakers</p>
                              <p className={classNames(styles.col50, styles.scheduleRowTitle)}>Description</p>
                            </div>
                          )}
                          <div
                            className={classNames(styles.grid2Cols, styles.borderTalksContainer)}
                            style={{ borderBottom: index === event.records.length - 1 ? 'none' : '0.5px solid var(--color-black)' }}
                          >
                            <p className={styles.col10}>{record.startTime ?? '─'}</p>
                            {record?.title && (
                              <p className={styles.col20} style={{ color: 'var(--color-blue)' }}>
                                {record.title}
                              </p>
                            )}

                            {record?.firstName && (
                              <p className={styles.col10} style={{ color: 'var(--color-blue)' }}>
                                {record.firstName}
                              </p>
                            )}
                            <p className={classNames(styles.col50, styles.desc)}>{record?.desc && record.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
        );
      })}
    </>
  );
}
