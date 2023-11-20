import styles from '@components/SchedulePopUp.module.scss';

import { MarkdownToJSX } from './Markdown';
import VideoPlayerSVG from './svgs/VideoPlayerSVG';
import Link from './Link';

export function SchedulePopUp({ selectedEvent, isOpen, onClose, style }) {
  const { attendees, firstName, roomName, discussionPoints, location, speakers, trackLeads, time, title, trackDate, trackAttendees, trackDesc } = selectedEvent ?? null;
  const talks = selectedEvent?.records ?? null;

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const sortedTalks =
    talks &&
    talks.slice().sort((a, b) => {
      const timeA = new Date(a.startTime).getTime();
      const timeB = new Date(b.startTime).getTime();
      return timeA - timeB;
    });

  return (
    <section className={styles.eventStyle} id={title}>
      <div className={styles.popup} style={{ backgroundColor: styles.backgroundColor ?? 'var(--color-white)' }}>
        <div className={styles.header}>
          <h2 className={styles.eventName} style={{ paddingBottom: '0.5rem' }}>
            {title ? title : ''}
          </h2>

          <button className={styles.closeButton} type="button" onClick={(e) => handleCloseClick(e)}>
            Close
          </button>
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

        <p className={styles.tooltip}>Scroll down to see full schedule</p>
      </div>

      <div className={styles.scheduleContainer}>
        <div className={styles.innerScrollContainer}>
          <section className={styles.eventDetails}>
            {trackDate && (
              <p className={styles.time}>
                <strong>Date</strong>: {trackDate}
              </p>
            )}

            {sortedTalks && <p className={styles.tooltip}>Scroll down to see full schedule</p>}

            {sortedTalks &&
              sortedTalks.map((talk, index) => {
                const { desc, firstName, lastName, videoLink, talkDuration, title } = talk;
                const isLastIndex = index === sortedTalks.length - 1;
                return (
                  <div className={styles.tableRow} style={{ borderBottom: isLastIndex ? 'none' : '1px solid var(--color-gray-transparent200)' }} key={index}>
                    {/* <h4 className={styles.col1}> {talkDuration ? talkDuration : ''} </h4> */}

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

                    {attendees && (
                      <p className={styles.people}>
                        <strong>Likely Attendees</strong>: {attendees}
                      </p>
                    )}

                    {trackAttendees && (
                      <p className={styles.people}>
                        <strong>Attendees</strong>: {trackAttendees}
                      </p>
                    )}

                    {firstName && (
                      <p className={styles.people}>
                        <strong>Track Leads</strong>: {firstName}
                      </p>
                    )}

                    {speakers && (
                      <p className={styles.people}>
                        <strong>Speakers</strong>: {speakers}
                      </p>
                    )}

                    {discussionPoints && (
                      <p className={styles.description} style={{ paddingTop: '1rem' }}>
                        <strong>Discussion points: </strong>
                        {discussionPoints}
                      </p>
                    )}

                    {trackDesc && <p className={styles.description}>{trackDesc}</p>}
                  </div>
                );
              })}
          </section>

          {sortedTalks && sortedTalks.length > 0 && (
            <>
              {sortedTalks && <h4 style={{ paddingBottom: '1rem' }}>Schedule</h4>}
              {sortedTalks && (
                <div className={` ${styles.tableHeader}`}>
                  <h4 className={`${styles.col1} ${styles.headerTitle}`}>Time</h4>
                  <h4 className={`${styles.col2} ${styles.headerTitle}`}>Speakers</h4>
                  <h4 className={`${styles.col4} ${styles.headerTitle}`}>Info</h4>
                </div>
              )}

              {sortedTalks &&
                sortedTalks.map((talk, index) => {
                  const { desc, firstName, lastName, startTime, videoLink, videoStatus, talkDuration, title } = talk ?? null;
                  const isLastIndex = index === sortedTalks.length - 1;
                  return (
                    <div className={styles.tableRow} style={{ borderBottom: isLastIndex ? 'none' : '1px solid var(--color-gray-transparent200)' }} key={index}>
                      <h4 className={`${styles.col1}`}> {startTime ? startTime : '─'}</h4>

                      <p className={`${styles.col2} ${styles.people}`}>{firstName ? `${firstName}` : ''}</p>
                      <div className={styles.col4}>
                        <div className={styles.flexCol}>
                          {title && <h4>{title ? title : ''}</h4>}
                          {desc && <MarkdownToJSX>{desc}</MarkdownToJSX>}
                          {videoLink && videoStatus === 'Approved' && (
                            <span>
                              <a target="_blank" href={videoLink} style={{ textDecoration: 'none' }}>
                                <button className={styles.videoLinkButton}>
                                  <VideoPlayerSVG className={styles.videoLinkSVG} />
                                  View Video
                                </button>
                              </a>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </div>
        {/* {sortedTalks && <p className={styles.tooltip}>Scroll down to see full schedule</p>} */}
      </div>
    </section>
  );
}
