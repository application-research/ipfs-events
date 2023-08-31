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

  const handleScroll = useCallback((event) => {
    if (isScrolling) return;

    const source = event.target;

    setIsScrolling(true);
    if (tableRef.current && headersRef.current) {
      if (source === tableRef.current) {
        headersRef.current.scrollLeft = source.scrollLeft;
      } else if (source === headersRef.current) {
        tableRef.current.scrollLeft = source.scrollLeft;
      }
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
        <div ref={tableRef} className={styles.schedule} style={{ overflowX: 'auto' }}>
          {Object.entries(calendarData).map(([dateKey, tracksForDate], index) => {
            // Check if there are any items for the given date
            const hasItems = Array.isArray(tracksForDate) && tracksForDate.length > 0;

            return (
              <div key={index} className={`${styles.eventStyle} ${hasItems ? '' : styles.hideItems}`}>
                <div
                  className={`${styles.heading} ${hasItems ? '' : styles.hideItems}`}
                  key={index}
                  onScroll={handleScroll}
                  style={{ backgroundColor: hasItems ? 'var(--color-blue)' : 'var(--color-blue-gray' }}
                >
                  <p>{dateKey}</p>
                </div>

                {Array.isArray(tracksForDate) &&
                  tracksForDate?.map((track, trackIndex) => {
                    const trackDetails = track.trackDetails;
                    const records = track.records;
                    if (trackDetails) {
                      const { title, firstName, roomName, time, capacity } = trackDetails ?? '';

                      return (
                        <div className={styles.eventBox} key={trackIndex} onClick={() => handleEventClick({ ...trackDetails, records })} onScroll={handleScroll}>
                          {title && <p className={styles.eventName}>{title}</p>}
                          <div className={styles.eventDetails}>
                            {time && <p className={styles.time}>{time}</p>}
                            {roomName && <p className={styles.location}>{roomName}</p>}
                            {firstName && <p className={styles.speakers}> {firstName}</p>}
                            <p className={styles.people}>👤 {capacity ?? '50 seats'}</p>
                          </div>
                        </div>
                      );
                    } else {
                      return <></>;
                    }
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {selectedEvent && (
        <section>
          {isOverlayOpen && <div className={styles.overlay} onClick={handleOverlayClick} />}

          <div className={`${styles.fixedContainer} ${isOverlayOpen ? styles.active : ''}`} onClick={handleContainerClick}>
            <SchedulePopUp style={null} selectedEvent={selectedEvent} isOpen={isOverlayOpen} onClose={handlePopupClose} />
          </div>
        </section>
      )}
    </div>
  );
}
