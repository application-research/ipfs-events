import styles from '@components/Speakers.module.scss';

import TwitterSVG from './svgs/TwitterSVG';

export default function Speakers({ speakers, scheduleStyle }) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {speakers.map((speaker, index) => {
          const { firstName, fullName, title, twitterUrl, spkrTitle, headshot } = speaker;

          const headShotSrc = headshot && headshot[0]?.url ? headshot[0]?.url : '/media/placeholder.png';

          return (
            <div key={index}>
              {twitterUrl ? (
                <a href={twitterUrl} className={styles.link} target="_blank">
                  <SpeakerCardWithImage {...speaker} headShotSrc={headShotSrc} scheduleStyle={scheduleStyle} />
                </a>
              ) : (
                <SpeakerCardWithImage {...speaker} headShotSrc={headShotSrc} scheduleStyle={scheduleStyle} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SpeakerCard({ firstName, fullName, spkrTitle, twitterUrl }) {
  return (
    <div className={styles.speakerContainer}>
      <div className={styles.row}>
        <div style={{ display: 'grid', rowGap: '0.5rem' }}>
          {firstName && <p className={styles.firstName}>{firstName}</p>}
          {fullName && <p className={styles.firstName}>{fullName}</p>}

          {spkrTitle && <p className={styles.spkrTitle}>{spkrTitle}</p>}
        </div>
        {twitterUrl && (
          <span className={styles.speakerCardTwitter}>
            <TwitterSVG className={styles.logo} width="1rem" height="2rem" props={{ height: '1rem', width: '1rem' }} />
          </span>
        )}
      </div>
    </div>
  );
}

function SpeakerCardWithImage({ headShotSrc, firstName, fullName, spkrTitle, twitterUrl, scheduleStyle }) {
  return (
    <div className={styles.speakerContainer}>
      {headShotSrc && <img className={styles.headshot} alt={firstName} src={headShotSrc} />}

      <div className={styles.row}>
        <div style={{ display: 'grid', rowGap: '0.5rem' }}>
          {firstName && (
            <p className={styles.firstName} style={{ color: scheduleStyle?.textColor ? scheduleStyle?.textColor : 'var(--color-black)' }}>
              {firstName}
            </p>
          )}
          {fullName && (
            <p className={styles.firstName} style={{ color: scheduleStyle?.textColor ? scheduleStyle?.textColor : 'var(--color-black)' }}>
              {fullName}
            </p>
          )}

          {spkrTitle && (
            <p className={styles.spkrTitle} style={{ color: scheduleStyle?.textColor ? scheduleStyle?.textColor : 'var(--color-black)' }}>
              {spkrTitle}
            </p>
          )}
        </div>
        {twitterUrl && (
          <span className={styles.speakerCardTwitter}>
            <TwitterSVG className={styles.logo} width="1rem" height="2rem" props={{ height: '1rem', width: '1rem' }} />
          </span>
        )}
      </div>
    </div>
  );
}
