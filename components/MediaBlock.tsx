import { TypeName } from '@root/common/types';
import { VideoPlayer } from './VideoPlayer';
import Image from './Image';

interface MediaBlock {
  media: any;
  className?: string | null;
}

export default function MediaBlock({ media, className }: MediaBlock) {
  switch (media.type) {
    case TypeName.MEDIA_IMAGE:
      return <Image {...media} style={{ borderRadius: 'var(--border-radius-small)' }} ratio={media.ratio} className={className} />;
    case TypeName.MEDIA_IMAGE_ICON:
      return <img {...media} style={{ height: '8rem', width: 'auto' }} />;
    case TypeName.MEDIA_VIDEO:
      return <VideoPlayer {...media.video} controls={true} muted={media.muted} ratio={media.ratio} src={media.src} />;
    default:
      return <></>;
  }
}
