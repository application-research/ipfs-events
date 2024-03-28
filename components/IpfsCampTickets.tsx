import styles from '@components/SectionIPFSCampPage.module.scss';

import TicketCard from './TicketCard';

export default function IpfsCampTickets({ title, description, ticketList }) {
  return (
    <div className={styles.ticketSection}>
      {title && <div className={styles.ticketTitle}>{title}</div>}
      {description && <p dangerouslySetInnerHTML={{ __html: description }} className={styles.description} />}

      <div className={styles.ticketCardContainer}>
        {ticketList?.map((item, index) => {
          return <TicketCard key={index} name={item.name} price={item.price} description={item.description} ctaLink={item.link} />;
        })}
      </div>
    </div>
  );
}
