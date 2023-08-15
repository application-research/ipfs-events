import styles from '@components/SchedulePopUp.module.scss';

import Link from './Link';
import { MarkdownToJSX } from './Markdown';

export function SchedulePopUp({ trackTalks, isOpen, onClose, style }) {
  const talks = trackTalks && trackTalks.records;
  const trackDetails = trackTalks && trackTalks.trackDetails;

  //get the track name key from trackDetails object
  const trackName = Object.keys(trackDetails)[0];
  //access the track details values inside the track name
  const { attendees, discussionPoints, location, speakers, trackLeads, time, title, trackDate, trackAttendees, trackDesc } = trackDetails[trackName] ?? '';

  // console.log(trackSpeakersAndAttendees, 'attendees');
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

<<<<<<< HEAD
  const sortedTalks = talks.slice().sort((a, b) => {
    const timeA = new Date(a.startTime).getTime();
    const timeB = new Date(b.startTime).getTime();
    return timeA - timeB;
  });
=======
  const sortedTalks =
    talks &&
    talks.slice().sort((a, b) => {
      const timeA = new Date(a.startTime).getTime();
      const timeB = new Date(b.startTime).getTime();
      return timeA - timeB;
    });
>>>>>>> 2127ccc (added track details)

  return (
    <section className={styles.eventStyle}>
      <div className={styles.popup} style={{ backgroundColor: style.backgroundColor }}>
        <div className={styles.header}>
          <h2 className={styles.eventName} style={{ paddingBottom: '0.5rem' }}>
            {title ? title : ''}
          </h2>

          <button className={styles.closeButton} type="button" onClick={(e) => handleCloseClick(e)}>
            Close
          </button>
<<<<<<< HEAD
        </div>

        <div className={styles.scheduleContainer}>
          <section className={styles.eventDetails}>
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
                <strong>Location</strong>: {location}
              </p>
            )}
            {trackAttendees && (
              <p className={styles.people}>
                <strong>Attendees</strong>: {trackAttendees}
              </p>
            )}
            {trackDesc && <p className={styles.description}>{trackDesc}</p>}
          </section>
          <h4 style={{ paddingBottom: '1rem', borderBottom: '0.5px solid var(--color-black)' }}>Schedule</h4>
          <div className={` ${styles.tableHeader}`}>
            <h4 className={`${styles.col1} ${styles.headerTitle}`}>Time</h4>
            <h4 className={`${styles.col2} ${styles.headerTitle}`}>Track Lead</h4>
            <h4 className={`${styles.col4} ${styles.headerTitle}`}>Info</h4>
          </div>

          {sortedTalks &&
            sortedTalks.map((talk, index) => {
              const { desc, firstName, lastName, videoLink, talkDuration, title } = talk;
              const isLastIndex = index === sortedTalks.length - 1;
              return (
                <div className={styles.tableRow} style={{ borderBottom: isLastIndex ? 'none' : '1px solid var(--color-gray-transparent200)' }} key={index}>
                  <h4 className={styles.col1}> {talkDuration ? talkDuration : ''} </h4>

                  <p className={styles.col1}>{firstName ? `${firstName} ${lastName}  ` : ''}</p>
                  <div className={styles.col4}>
                    <div className={styles.flexCol}>
                      <h4>{title ? title : ''}</h4>
                      {desc && <MarkdownToJSX>{desc}</MarkdownToJSX>}
                      {videoLink && (
                        <span>
                          <Link href={videoLink} style="animated">
                            <strong style={{ fontSize: 'var(--font-size-small)' }}>View Video</strong>
                          </Link>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <p className={styles.tooltip}>Scroll down to see full schedule</p>
=======
        </div>

        <div className={styles.scheduleContainer}>
          <section className={styles.eventDetails}>
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
                <strong>Location</strong>: {location}
              </p>
            )}
            {roomName && (
              <p className={styles.location}>
                <strong>Room</strong>: {roomName}
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

            {trackLeads && (
              <p className={styles.people}>
                <strong>Track Leads</strong>: {trackLeads}
              </p>
            )}
            {speakers && (
              <p className={styles.people}>
                <strong>Speakers</strong>: {speakers}
              </p>
            )}
            {/* {attendees && (
              <p className={styles.people}>
                <strong>Likely Attendees</strong>: {attendees}
              </p>
            )} */}
            {discussionPoints && (
              <p className={styles.description} style={{ paddingTop: '1rem' }}>
                <strong>Discussion points: </strong>
                {discussionPoints}
              </p>
            )}

            {/* {trackSpeakersAndAttendees && (
              <p className={styles.description}>
                <strong>Likely Attendees & Speakers: </strong>
                {trackSpeakersAndAttendees}
              </p>
            )} */}

            {trackDesc && <p className={styles.description}>{trackDesc}</p>}
            {/* {ctas && (
            <div className={styles.row} style={{ paddingTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
              {eventItem.ctas.map((ctaItem, index) => {
                return <CallToActionVariant key={index} type={ctaItem.type} cta={ctaItem} />;
              })}
            </div>
          )}  */}
          </section>
          {sortedTalks && <h4 style={{ paddingBottom: '1rem', borderBottom: '0.5px solid var(--color-black)' }}>Schedule</h4>}
          {sortedTalks && (
            <div className={` ${styles.tableHeader}`}>
              <h4 className={`${styles.col1} ${styles.headerTitle}`}>Time</h4>
              <h4 className={`${styles.col2} ${styles.headerTitle}`}>Track Lead</h4>
              <h4 className={`${styles.col4} ${styles.headerTitle}`}>Info</h4>
            </div>
          )}

          {sortedTalks &&
            sortedTalks.map((talk, index) => {
              const { desc, firstName, lastName, videoLink, talkDuration, title } = talk;
              const isLastIndex = index === sortedTalks.length - 1;
              return (
                <div className={styles.tableRow} style={{ borderBottom: isLastIndex ? 'none' : '1px solid var(--color-gray-transparent200)' }} key={index}>
                  <h4 className={styles.col1}> {talkDuration ? talkDuration : ''} </h4>

                  <p className={styles.col1}>{firstName ? `${firstName} ${lastName}  ` : ''}</p>
                  <div className={styles.col4}>
                    <div className={styles.flexCol}>
                      <h4>{title ? title : ''}</h4>
                      {desc && <MarkdownToJSX>{desc}</MarkdownToJSX>}
                      {videoLink && (
                        <span>
                          <Link href={videoLink} linkStyle="animated">
                            <strong style={{ fontSize: 'var(--font-size-small)' }}>View Video</strong>
                          </Link>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

<<<<<<< HEAD
        {sortedTalks && <p className={styles.tooltip}>Scroll down to see full schedule</p>}
>>>>>>> 2127ccc (added track details)
=======
        {/* {sortedTalks && <p className={styles.tooltip}>Scroll down to see full schedule</p>} */}
>>>>>>> 5417c65 (draft airtable connection)
      </div>
    </section>
  );
}
