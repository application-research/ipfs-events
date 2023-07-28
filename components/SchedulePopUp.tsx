import styles from '@components/SchedulePopUp.module.scss';
import { Button, CallToActionVariant } from './CallToActionVariant';
import { CallToActionVariantEnum } from '@root/common/types';
import { MarkdownToJSX } from './Markdown';
import { useState } from 'react';

//to do rename records to scheduled Talks
export function SchedulePopUp({ trackTalks }) {
  const [isOpen, setIsOpen] = useState(true);

  const talks = trackTalks && trackTalks.records;
  const trackDetails = trackTalks && trackTalks.trackDetails;

  console.log('eventItem in popup', trackTalks);

  // const closeCTA = {
  //   type: CallToActionVariantEnum.BLACK,
  //   buttonColor: 'white',
  //   textColor: 'white',
  //   text: 'Close',
  // };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  const sortedTalks = talks.slice().sort((a, b) => {
    const timeA = new Date(a.startTime).getTime();
    const timeB = new Date(b.startTime).getTime();
    return timeA - timeB;
  });

  return (
    <section className={styles.eventStyle}>
      <div className={styles.popup}>
        <div style={{ display: 'grid', gap: '0.5rem', paddingBottom: '1rem' }}>
          <h2 className={styles.eventName} style={{ paddingBottom: '0.5rem' }}>
            name
          </h2>

          {/* {time && (
            <p className={styles.time}>
              <strong>Time</strong>: {eventItem.time}
            </p>
          )}
          {location && (
            <p className={styles.location}>
              <strong>Venue</strong>: {eventItem.location}
            </p>
          )}
          {trackLead && (
            <p className={styles.people}>
              <strong>Track Lead</strong>: {eventItem.trackLead}
            </p>
          )}
          {people && (
            <p className={styles.people}>
              <strong>Attendees</strong>: {eventItem.people}
            </p>
          )}
          {description && <p className={styles.description}>{eventItem.description}</p>}

          {ctas && (
            <div className={styles.row} style={{ paddingTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
              {eventItem.ctas.map((ctaItem, index) => {
                return <CallToActionVariant key={index} type={ctaItem.type} cta={ctaItem} />;
              })}
            </div>
          )} */}
          <div className={styles.scheduleContainer}>
            <div className={`${styles.tableRow} ${styles.tableHeader}`}>
              <h4 className={`${styles.col1} ${styles.headerTitle}`}>Time</h4>
              <h4 className={`${styles.col2} ${styles.headerTitle}`}>Title</h4>
              <h4 className={`${styles.col1} ${styles.headerTitle}`}>Speaker</h4>
              <h4 className={`${styles.col3} ${styles.headerTitle}`}>Info</h4>
            </div>

            {sortedTalks &&
              sortedTalks.map((talk, index) => {
                console.log('talk', talk);
                const { desc, firstName, lastName, talkDuration, title } = talk;

                return (
                  <div className={styles.tableRow} key={index}>
                    <h4 className={styles.col1}> {talkDuration ? talkDuration : ''} </h4>
                    <h4 className={styles.col2}>{title ? title : ''} </h4>

                    <h4 className={styles.col1}>{firstName ? `${firstName} ${lastName}  ` : ''}</h4>
                    <div className={styles.col3}>{desc && <MarkdownToJSX>{desc}</MarkdownToJSX>}</div>
                  </div>
                );
              })}
          </div>
        </div>

        <Button type="button" target="_parent" onClick={handleCloseClick} text="Close" buttonColor={'var(--color-black200)'} textColor={'var(--color-white)'} />
      </div>
    </section>
  );
}
