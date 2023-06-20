import styles from '@components/SchedulePopUp.module.scss';
import { Button, CallToActionVariant } from './CallToActionVariant';
import { CallToActionVariantEnum } from '@root/common/types';
import { MarkdownToJSX } from './Markdown';

export function SchedulePopUp({ eventItem, eventData, setSelectedEvent }) {
  const closeCTA = {
    type: CallToActionVariantEnum.BLACK,
    buttonColor: 'white',
    textColor: 'white',
    text: 'Close',
  };
  return (
    <section className={styles.eventStyle}>
      <div className={styles.popup}>
        <div style={{ display: 'grid', gap: '0.5rem', paddingBottom: '1rem' }}>
          {eventItem?.name && (
            <h2 className={styles.eventName} style={{ paddingBottom: '0.5rem' }}>
              {eventItem.name}
            </h2>
          )}
          {eventItem?.time && (
            <p className={styles.time}>
              <strong>Time</strong>: {eventItem.time}
            </p>
          )}
          {eventItem?.location && (
            <p className={styles.location}>
              <strong>Venue</strong>: {eventItem.location}
            </p>
          )}
          {eventItem?.trackLead && (
            <p className={styles.people}>
              <strong>Track Lead</strong>: {eventItem.trackLead}
            </p>
          )}
          {eventItem?.people && (
            <p className={styles.people}>
              <strong>Attendees</strong>: {eventItem.people}
            </p>
          )}
          {eventItem?.description && <p className={styles.description}>{eventItem.description}</p>}

          {eventItem?.ctas && (
            <div className={styles.row} style={{ paddingTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
              {eventItem.ctas.map((ctaItem, index) => {
                return <CallToActionVariant key={index} type={ctaItem.type} cta={ctaItem} />;
              })}
            </div>
          )}

          {eventItem.schedule && (
            <section>
              <h4 style={{ paddingBottom: '1rem', paddingTop: '1rem' }}>Schedule</h4>

              <div className={styles.tableHeader}>
                <h4 className={`${styles.col25} ${styles.headerTitle}`}>Time</h4>
                <h4 className={`${styles.col25} ${styles.headerTitle}`}>Speaker</h4>
                <h4 className={`${styles.col50} ${styles.headerTitle}`}>Info</h4>
              </div>
              <div className={styles.scheduleContainer}>
                <div className={styles.tableRow}>
                  <h4 className={styles.col25}>09:00 - 09:10</h4>
                  <h4 className={styles.col25}>Dietrich Ayala</h4>
                  <div className={styles.col50}>
                    <MarkdownToJSX>Welcome and Introduction - View video</MarkdownToJSX>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <h4 className={styles.col25}>09:10 - 09:15 </h4>
                  <h4 className={styles.col25}>Yiannis Psaras </h4>
                  <div className={styles.col50}>
                    <MarkdownToJSX>
                      Measuring IPFS - We will introduce the importance of data-driven protocol design and optimisation and the measurement campaigns that the ProbeLab team has
                      carried out in the past couple of quarters. We will selectively dive into a couple of them, present representative results and provide pointers for the rest.
                      We will also talk about KPIs for the IPFS network and discuss our future plans. View video
                    </MarkdownToJSX>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <h4 className={styles.col25}>09:15 - 09:20 </h4>
                  <h4 className={styles.col25}>Will Scott </h4>
                  <div className={styles.col50}>
                    <MarkdownToJSX>Decentralizing IPFS Gateways with Project Rhea View video</MarkdownToJSX>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <h4 className={styles.col25}>09:20 - 09:25</h4>
                  <h4 className={styles.col25}>Robin Berjon </h4>
                  <div className={styles.col50}>
                    <MarkdownToJSX>IPFS Principles A journey to the heart of the IPFS protocol, principles, and specifications. View video</MarkdownToJSX>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        <Button target="_parent" text="Close" buttonColor={'var(--color-black200)'} textColor={'var(--color-white)'} />
      </div>
    </section>
  );
}
