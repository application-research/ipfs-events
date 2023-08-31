import { Image as ImageType, Ratio } from '@root/common/types';
import NextImage from 'next/image';
import AspectRatio from './AspectRatio';

export interface ImageProps extends ImageType {
  className?: any;
  id?: string;
  priority?: boolean;
  ratio?: Ratio;
}

export default function Image({ altText, ariaLabel, className, id, src, priority, ratio, ...props }: ImageProps) {
  return (
    <>
      {ratio ? (
        <AspectRatio ratio={ratio}>
          <NextImage id={id} fill aria-label={ariaLabel ?? ''} className={className} {...props} alt={altText ?? 'image'} src={src} priority={priority} unoptimized={true} />
        </AspectRatio>
      ) : (
        <img id={id} className={className} {...props} alt={altText ?? 'image'} src={src} />
      )}
    </>
  );
}
