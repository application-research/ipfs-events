'use client';
import styles from 'components/ScheduleListByTalks.module.scss';

import { classNames, makeRequest } from '@root/common/utilities';
import { formatAirtableMetaData, getFormattedAirtableFields, sortCalendarDataByDate, sortTracksByOrder } from '@root/resolvers/airtable-import';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import moment from 'moment';

export default function ScheduleListByTalks({ scheduleData }) {
  const [eventData, setEventData] = useState<any[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

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

  const isWithinSelectedHour = (eventTime: string, selectedTime: string): boolean => {
    const eventMoment = moment(eventTime, 'hh:mm a');
    const selectedMomentStart = moment(selectedTime, 'HH:mm a');
    const selectedMomentEnd = selectedMomentStart.clone().add(1, 'hour');

    return eventMoment.isSameOrAfter(selectedMomentStart) && eventMoment.isBefore(selectedMomentEnd);
  };

  const generateHourlyTimeRanges = (times: string[]): string[] => {
    // Extract unique hours from the provided times
    const hours = [...new Set(times.map((time) => moment(time, 'hh:mm a').hour()))].sort((a, b) => a - b);

    // Generate hourly ranges
    const ranges = [];
    for (let i = 0; i < hours.length - 1; i++) {
      const start = moment.utc({ hour: hours[i] }).format('hh:mm a');
      const end = moment.utc({ hour: hours[i + 1] }).format('hh:mm a');
      ranges.push(`${start} - ${end}`);
    }
    return ranges;
  };

  const allTimes = generateHourlyTimeRanges(
    Object.values(formattedAirtableData)
      .flatMap((eventArray) => eventArray)
      .flatMap((event) => event.records.map((record) => record.startTime))
  );

  return (
    <>
      <div className={styles.talksFilterRow}>
        <div className={styles.talksFilterRow}>
          <p className={styles.talksFilterText}>Filter by Date</p>
          <select className={styles.talksFilter} value={selectedDate || ''} onChange={(e) => setSelectedDate(e.target.value)}>
            <option value="">All Dates</option>
            {allDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.talksFilterRow}>
          <p className={styles.talksFilterText}>Filter by Time</p>
          <select className={styles.talksFilter} value={selectedTime || ''} onChange={(e) => setSelectedTime(e.target.value)}>
            <option value="">All Times</option>
            {allTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.talksFilterRow}>
          <p className={styles.talksFilterText}>Filter by Track</p>
          <select className={styles.talksFilter} value={selectedTime || ''} onChange={(e) => setSelectedTime(e.target.value)}>
            <option value="">All Times</option>
            {allTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {Object?.entries(formattedAirtableData)?.map(([date, events]) => {
        if (selectedDate && selectedDate !== date) return null;

        return (
          <div key={date} className={styles.list}>
            {date && (
              <h2 className={styles.date} style={{ paddingTop: '1rem' }}>
                {date}
              </h2>
            )}

            <div>
              <div className={classNames(styles.grid2Cols, styles.scheduleRow)}>
                <p className={classNames(styles.col10, styles.scheduleRowTitle)}>Time</p>
                <p className={classNames(styles.col20, styles.scheduleRowTitle)}>Title</p>
                <p className={classNames(styles.col10, styles.scheduleRowTitle)}>Speakers</p>
                <p className={classNames(styles.col20, styles.scheduleRowTitle)}>Track and Room</p>
                <p className={classNames(styles.col50, styles.scheduleRowTitle)}>Description</p>
              </div>

              {events &&
                (events as any)?.map((event, index) => {
                  const filteredRecords = event.records?.filter((record) => !selectedTime || isWithinSelectedHour(record.startTime, selectedTime));

                  return (
                    <div key={index}>
                      <div className={styles.border}>
                        {filteredRecords &&
                          filteredRecords.length > 0 &&
                          filteredRecords.map((record, index) => (
                            <div key={index} className={classNames(styles.grid2Cols, styles.borderTalksContainer)} style={{ borderBottom: '0.5px solid var(--color-black)' }}>
                              <p className={styles.col10} style={{ padding: '0rem 0.5rem', fontFamily: 'Inter', fontWeight: 'font-weight: var(--font-weight-light)' }}>
                                {record.startTime ?? '─'}
                              </p>

                              {record?.title && (
                                <div className={classNames(styles.col20)}>
                                  <p className={styles.talkTitle} style={{ color: 'var(--color-blue)' }}>
                                    {record.title}
                                  </p>
                                </div>
                              )}

                              <p className={styles.col10} style={{ color: 'var(--color-blue)' }}>
                                {record?.firstName && record.firstName}
                              </p>
                              <p className={classNames(styles.col20, styles.talkTrackDetails)}>
                                {event.title && <p className={styles.trackTitle}>Track: {event.title}</p>}
                                {event.trackDetails.capacity && <p className={styles.talkRoom}> Room: {event.trackDetails.roomName}</p>}
                              </p>
                              <p className={classNames(styles.col50, styles.desc)}>{record?.desc && record.desc}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </>
  );
}
