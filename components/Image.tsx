import { Image as ImageType, Ratio } from '@root/common/types';
import NextImage from 'next/image';
import AspectRatio from './AspectRatio';

export interface ImageProps extends ImageType {
  ariaLabel?: string;
  className?: any;
  imageSize?: string;
  priority?: boolean;
  ratio?: Ratio;
}

export default function Image({ altText, ariaLabel, className, src, priority, ratio, imageSize, ...props }: ImageProps) {
  return (
    <>
      {ratio ? (
        <AspectRatio ratio={ratio}>
          <NextImage
            fill
            aria-label={ariaLabel ?? ''}
            className={className}
            {...props}
            alt={altText ?? 'image'}
            src={src}
            priority={priority}
            unoptimized={true}
            style={{ objectFit: imageSize == 'fit' ? 'contain' : 'cover' }}
          />
        </AspectRatio>
      ) : (
        <img className={className} {...props} alt={altText ?? 'image'} src={src} />
      )}
    </>
  );
}
