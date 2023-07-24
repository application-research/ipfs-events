'use client';
import styles from '@components/Schedule.module.scss';

// import { CALENDAR_CONTENT } from '@root/content/calendar-content';
import { getAirtableData } from '@root/resolvers/airtable-import';
import { useEffect, useState } from 'react';
import Link from './Link';
import { SchedulePopUp } from './SchedulePopUp';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}
// {
//   calendarData;
// }
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
            console.log('dateKey', dateKey);
            const events = calendarData[dateKey];
            const eventKeys = Object.keys(events);
            const isLastIndex = index === calendarData.length - 1;

            return (
              <div key={index} className={styles.eventStyle} style={{ borderRight: isLastIndex ? '0.5px solid var(--color-black)' : '' }}>
                {eventKeys.map((eventItem, eventIndex) => (
                  // console.log(eventItem,'event item')
                  <div className={styles.eventBox} key={eventIndex} onClick={() => handleEventClick(eventItem)}>
                    <p className={styles.eventName}>{eventItem}</p>

                    {/* <p className={styles.time}>{eventItem.time}</p>
                    <p className={styles.location}>{eventItem.location}</p>
                    <p className={styles.people}>👤 {eventItem.people}</p> */}
                  </div>
                ))}
              </div>
            );
          })}
        </section>
        {selectedEvent && (
          <>
            {/* {isOverlayOpen && <div className={styles.overlay} onClick={handleOverlayClick} />}
            <div className={`${styles.absoluteContainer} ${isOverlayOpen ? styles.active : ''}`} onClick={handleContainerClick}>
              <SchedulePopUp eventData={eventData} eventItem={selectedEvent} setSelectedEvent={setSelectedEvent} />
            </div> */}
          </>
        )}
      </div>

      {/* {calendarData?.formLink && (
        <Link style="text" href={calendarContent?.formLink.link} target="_blank">
          <section className={styles.bigCTA}>
            <div className={styles.bigCTARow}>
              <h4 className={styles.bigCTATitle}>{calendarContent?.formLink.title}</h4>
              <ArrowCurvedSVG />
            </div>
          </section>
        </Link>
      )} */}
    </div>
  );
}
