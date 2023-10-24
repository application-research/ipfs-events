'use client';
import styles from '@components/VideoPlayer.module.scss';

import React from 'react';
import ReactPlayer from 'react-player';

export function VideoPlayer({ autoplay = true, controls = true, loop = true, muted = true, ratio = '16:9', src, ariaLabel, ...props }) {
  return (
    <div className={styles.playerWrapper} {...props} aria-label={ariaLabel} style={{ minHeight: '40vh' }}>
      <ReactPlayer width="100%" height="100%" className={styles.reactPlayer} url={src} playing={autoplay} controls={controls} loop={loop} muted={muted} />
    </div>
  );
}
