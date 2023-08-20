'use client';
import styles from '@components/Schedule.module.scss';

import { useCallback, useRef, useState } from 'react';
import { SchedulePopUp } from './SchedulePopUp';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function Schedule({ calendarData }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const tableRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLDivElement>(null);

  const scheduleStyle = {
    backgroundColor: 'var(--color-white)',
  };

  const handleScroll = useCallback((event) => {
    if (isScrolling) return;

    const source = event.target;
    setIsScrolling(true);
    if (source === tableRef.current) {
      headersRef.current.scrollLeft = source.scrollLeft;
    } else if (source === headersRef.current) {
      tableRef.current.scrollLeft = source.scrollLeft;
    }
    setIsScrolling(false);
  }, []);

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
      <section className={styles.sectionScrollTooltip}>Click and drag the schedule to navigate</section>

      <div className={styles.scheduleWrapper}>
        <div
          className={` ${styles.headers}`}
          ref={headersRef}
          style={{
            position: 'sticky',
            zIndex: 'var(--z-index-medium)',
            maxWidth: '100%',
            overflow: 'scroll',
            top: '-5rem',
          }}
          onScroll={handleScroll}
        >
          {Object.keys(calendarData).map((date, index) => {
            const hasItems = Object.keys(calendarData[date]).length > 0;

            return (
              <div
                className={`${styles.heading} ${hasItems ? '' : styles.hideItems}`}
                key={index}
                style={{ backgroundColor: hasItems ? 'var(--color-blue)' : 'var(--color-blue-gray' }}
              >
                <p>{date}</p>
              </div>
            );
          })}
        </div>

        <div ref={tableRef} onScroll={handleScroll} className={styles.schedule} style={{ overflowX: 'auto' }}>
          {Object.keys(calendarData)?.map((dateKey, index) => {
            const events = calendarData[dateKey];
            const eventKeys = Object.keys(events);
            const hasItems = Object.keys(calendarData[dateKey]).length > 0;

            return (
              <div key={index} className={`${styles.eventStyle} ${hasItems ? '' : styles.hideItems} `}>
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
