import styles from '@components/EventsRow.module.scss';

import Link from './Link';
import { classNames } from '@root/common/utilities';

export default function EventsRow({ events }) {
  return (
    <section className={styles.grid4Cols} style={{ paddingBottom: '1rem' }}>
      {events &&
        events.map((event, index) => {
          return (
            <div key={index}>
              <Link href={event?.link ?? ''} linkStyle="text" target={event?.target ?? '_blank'}>
                <img className={classNames(styles.col50, styles.image)} src={event.image} />
                <div className={styles.containerOverImage}>
                  <p style={{ fontWeight: 'bold' }}>{event.name}</p>

                  <p>
                    {event.location} | {event.date}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
    </section>
  );
}
