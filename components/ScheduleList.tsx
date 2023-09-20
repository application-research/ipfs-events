'use client';
import styles from 'components/ScheduleList.module.scss';
import { classNames, makeRequest } from '@root/common/utilities';
import { formatAirtableMetaData, getFormattedAirtableFields, sortCalendarDataByDate, sortTracksByOrder } from '@root/resolvers/airtable-import';
import { useEffect, useState } from 'react';

export default function ScheduleList({ scheduleData }) {
  const [eventData, setEventData] = useState<any[] | null>(null);

  useEffect(() => {
    if (scheduleData?.airtable?.tableName) {
      const fetchData = async () => {
        const res = await makeRequest({ endpoint: 'airtable/iceland' });
        const formattedAirtableData = formatAirtableMetaData(res.data);

        setEventData(formattedAirtableData);
      };

      fetchData();
    }
  }, [scheduleData]);

  if (!eventData) return null;

  const cleanedAirtableData = getFormattedAirtableFields(eventData);
  const formattedAirtableData = sortCalendarDataByDate(cleanedAirtableData);

  if (!formattedAirtableData) return null;

  return (
    <>
      {Object?.entries(formattedAirtableData)?.map(([date, events]) => (
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
                      {/* <p>{event.trackDetails.trackDesc}</p> */}
                      {event.trackDetails.time && <p className={styles.time}>{event.trackDetails.time}</p>}
                      {/* <p>First Name: {event.trackDetails.firstName}</p> */}
                      {event.trackDetails.capacity && <p> Room: {event.trackDetails.roomName}</p>}

                      {event.trackDetails.capacity && <p> Capacity: {event.trackDetails.capacity}</p>}
                    </div>
                  ) : null}
                  {event?.records.length > 1 && <h4 style={{ paddingTop: '1rem' }}>Scheduled Talks</h4>}

                  {/* <div className={styles.scheduleRow}>
                    <p className={styles.col20}>Time</p>
                    <p className={styles.col50}>Title</p>
                    <p className={styles.col20}>Speakers</p>
                  </div> */}
                  {event.records?.map((record, index) => {
                    return (
                      <div
                        key={index}
                        className={classNames(styles.grid2Cols, styles.borderTalksContainer)}
                        style={{ borderBottom: index === event.records.length - 1 ? 'none' : '0.5px solid var(--color-black)' }}
                      >
                        <p className={styles.col20}>{record.startTime ?? '─'}</p>
                        <p className={styles.col50} style={{ color: 'var(--color-blue)' }}>
                          {record.title}
                        </p>
                        <p className={styles.col20}>{record.firstName}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      ))}
    </>
  );
}
