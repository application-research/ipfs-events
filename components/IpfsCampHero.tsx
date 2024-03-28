import styles from '@components/SectionIPFSCampPage.module.scss';

import { Ratio } from '@root/common/types';
import { VideoPlayer } from './VideoPlayer';
import Link from './Link';

export default function IpfsCampHero({ description, videoRecap, title }) {
  return (
    <section>
      <div className={styles.imageWrapper}>
        <img src="/media/ipfscamp-2024.svg" alt="IPFS Camp 2024" className={styles.imageStyle} />
      </div>
      <header className={styles.header} style={{ paddingBottom: '4rem' }}>
        <div className={styles.headerText}>
          {title && <h2 className={styles.h2}>{title}</h2>}
          {description && <p className={styles.p}>{description}</p>}
          <div className={styles.rainbowBorderWrapper}>
            <div className={styles.innerContent}>
              <div className={styles.diptychHalf}>
                <Link href={'https://lu.ma/ipfscamp24'} target="_blank">
                  <div className={styles.rainbowButton}>
                    <span className={styles.boldText}>GET TICKETS</span>
                  </div>
                </Link>
              </div>
              <div className={styles.diptychHalf}>
                <div className={styles.centerTextContainer}>
                  <span className={styles.boldText}>
                    Brussels, Belgium <br /> <br /> July 11-13, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.topSquiggleContainer}>
          <svg className={styles.topSquiggleStyle} xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 564 457" fill="none">
            <path
              d="M120.782 32.3641C120.782 32.3641 1.58132 63 40.1581 119.934C78.7345 176.868 422.805 132.753 447.428 218.508C459.666 261.127 410.739 275.773 364.08 289.127C316.63 302.709 273.007 352.037 295.73 390.707C340.904 467.586 466.655 329.914 531.557 424.09"
              stroke="url(#paint0_linear_778_2)"
              strokeWidth="63.9167"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear_778_2" x1="554.599" y1="466.891" x2="47.6704" y2="4.44691" gradientUnits="userSpaceOnUse">
                <stop stopColor="#08ADE3" />
                <stop offset="0.5" stopColor="#CDAB37" />
                <stop offset="1" stopColor="#E01C33" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </header>
      {videoRecap && (
        <>
          {videoRecap?.title && (
            <div className={styles.videoTitle}>
              <h2 className={styles.centeredSectionTitle}> {videoRecap?.title}</h2>
            </div>
          )}
          {videoRecap?.videoLink && (
            <div className={styles.mediaContainer}>
              <VideoPlayer src={videoRecap?.videoLink} autoPlay muted ariaLabel="video" ratio={Ratio.ORIGINAL} />
            </div>
          )}
        </>
      )}
    </section>
  );
}
