'use client';
import styles from '@components/Schedule.module.scss';

import { getAirtableData, getFormattedAirtableFields } from '@root/resolvers/airtable-import';
import { SchedulePopUp } from './SchedulePopUp';
import { useEffect, useRef, useState } from 'react';
import ScrollTableTooltip from './ScrollTableTooltip';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function Schedule({ scheduleData }) {
  if (scheduleData?.airtable?.tableName == null) return null;

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const [data, setData] = useState([]);

  const tableRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLDivElement>(null);

  const tableName = scheduleData?.airtable?.tableName;
  const scheduleBackgroundColor = scheduleData?.style?.backgroundColor ?? 'var(--color-white)';
  const scheduleHoverColor = scheduleData?.style?.hoverColor ?? 'var(--color-gray-transparent)';

  const scheduleStyle = {
    backgroundColor: scheduleBackgroundColor,
    ':hover': {
      backgroundColor: scheduleHoverColor,
    },
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

  // useEffect(() => {
  //   const getData = async () => {
  //     const airtableData = await fetchAirtableData();

  //     if (airtableData) {
  //       setAirtableData(airtableData);
  //     }
  //   };

  //   getData();
  // }, []);

  return (
    <div className={styles.container}>
      <section
        className={styles.sectionScrollTooltip}
        style={{
          background: scheduleStyle.backgroundColor ?? 'var(--color-white)',
        }}
      >
        <ScrollTableTooltip backgroundColor={scheduleStyle?.backgroundColor} showArrowLeft={showArrowLeft} showArrowRight={showArrowRight} tableRef={tableRef} />
      </section>

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
              <div key={index} className={styles.eventStyle} style={{ borderRight: isLastIndex ? '0.5px solid var(--color-gray-transparent)' : 'none' }}>
                {eventKeys?.map((eventItem, eventIndex) => {
                  const events = calendarData[dateKey];
                  const eventDetails = events[eventItem];

                  const { title, time, trackDate, trackAttendees, location } = eventDetails.trackDetails[eventItem] ?? '';

                  return (
                    <div style={{ ...scheduleStyle }} className={styles.eventBox} key={eventIndex} onClick={() => handleEventClick(eventDetails)}>
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
