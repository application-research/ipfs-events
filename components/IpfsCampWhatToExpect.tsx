import styles from '@components/SectionIPFSCampPage.module.scss';

export default function IpfsCampWhatToExpect({ title, description, featuredImage, list, reviews }) {
  return (
    <div style={{ position: 'relative' }}>
      <section id="about">
        <div className={styles.whatToExpectSection}>
          <div className={styles.twoColumns}>
            {featuredImage && (
              <div className={styles.imageWrapper}>
                <img src={featuredImage.src} alt={featuredImage.alt} className={styles.imageStyle} />
              </div>
            )}
            <div>
              <div className={styles.expectationsContainer}>
                {title && (
                  <h1 className={styles.h3} style={{ paddingBottom: '1rem' }}>
                    {title}
                  </h1>
                )}
                {description && <p className={styles.p}>{description}</p>}
                {reviews && (
                  <>
                    {reviews.title && <h1>{reviews.title}</h1>}
                    <ul className={styles.tracksList} style={{ display: 'grid', rowGap: '0.5rem' }}>
                      {reviews.list?.map((item, index) => {
                        return (
                          <li className={styles.p} key={index}>
                            {item.text}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
