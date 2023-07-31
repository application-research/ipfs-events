'use client';
import styles from '@components/Schedule.module.scss';

import { getAirtableData, getFormattedAirtableFields } from '@root/resolvers/airtable-import';
import { SchedulePopUp } from './SchedulePopUp';
import { useEffect, useState } from 'react';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function Schedule({ scheduleData }) {
  if (scheduleData?.airtable?.tableName == null) return null;

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [data, setData] = useState([]);

  const tableName = scheduleData?.airtable?.tableName;

  const handleOverlayClick = () => {
    setIsOverlayOpen(false);
  };

  const handleContainerClick = () => {
    setIsOverlayOpen(true);
  };

  const handleEventClick = (e) => {
    setSelectedEvent(e);
    setIsOverlayOpen(true);
  };

  const handlePopupClose = () => {
    setSelectedEvent(null);
    setIsOverlayOpen(false);
  };

  useEffect(() => {
    // Replace tableName with a specific view from airtable
    getAirtableData(tableName, (records) => {
      if (records) {
        setData(records);
      }
    });
  }, []);

  const calendarData: any = getFormattedAirtableFields(data);

  return (
    <div className={styles.container} style={{ display: 'grid', rowGap: '2rem' }}>
      <div>
        <section className={styles.schedule}>
          {Object.keys(calendarData).map((date, index) => {
            return (
              <div className={styles.eventHeading} key={index}>
                <p>{date}</p>
              </div>
            );
          })}
        </section>

        <section className={styles.schedule}>
          {Object.keys(calendarData)?.map((dateKey, index) => {
            const events = calendarData[dateKey];
            const eventKeys = Object.keys(events);
            const isLastIndex = index === Object.keys(calendarData).length - 1;

            return (
              <div key={index} className={styles.eventStyle} style={{ borderRight: isLastIndex ? '0.5px solid var(--color-gray-transparent)' : 'none' }}>
                {eventKeys?.map((eventItem, eventIndex) => {
                  const events = calendarData[dateKey];
                  const eventDetails = events[eventItem];

                  const { title, time, trackDate, trackAttendees, location } = eventDetails.trackDetails[eventItem] ?? '';

                  return (
                    <div className={styles.eventBox} key={eventIndex} onClick={() => handleEventClick(eventDetails)}>
                      {title && <p className={styles.eventName}>{title}</p>}
                      {time && <p className={styles.time}>{time}</p>}
                      {location && <p className={styles.location}>{location}</p>}
                      <p className={styles.people}>👤 {trackAttendees ?? 'All Welcome'}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </section>
        {selectedEvent && (
          <section style={{ position: 'relative' }}>
            {isOverlayOpen && <div className={styles.overlay} onClick={handleOverlayClick} />}
            <div className={`${styles.absoluteContainer} ${isOverlayOpen ? styles.active : ''}`} onClick={handleContainerClick}>
              <SchedulePopUp trackTalks={selectedEvent} isOpen={isOverlayOpen} onClose={handlePopupClose} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
