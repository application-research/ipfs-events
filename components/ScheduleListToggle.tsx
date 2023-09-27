'use client';
import styles from '@components/ScheduleListToggle.module.scss';

import { useState } from 'react';
import ScheduleListByTrack from './ScheduleListByTrack';
import ScheduleListByTalks from './ScheduleListByTalks';

export default function ScheduleListToggleByTimeOrTrack(scheduleData) {
  const [viewByTrack, setViewByTrack] = useState(true);

  return (
    <div>
      <div className={styles.toggleRow}>
        <p className={styles.toggleName}> View by</p>
        <select className={styles.toggle} value={viewByTrack ? 'track' : 'time'} onChange={(e) => setViewByTrack(e.target.value === 'track')}>
          <option value="track">Track</option>
          <option value="time">Time</option>
        </select>
      </div>

      {viewByTrack ? <ScheduleListByTrack {...scheduleData} /> : <ScheduleListByTalks {...scheduleData} />}
    </div>
  );
}
