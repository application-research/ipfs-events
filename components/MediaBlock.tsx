import { TypeName } from '@root/common/types';
import { VideoPlayer } from './VideoPlayer';

export default function MediaBlock(media) {
  switch (media.__typename) {
    case TypeName.MEDIA_IMAGE:
      return <>image</>;
    case TypeName.MEDIA_VIDEO:
      return (
        <>
          video
          <VideoPlayer {...media.video} controls={true} muted={media.video.muted} ratio={media.ratio} src={media.video.src} />
        </>
      );
    default:
      return <></>;
  }
}
