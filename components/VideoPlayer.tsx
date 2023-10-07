'use client';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
// import AspectRatio from './AspectRatio';

export function VideoPlayer({ props, ariaLabel, autoplay, controls, loop, muted, ratio, src }: any) {
  const videoProps = {
    ...props,
    autoPlay: autoplay,
    muted: muted,
  };
  //autoplay={videoProps.autoPlay} muted={videoProps.muted} loop={loop ?? true}
  return (
    <div>
      <MediaPlayer title={ariaLabel} src={src}>
        <MediaProvider />
        <DefaultVideoLayout thumbnails={src} icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
}
// <AspectRatio ratio={ratio} props={{ background: 'var(--color-black)', borderRadius: 'var(--border-radius-small)' }}>
{
  /* <video
        style={{ borderRadius: 'var(--border-radius-small)', overflow: 'hidden' }}
        {...videoProps}
        autoPlay
        muted
        playsInline
        controls
        height="100%"
        width="100%"
        aria-label={ariaLabel}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */
} // </AspectRatio>
