'use client';

import AspectRatio from './AspectRatio';

export function VideoPlayer({ props, ariaLabel, autoplay, controls, loop, muted, ratio, src }: any) {
  const videoProps = {
    ...props,
    autoPlay: autoplay,
    muted: muted,
  };

  return (
    <AspectRatio ratio={ratio} props={{ background: 'var(--color-black)', borderRadius: 'var(--border-radius-small)' }}>
      <video style={{ borderRadius: 'var(--border-radius-small)', overflow: 'hidden' }} {...videoProps} playsInline controls height="100%" width="100%" aria-label={ariaLabel}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </AspectRatio>
  );
}
