import styles from '@components/Speakers.module.scss';

import TwitterSVG from './svgs/TwitterSVG';
<<<<<<< HEAD

export default function Speakers({ speakers }) {
=======
import Link from './Link';

export default async function Speakers({ speakers }) {
  console.log(speakers, 'speakers');
>>>>>>> d59c4cc (added speaker section)
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {speakers.map((speaker, index) => {
<<<<<<< HEAD
          const { firstName, title, twitterUrl, spkrTitle, headshot } = speaker;

          const headShotSrc = headshot && headshot[0]?.url ? headshot[0]?.url : '/media/placeholder.png';
=======
          const { firstName, twitterUrl, spkrTitle, headshot } = speaker;

          const headShotSrc = headshot[0]?.url ?? null;
>>>>>>> d59c4cc (added speaker section)

          return (
            <div key={index}>
              {twitterUrl ? (
                <a href={twitterUrl} className={styles.link} target="_blank">
                  <SpeakerCard {...speaker} headShotSrc={headShotSrc} />
                </a>
              ) : (
                <SpeakerCard {...speaker} headShotSrc={headShotSrc} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

<<<<<<< HEAD
function SpeakerCard({ headShotSrc, firstName, spkrTitle, title, twitterUrl }) {
  return (
    <div className={styles.speakerContainer}>
      {headShotSrc && <img className={styles.headshot} alt={firstName} src={headShotSrc} />}

      <div className={styles.col}>
        <div style={{ display: 'grid', rowGap: '0.5rem' }}>
          {firstName && <p className={styles.firstName}>{firstName}</p>}
          {spkrTitle && <p className={styles.spkrTitle}>{spkrTitle}</p>}
        </div>
        {twitterUrl && <TwitterSVG className={styles.logo} width="1rem" height="2rem" props={{ height: '1rem', width: '1rem' }} />}
        {title && <p className={styles.trackTitle}>{title}</p>}
=======
function SpeakerCard({ headShotSrc, firstName, spkrTitle, twitterUrl }) {
  return (
    <div className={styles.speakerContainer}>
      {headShotSrc && <img alt={firstName} className={styles.headshot} src={headShotSrc} />}

      <div className={styles.col}>
        {firstName && <p className={styles.firstName}>{firstName}</p>}

        {spkrTitle && <p className={styles.spkrTitle}>{spkrTitle}</p>}
        {twitterUrl && <TwitterSVG className={styles.logo} width={'1rem'} height={'2rem'} props={{ height: '1rem', width: '1rem' }} />}
>>>>>>> d59c4cc (added speaker section)
      </div>
    </div>
  );
}
