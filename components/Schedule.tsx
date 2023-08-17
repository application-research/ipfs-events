'use client';
import styles from '@components/Schedule.module.scss';

import { useRef, useState } from 'react';
import { SchedulePopUp } from './SchedulePopUp';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function Schedule({ calendarData, submitTrack }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const tableRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLDivElement>(null);

  const scheduleStyle = {
    backgroundColor: 'var(--color-white)',
  };

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

  return (
    <div className={styles.container}>
      <div className={styles.scheduleWrapper}>
        <div
          className={` ${styles.headers}`}
          ref={headersRef}
          style={{
            position: 'sticky',
            zIndex: 'var(--z-index-medium)',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          {Object.keys(calendarData).map((date, index) => {
            return (
              <div className={styles.heading} key={index}>
                <p>{date}</p>
              </div>
            );
          })}
        </div>
        <div ref={tableRef} className={styles.schedule} style={{ overflowX: 'auto' }}>
          {Object.keys(calendarData)?.map((dateKey, index) => {
            const events = calendarData[dateKey];
            const eventKeys = Object.keys(events);
            const isLastIndex = index === Object.keys(calendarData).length - 1;

            return (
              <div key={index} className={styles.eventStyle}>
                {eventKeys?.map((eventItem, eventIndex) => {
                  const events = calendarData[dateKey];
                  const eventDetails = events[eventItem];

                  const { title, time, trackDate, trackAttendees, location } = eventDetails.trackDetails[eventItem] ?? '';

                  return (
                    <div style={{ ...scheduleStyle }} className={styles.eventBox} key={eventIndex} onClick={() => handleEventClick(eventDetails)}>
                      {title && <p className={styles.eventName}>{title}</p>}
                      {time && <p className={styles.time}>{time}</p>}
                      {location && <p className={styles.location}>{location}</p>}
                      <p className={styles.people}>👤 {trackAttendees ?? '50 seats'}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
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
      {selectedEvent && (
        <section style={{ position: 'relative' }}>
          {isOverlayOpen && <div className={styles.overlay} onClick={handleOverlayClick} />}
          <div className={`${styles.absoluteContainer} ${isOverlayOpen ? styles.active : ''}`} onClick={handleContainerClick}>
            <SchedulePopUp style={scheduleStyle} trackTalks={selectedEvent} isOpen={isOverlayOpen} onClose={handlePopupClose} />
          </div>
        </section>
      )}
    </div>
  );
}
