'use client';
import styles from '@components/Schedule.module.scss';

import { getAirtableData, getFormattedAirtableFields } from '@root/resolvers/airtable-import';
import { SchedulePopUp } from './SchedulePopUp';
import { useEffect, useRef, useState } from 'react';
import ScrollTableTooltip from './ScrollTableTooltip';

const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

export default function Schedule({ scheduleData }) {
  if (scheduleData?.airtable?.tableName == null) return null;

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const [data, setData] = useState([]);

  const tableRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLDivElement>(null);

  const tableName = scheduleData?.airtable?.tableName;
  const scheduleBackgroundColor = scheduleData?.style?.backgroundColor ?? 'var(--color-white)';
  const scheduleHoverColor = scheduleData?.style?.hoverColor ?? 'var(--color-gray-transparent)';

  const scheduleStyle = {
    backgroundColor: scheduleBackgroundColor,
    ':hover': {
      backgroundColor: scheduleHoverColor,
    },
  };

  const handleOverlayClick = () => {
    setIsOverlayOpen(false);
  };

  const handleContainerClick = () => {
    setIsOverlayOpen(true);
  };

  const handleEventClick = (e) => {
    setSelectedEvent(e);
    setIsOverlayOpen(true);
  };

  const handlePopupClose = () => {
    setSelectedEvent(null);
    setIsOverlayOpen(false);
  };

  useEffect(() => {
    // Replace tableName with a specific view from airtable
    getAirtableData(tableName, (records) => {
      if (records) {
        setData(records);
      }
    });
  }, []);

  const calendarData: any = getFormattedAirtableFields(data);

  console.log(calendarData, 'calendar data');
  return (
    <div className={styles.container}>
      <section
        className={styles.sectionScrollTooltip}
        style={{
          background: scheduleStyle.backgroundColor ?? 'var(--color-white)',
        }}
      >
        <ScrollTableTooltip backgroundColor={scheduleStyle?.backgroundColor} showArrowLeft={showArrowLeft} showArrowRight={showArrowRight} tableRef={tableRef} />
      </section>

      {selectedEvent && (
        <section style={{ position: 'relative' }}>
          {isOverlayOpen && <div className={styles.overlay} onClick={handleOverlayClick} />}
          <div className={`${styles.absoluteContainer} ${isOverlayOpen ? styles.active : ''}`} onClick={handleContainerClick}>
            <SchedulePopUp style={scheduleStyle} trackTalks={selectedEvent} isOpen={isOverlayOpen} onClose={handlePopupClose} />
          </div>
        </section>
      )}
    </div>
  );
}
