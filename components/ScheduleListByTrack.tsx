'use client';
import styles from 'components/ScheduleListByTrack.module.scss';

import { classNames } from '@root/common/utilities';
import { formatAirtableMetaData, getFormattedAirtableFields, sortCalendarDataByDate, sortTracksByOrder } from '@root/resolvers/airtable-import';
import { useEffect, useState } from 'react';
import Loading from './Loading';

import VideoPlayerSVG from './svgs/VideoPlayerSVG';

export default function ScheduleListByTrack({ scheduleData }) {
  const [eventData, setEventData] = useState<any[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    if (scheduleData?.airtable) {
      const fetchData = async () => {
        try {
          const formattedAirtableData = formatAirtableMetaData(scheduleData?.airtable?.data);

          setEventData(formattedAirtableData);

          setLoading(false);
        } catch (e) {
          console.log(e);
          setLoading(false);
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
              (events as any).map((event, index) => {
                return (
                  <div key={index}>
                    <div className={styles.border} style={{ padding: '1.5rem 1rem 1rem 1rem', display: 'grid', rowGap: '0.5rem' }}>
                      {event.title && <h3 className={styles.title}>{event.title}</h3>}
                      {event.trackDetails ? (
                        <div className={classNames(styles.row)}>
                          {event.trackDetails.time && <p className={styles.time}>{event.trackDetails.time}</p>}
                          {event.trackDetails.roomName && <p> Room: {event.trackDetails.roomName}</p>}
                          {event.trackDetails.capacity && <p> Capacity: {event.trackDetails.capacity}</p>}
                        </div>
                      ) : null}
                      {event?.records.length > 1 && <h4 style={{ padding: '0.5rem 0rem' }}>Scheduled Talks</h4>}

                      {event.records?.map((record, index) => {
                        return (
                          <div key={index}>
                            {index === 0 && (record?.firstName || record?.desc || record?.fullName) && (
                              <div className={classNames(styles.grid2Cols, styles.scheduleRow)}>
                                <p className={classNames(styles.col10, styles.scheduleRowTitle)}>Time</p>
                                <p className={classNames(styles.col20, styles.scheduleRowTitle)}>Title</p>
                                <p className={classNames(styles.col10, styles.scheduleRowTitle)}>Speakers</p>
                                <p className={classNames(styles.col50, styles.scheduleRowTitle)}>Description</p>
                              </div>
                            )}
                            <div
                              className={classNames(styles.grid2Cols, styles.borderTalksContainer)}
                              style={{ borderBottom: index === event.records.length - 1 ? 'none' : '0.5px solid var(--color-blue-gray)' }}
                            >
                              <p className={styles.col10}>{record.startTime ?? '─'}</p>
                              {record?.title && <p className={classNames(styles.col20, styles.desc)}>{record.title}</p>}

                              {(record?.firstName || record?.fullName) && <p className={classNames(styles.col10, styles.desc)}>{record.firstName || record.fullName}</p>}
                              <p className={classNames(styles.col50, styles.desc)} style={{ display: 'grid', rowGap: '1rem' }}>
                                {record?.desc && <p>{record.desc}</p>}

                                {record?.videoLink && record?.videoStatus === 'Approved' && (
                                  <span>
                                    <a target="_blank" href={record.videoLink} style={{ textDecoration: 'none' }}>
                                      <button className={styles.videoLinkButton}>
                                        <VideoPlayerSVG className={styles.videoLinkSVG} />
                                        View Video
                                      </button>
                                    </a>
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </>
  );
}
