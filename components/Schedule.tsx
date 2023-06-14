'use client';
import styles from '@components/Schedule.module.scss';

import { CALENDAR_CONTENT } from '@root/content/calendar-content';
import { SchedulePopUp } from './SchedulePopUp';
import { useState } from 'react';
import Link from './Link';

export default function Schedule() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

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

  const eventsContent = CALENDAR_CONTENT;

  return (
    <div style={{ display: 'grid', rowGap: '2rem' }}>
      <div>
        <section className={styles.calander}>
          <section className={styles.calander}>
            {eventsContent.map((event, index) => {
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
          {eventsContent.map((eventItems, index) => {
            const isLastIndex = index === eventsContent.length - 1;

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
              <SchedulePopUp eventItem={selectedEvent} setSelectedEvent={setSelectedEvent} />
            </div>
          </>
        )}
      </div>

      <Link style="text" href="https://airtable.com/shr2Eq1juLJh0ri3i" target="_blank">
        <section className={styles.submission}>
          <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column', alignItems: 'center' }}>
            <p>+</p>
            <h4 className={styles.submitTrack}>Submit a Track or Talk</h4>
          </div>
        </section>
      </Link>
    </div>
  );
}
