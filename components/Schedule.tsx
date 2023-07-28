'use client';
import styles from '@components/Schedule.module.scss';

// import { CALENDAR_CONTENT } from '@root/content/calendar-content';
import { getAirtableData } from '@root/resolvers/airtable-import';
import { SchedulePopUp } from './SchedulePopUp';
import { useEffect, useState } from 'react';
import Link from './Link';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function Schedule() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [airtableData, setAirtableData] = useState([]);

  const handleOverlayClick = () => {
    setIsOverlayOpen(false);
  };

  const handleContainerClick = () => {
    setIsOverlayOpen(true);
  };

  const handleEventClick = (event) => {
    console.log('event', event);
    setSelectedEvent(event);
    setIsOverlayOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAirtableData(calendarData.timezone);
        if (data) {
          setAirtableData(data as any);
        }
      } catch (error) {
        console.error('Error fetching Airtable data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'grid', rowGap: '2rem' }}>
      <div>
        <section className={styles.calander}>
          {Object.keys(calendarData).map((date, index) => {
            return (
              <div className={styles.eventHeading} key={index}>
                <p>{date}</p>
              </div>
            );
          })}
          {/* {calendarContent.map((event, index) => {
            return (
              <div className={styles.eventHeading} key={index}>
                <p>{event.day}</p>
                <p>{event.date}</p>
              </div>
            );
          })} */}
        </section>

        <section className={styles.calander}>
          {/* {Object(calendarContent).map((eventItems, index) => {
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
          })} */}

          {Object.keys(calendarData).map((dateKey, index) => {
            const events = calendarData[dateKey];
            const eventKeys = Object.keys(events);
            const isLastIndex = index === calendarData.length - 1;

            console.log('calendardata', calendarData);

            return (
              <div key={index} className={styles.eventStyle} style={{ borderRight: isLastIndex ? '0.5px solid var(--color-black)' : '' }}>
                {eventKeys.map((eventItem, eventIndex) => {
                  const events = calendarData[dateKey];
                  const eventDetails = events[eventItem];

                  console.log(eventDetails, 'event item');
                  return (
                    <div className={styles.eventBox} key={eventIndex} onClick={() => handleEventClick(eventDetails)}>
                      <p className={styles.eventName}>{eventItem}</p>
                      <p className={styles.time}>time</p>
                      {/* <p className={styles.time}>{eventItem.time}</p>
                    <p className={styles.location}>{eventItem.location}</p>
                    <p className={styles.people}>👤 {eventItem.people}</p> */}
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
              <SchedulePopUp trackTalks={selectedEvent} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
