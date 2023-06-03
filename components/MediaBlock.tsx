import { TypeName } from '@root/common/types';
import { VideoPlayer } from './VideoPlayer';
import GutterContainer from './GutterContainer';
import Image from './Image';

export default function MediaBlock({ media }) {
  switch (media.type) {
    case TypeName.MEDIA_IMAGE:
      return (
        <GutterContainer>
          <Image {...media} ratio={media.ratio} layout="fill" style={{ borderRadius: 'var(--border-radius-small)' }} />
        </GutterContainer>
      );
    case TypeName.MEDIA_VIDEO:
      return (
        <GutterContainer>
          <VideoPlayer {...media.video} controls={true} muted={media.muted} ratio={media.ratio} src={media.src} />
        </GutterContainer>
      );
    default:
      return <></>;
  }
}
