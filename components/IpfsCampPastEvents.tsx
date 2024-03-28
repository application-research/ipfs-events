import styles from '@components/SectionIPFSCampPage.module.scss';

export default function IpfsCampPastEvents({ title, lineOne, statsColumnRight, lineTwo, subtitle }) {
  return (
    <div style={{ display: 'grid', rowGap: '2rem' }}>
      <div className={styles.headerWrapper}>
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        <div className={styles.imageAndTextWrapper}>
          <img src="/media/ipfs-camp-2024.png" alt="IPFS Camp" />
          {subtitle && <div className={styles.impactText}>{subtitle}</div>}
        </div>
      </div>
      <section className={styles.campEvents}>
        <div className={styles.statsColumnLeft}>
          <div className={styles.lineOne}>
            {lineOne?.map((item, index) => {
              return (
                <h2 className={styles.campEventsStatsPartOne} key={index}>
                  <span className={styles.greaterRainbowText}>{item.number} </span> <span className={styles.whiteText}>{item.title}</span>
                </h2>
              );
            })}
          </div>
          <div className={styles.lineTwo}>
            <h2 className={styles.campEventsStatsPartOne}>
              <span className={styles.greaterRainbowText}>540 </span> <span className={styles.whiteText}>Participants</span>
            </h2>
          </div>
        </div>

        <div className={styles.statsColumnRight}>
          {statsColumnRight?.map((item, index) => {
            return (
              <h4 className={styles.campEventsStatsPartTwo} key={index}>
                <span className={styles.lesserRainbowText}>{item.number}</span> <span className={styles.whiteText}>{item.title}</span>
              </h4>
            );
          })}
        </div>
      </section>
    </div>
  );
}
