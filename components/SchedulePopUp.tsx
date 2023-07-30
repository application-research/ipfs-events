import styles from '@components/SchedulePopUp.module.scss';

import { Button, CallToActionVariant } from './CallToActionVariant';
import { CallToActionVariantEnum } from '@root/common/types';
import { MarkdownToJSX } from './Markdown';
import { useState } from 'react';
import Link from './Link';

export function SchedulePopUp({ trackTalks }) {
  const [isOpen, setIsOpen] = useState(true);

  const talks = trackTalks && trackTalks.records;
  const trackDetails = trackTalks && trackTalks.trackDetails;

  //get the track name key from trackDetails object
  const trackName = Object.keys(trackDetails)[0];
  //access the track details values inside the track name
  const { location, time, title, trackDate, trackAttendees, trackDesc } = trackDetails[trackName];

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
          {title && (
            <h2 className={styles.eventName} style={{ paddingBottom: '0.5rem' }}>
              {title}
            </h2>
          )}
          {trackDate && (
            <p className={styles.time}>
              <strong>Date</strong>: {trackDate}
            </p>
          )}
          {time && (
            <p className={styles.time}>
              <strong>Time</strong>: {time}
            </p>
          )}
          {location && (
            <p className={styles.location}>
              <strong>Venue</strong>: {location}
            </p>
          )}
          {/* {trackLead && (
            <p className={styles.people}>
              <strong>Track Lead</strong>: {trackLead}
            </p>
          )} */}
          {trackAttendees && (
            <p className={styles.people}>
              <strong>Attendees</strong>: {trackAttendees}
            </p>
          )}
          {trackDesc && <p className={styles.description}>{trackDesc}</p>}

          {/* {ctas && (
            <div className={styles.row} style={{ paddingTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
              {eventItem.ctas.map((ctaItem, index) => {
                return <CallToActionVariant key={index} type={ctaItem.type} cta={ctaItem} />;
              })}
            </div>
          )}  */}
          <div className={styles.scheduleContainer}>
            <div className={`${styles.tableRow} ${styles.tableHeader}`}>
              <h4 className={`${styles.col1} ${styles.headerTitle}`}>Time</h4>
              <h4 className={`${styles.col2} ${styles.headerTitle}`}>Title</h4>
              <h4 className={`${styles.col3} ${styles.headerTitle}`}>Info</h4>
            </div>

            {sortedTalks &&
              sortedTalks.map((talk, index) => {
                const { desc, firstName, lastName, videoLink, talkDuration, title } = talk;

                return (
                  <div className={styles.tableRow} key={index}>
                    <h4 className={styles.col1}> {talkDuration ? talkDuration : ''} </h4>

                    <h4 className={styles.col1}>{firstName ? `${firstName} ${lastName}  ` : ''}</h4>
                    <div className={styles.col3}>
                      <div className={styles.flexCol}>
                        <h4>{title ? title : ''}</h4>
                        {desc && <MarkdownToJSX>{desc}</MarkdownToJSX>}
                        {videoLink && (
                          <Link href={videoLink} style="animated">
                            <strong>Video Link</strong>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-black)', paddingTop: '1rem' }}>
          <Button type="button" target="_parent" onClick={handleCloseClick} text="Close" buttonColor={'var(--color-black200)'} textColor={'var(--color-white)'} />
        </div>
      </div>
    </section>
  );
}
