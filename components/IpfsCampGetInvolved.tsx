import styles from '@components/SectionIPFSCampPage.module.scss';

import Link from './Link';

export default function IpfsCampGetInvolved({ title, list }) {
  return (
    <section>
      {title && <h2 className={styles.centeredSectionTitle}>{title}</h2>}
      <div className={styles.getInvolvedColumns}>
        {list?.map((item, index) => {
          return (
            <div key={index} className={styles.involvementColumn}>
              <div className={styles.rainbowBorderWrapper}>
                <Link href={item.link} target="_blank">
                  <div className={styles.involvementContent}>{item?.title && <h4 className={styles.involvementText}>{item.title}</h4>}</div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
