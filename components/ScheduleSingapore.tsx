'use client';
import styles from '@components/Schedule.module.scss';

import { SCHEDULE_SINGAPORE } from '@root/content/schedule-singapore';
import { SchedulePopUp } from './SchedulePopUp';
import React, { useEffect, useRef, useState } from 'react';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function ScheduleSingapore({ scheduleData }) {
  if (scheduleData?.airtable?.tableName == null) return null;

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [data, setData] = useState([]);

  const tableRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLDivElement>(null);
  // const tableName = scheduleData?.airtable?.tableName;

  const tableName = 'Asia Talk/Track Submissions + Forms';

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

  const handlePopupClose = () => {
    setSelectedEvent(null);
    setIsOverlayOpen(false);
  };

  // useEffect(() => {
  //   getAirtableDataSingapore(tableName, (records) => {
  //     if (records) {
  //       setData(records);
  //     }
  //   });
  // }, []);

  // const calendarData: any = getFormattedAirtableFields(data);

  const calendarData = SCHEDULE_SINGAPORE;

  return (
    <div className={styles.container}>
      <section className={styles.sectionScrollTooltip}>
        {/* <ScrollTableTooltip backgroundColor={scheduleStyle?.backgroundColor} showArrowLeft={showArrowLeft} showArrowRight={showArrowRight} tableRef={tableRef} /> */}
        Click and drag the schedule to navigate
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
        <div ref={tableRef} className={styles.schedule} style={{ overflowX: 'auto' }}>
          {Object.keys(calendarData)?.map((dateKey, index) => {
            const events = calendarData[dateKey];
            const eventKeys = Object.keys(events);
            const hasItems = Object.keys(calendarData[dateKey]).length > 0;

            return (
              <div key={index} className={`${styles.eventStyle} ${hasItems ? '' : styles.hideItems} `}>
                {eventKeys?.map((eventItem, eventIndex) => {
                  const events = calendarData[dateKey];
                  const eventDetails = events[eventItem];

                  const { title, time, speakers, trackLeads, trackDate, trackAttendees, location } = eventDetails.trackDetails[eventItem] ?? '';

                  return (
                    <div className={styles.eventBox} key={eventIndex} onClick={() => handleEventClick(eventDetails)}>
                      {title && <p className={styles.eventName}>{title}</p>}

                      <div className={styles.eventDetails}>
                        {time && <p className={styles.time}>{time}</p>}
                        {location && <p className={styles.location}>{location}</p>}
                        {trackLeads && <p className={styles.speakers}> {trackLeads}</p>}

                        <p className={styles.people}>👤 {trackAttendees ?? '50 seats'}</p>
                      </div>
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

      <a href="https://airtable.com/appEjnh5rpWMsjocb/shrw3Ha0yTusDmcOg" className={styles.link} target="_blank">
        <section className={styles.callToAction}>
          <div className={styles.callToActionTextContainer}>
            <p className={styles.plusIcon}>+</p>
            <p className={styles.callToActionText}>submit a track or talk for Singapore</p>
          </div>
        </section>
      </a>
    </div>
  );
}
// {
//   Object.keys(calendarData).map((date, index) => {
//     const hasItems = Object.keys(calendarData[date]).length > 0;

//     return (
//       <div className={styles.heading} key={index} style={{ backgroundColor: hasItems ? 'var(--color-blue)' : 'var(--color-blue-gray' }}>
//         <p>{date}</p>
//       </div>
//     );
//   });
// }
// {
//   Object.keys(calendarData)?.map((dateKey, index) => {
//     const events = calendarData[dateKey];
//     const eventKeys = Object.keys(events);
//     const hasItems = Object.keys(dateKey).length > 0;

//     return (
//       <React.Fragment key={index}>
//         {eventKeys?.map((eventItem, eventIndex) => {
//           const events = calendarData[dateKey];
//           const eventDetails = events[eventItem];
//           const { title, time, speakers, trackDate, trackAttendees, location } = eventDetails.trackDetails[eventItem] ?? '';

//           return (
//             <div style={{ ...scheduleStyle }} className={styles.eventBox} key={eventIndex} onClick={() => handleEventClick(eventDetails)}>
//               {title && <p className={styles.eventName}>{title}</p>}
//               <div className={styles.eventDetails}>
//                 {time && <p className={styles.time}>{time}</p>}
//                 {location && <p className={styles.location}>{location}</p>}
//                 {speakers && <p className={styles.speakers}> {speakers}</p>}

//                 <p className={styles.people}>👤 {trackAttendees ?? '50 seats'}</p>
//               </div>
//             </div>
//           );
//         })}
//       </React.Fragment>
//     );
//   });
// }
