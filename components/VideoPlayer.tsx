'use client';

export function VideoPlayer({ props, ariaLabel, autoplay, controls, loop, muted, ratio, src }: any) {
  const videoProps = {
    ...props,
    autoPlay: autoplay,
    muted: muted,
  };

  return (
    <div>
      <video {...videoProps} autoPlay muted controls height="100%" width="100%" aria-label={ariaLabel}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
