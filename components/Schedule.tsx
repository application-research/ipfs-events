'use client';
import styles from '@components/Schedule.module.scss';

import { CALENDAR_CONTENT } from '@root/content/calendar-content';
import { fetchAirtableData } from '@root/pages/api/airtable';
import { useEffect, useState } from 'react';
import Link from './Link';
import { SchedulePopUp } from './SchedulePopUp';
import ArrowCurvedSVG from './svgs/ArrowCurvedSVG';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function Schedule({ calendarData }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [airtableData, setAirtableData] = useState([]);
  const calendarContent = calendarData ?? CALENDAR_CONTENT;

  const handleOverlayClick = () => {
    setIsOverlayOpen(false);
  };

  const handleContainerClick = () => {
    setIsOverlayOpen(true);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
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
    <div style={{ display: 'grid', rowGap: '2rem' }}>
      {/* <div>
        <section className={styles.calander}>
          <section className={styles.calander}>
            {calendarContent.map((event, index) => {
              return (
                <div className={styles.eventHeading} key={index}>
                  <p>{event.day}</p>
                  <p>{event.date}</p>
                </div>
              );
            })}
          </section>
        </section>

        <section className={styles.calander}>
          {calendarContent.map((eventItems, index) => {
            const isLastIndex = index === calendarContent.length - 1;

            return (
              <div key={index} className={styles.eventStyle} style={{ borderRight: isLastIndex ? '0.5px solid var(--color-black)' : '' }}>
                {eventItems.events.map((eventItem, eventIndex) => {
                  return (
                    <div>
                      <div className={styles.eventBox} key={eventIndex} onClick={() => handleEventClick(eventItem)}>
                        <p className={styles.eventName}>{eventItem.name}</p>
                        <p className={styles.time}>{eventItem.time}</p>
                        <p className={styles.location}>{eventItem.location}</p>
                        <p className={styles.people}>👤 {eventItem.people}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </section>
        {selectedEvent && (
          <>
            {isOverlayOpen && <div className={styles.overlay} onClick={handleOverlayClick} />}
            <div className={`${styles.absoluteContainer} ${isOverlayOpen ? styles.active : ''}`} onClick={handleContainerClick}>
              <SchedulePopUp eventData={eventData} eventItem={selectedEvent} setSelectedEvent={setSelectedEvent} />
            </div>
          </>
        )}
      </div>  */}
      <div>Event Schedule Coming Soon</div>
      {calendarContent?.formLink && (
        <Link style="text" href={calendarContent?.formLink.link} target="_blank">
          <section className={styles.bigCTA}>
            <div className={styles.bigCTARow}>
              <h4 className={styles.bigCTATitle}>{calendarContent?.formLink.title}</h4>
              <ArrowCurvedSVG width={40} />
            </div>
          </section>
        </Link>
      )}
    </div>
  );
}
