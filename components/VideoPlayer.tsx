import { Ratio, Video as VideoType } from '@root/common/types';
import dynamic from 'next/dynamic';

export interface VideoPlayer extends VideoType {
  ratio: Ratio;
}

export function VideoPlayer({ autoplay, controls, loop, muted, ratio, src }: VideoPlayer) {
  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

  return (
    <>
      <ReactPlayer controls={controls} data-testid="video-player" height="100%" loop={loop} muted={muted} playing={autoplay} url={src} width="100%" />
    </>
  );
}
