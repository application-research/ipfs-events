import { TypeName } from '@root/common/types';
import { VideoPlayer } from './VideoPlayer';
import Image from './Image';

export default function MediaBlock({ media }) {
  switch (media.type) {
    case TypeName.MEDIA_IMAGE:
      return <Image {...media} ratio={media.ratio} style={{ borderRadius: 'var(--border-radius-small)', maxHeight: '40rem', width: '100%', objectFit: 'cover' }} />;
    case TypeName.MEDIA_VIDEO:
      return <VideoPlayer {...media.video} controls={true} muted={media.muted} ratio={media.ratio} src={media.src} />;
    default:
      return <></>;
  }
}
