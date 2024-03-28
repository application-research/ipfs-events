import styles from '@components/SectionIPFSCampPage.module.scss';

import TracksSVG from './svgs/TracksSVG';

export default function IpfsCampTracks({ title, trackList }) {
  return (
    <section id="tracks">
      {title && <div className={styles.trackHeading}>{title}</div>}
      <div className={styles.tracksSVGContainer}>
        <TracksSVG />
      </div>
      <div className={styles.tracksSection}>
        <div className={styles.trackColumns}>
          {trackList?.map((item, index) => {
            return (
              <div className={styles.trackContent} key={index}>
                {item.title && (
                  <h3 className={styles.trackTitle} style={{ paddingBottom: '1rem' }}>
                    {item.title}
                  </h3>
                )}
                {item.description && <p className={styles.trackDescription}>{item.description} </p>}
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className={styles.tracksSection}>
        <div className="">
          <div>Keynotes</div>
          <div>
            A warm and wonderful kickoff to IPFS Camp with keynote speakers, fireside chats, and a sampling of community talks and perspectives on the present and future of IPFS.
          </div>
        </div>
      </div> */}
    </section>
  );
}
