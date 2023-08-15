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
        <div ref={tableRef} className={styles.schedule} style={{ overflowX: 'auto' }}>
          {Object.entries(calendarData).map(([dateKey, tracksForDate], index) => {
            if (!Array.isArray(tracksForDate) || tracksForDate.length === 0) {
              return null; // or handle this situation differently if needed
            }
            // Check if there are any items for the given date
            const hasItems = tracksForDate && tracksForDate.length > 0;
            console.log(tracksForDate, 'tracksFor date');
            return (
              <div key={index} className={`${styles.eventStyle} ${hasItems ? '' : styles.hideItems}`}>
                <div
                  className={`${styles.heading} ${hasItems ? '' : styles.hideItems}`}
                  key={index}
                  style={{ backgroundColor: hasItems ? 'var(--color-blue)' : 'var(--color-blue-gray' }}
                >
                  <p>{dateKey}</p>
                </div>
                {tracksForDate.map((track, trackIndex) => {
                  const { title: trackTitle, trackDetails, records } = track;

                  return records.map((eventDetails, eventIndex) => {
                    //  const { title, time, speakers, trackDate, order, capacity, roomName } = eventDetails.trackDetails[trackTitle] || {};
                    const { title, time, speakers, trackDate, order, capacity, roomName } = eventDetails;
                    console.log(eventDetails, 'event details');
                    return (
                      <div className={styles.eventBox} key={`${trackIndex}-${eventIndex}`} onClick={() => handleEventClick(eventDetails)}>
                        {title && <p className={styles.eventName}>{title}</p>}
                        <div className={styles.eventDetails}>
                          {time && <p className={styles.time}>{time}</p>}
                          {roomName && <p className={styles.location}>{roomName}</p>}
                          {speakers && <p className={styles.speakers}> {speakers}</p>}
                          <p className={styles.people}>👤 {capacity ?? '50 seats'}</p>
                        </div>
                      </div>
                    );
                  });
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
            <SchedulePopUp style={null} trackTalks={selectedEvent} isOpen={isOverlayOpen} onClose={handlePopupClose} />
          </div>
        </section>
      )}

      {submitTrackLink && (
        <a href={submitTrackLink} className={styles.link} target="_blank">
          <section className={styles.callToAction}>
            <div className={styles.callToActionTextContainer}>
              <p className={styles.plusIcon}>+</p>
              <p className={styles.callToActionText}>Submit a Talk or Track </p>
            </div>
          </section>
        </a>
      )}
    </div>
  );
}

//to do: add styles from fixtures
// const scheduleBackgroundColor = scheduleData?.style?.backgroundColor ?? 'var(--color-white)';
// const scheduleHoverColor = scheduleData?.style?.hoverColor ?? 'var(--color-gray-transparent)';

// const scheduleStyle = {
//   backgroundColor: scheduleBackgroundColor,
//   ':hover': {
//     backgroundColor: scheduleHoverColor,
//   },
// };
{
  /* <div
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
        </div> */
}
