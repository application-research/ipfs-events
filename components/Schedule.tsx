'use client';
import styles from '@components/Schedule.module.scss';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SchedulePopUp } from './SchedulePopUp';
import { classNames, cleanString } from '@root/common/utilities';
import getScheduleGrid from 'system/layout/Grids';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function Schedule({ calendarData, scheduleId, scheduleStyle }: any) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const tableRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLDivElement>(null);

  // Determine the number of columns for the schedule based on total event days
  const columnCount = Object.keys(calendarData).length;
  const gridClass = getScheduleGrid(columnCount);

  useEffect(() => {
    function handleHashChange() {
      const currentHash = window.location.hash.substring(1).toLowerCase();

      if (currentHash) {
        const allTracks = Object.values(calendarData).flat();
        const eventData = allTracks.find((track) => {
          const formattedTitle = cleanString((track as any)?.trackDetails?.title).toLowerCase();
          const formattedDate = cleanString((track as any)?.trackDetails?.trackDate).toLowerCase();
          const expectedHash = `${formattedTitle}-${formattedDate}`;
          return expectedHash === currentHash;
        });

        if (eventData) {
          setSelectedEvent((eventData as any).trackDetails);
          setIsOverlayOpen(true);
          document.getElementById(scheduleId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          return;
        }
      }
    }

    // Call the hash function once initially
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [scheduleId, calendarData]);

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
    handleOpenPopup(e.title, e.trackDate);
  };

  const handlePopupClose = (e) => {
    setSelectedEvent(null);
    setIsOverlayOpen(false);
    window.history.pushState({}, '', window.location.pathname);
    e.preventDefault();
  };

  const handleOpenPopup = (title, trackDate) => {
    const formattedTitle = cleanString(title).toLowerCase();
    const formattedDate = cleanString(trackDate).toLowerCase();
    window.history.pushState({}, '', `#${formattedTitle}-${formattedDate}`);
  };

  return (
    <div className={styles.container} id={scheduleId}>
      <section className={styles.sectionScrollTooltip}>Click and drag the schedule to navigate</section>

      <div className={styles.scheduleWrapper}>
        <div ref={tableRef} className={classNames(styles.schedule, gridClass)} style={{ overflowX: 'auto' }}>
          {Object.entries(calendarData).map(([dateKey, tracksForDate], index) => {
            // Check if there are any items for the given date
            const hasItems = Array.isArray(tracksForDate) && tracksForDate.length > 0;

            return (
              <div
                key={index}
                className={classNames(styles.eventStyle, hasItems ? '' : styles.hideItems)}
                style={{
                  background: scheduleStyle.backgroundColor ? scheduleStyle.backgroundColor : 'var(--color-gray-transparent)',
                  color: scheduleStyle.textColor ? scheduleStyle.textColor : 'var(--color-text)',
                }}
              >
                <div
                  className={`${styles.heading} ${hasItems ? '' : styles.hideItems}`}
                  key={index}
                  onScroll={handleScroll}
                  style={{ backgroundColor: hasItems ? scheduleStyle.labelColor : 'var(--color-blue-gray)' }}
                >
                  <p>{dateKey}</p>
                </div>

                {Array.isArray(tracksForDate) &&
                  tracksForDate?.map((track, trackIndex) => {
                    const trackDetails = track.trackDetails;
                    const records = track.records;
                    if (trackDetails) {
                      const { title, firstName, fullName, roomName, time, capacity } = trackDetails ?? '';

                      return (
                        <div className={styles.rainbowBorderWrapper}>
                          <div
                            className={styles.eventBox}
                            key={trackIndex}
                            onClick={() => handleEventClick({ ...trackDetails, records })}
                            onScroll={handleScroll}
                            style={{ background: scheduleStyle.backgroundColor ? scheduleStyle.backgroundColor : 'var(--color-black)' }}
                          >
                            {title && <p className={styles.eventName}>{title}</p>}

                            <div className={styles.eventDetails}>
                              {time && <p className={styles.time}>{time}</p>}
                              {roomName && <p className={styles.location}>{roomName}</p>}
                              {firstName && <p className={styles.speakers}> {firstName}</p>}
                              {fullName && <p className={styles.speakers}> {fullName}</p>}
                              <p className={styles.people}>👤 {capacity ?? '50 seats'}</p>
                            </div>
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
            <SchedulePopUp scheduleStyle={scheduleStyle} selectedEvent={selectedEvent} isOpen={isOverlayOpen} onClose={handlePopupClose} />
          </div>
        </section>
      )}
    </div>
  );
}
