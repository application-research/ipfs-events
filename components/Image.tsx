import { Image as ImageType } from '@root/common/types';
import NextImage from 'next/image';

export interface ImageProps {
  image: ImageType | null;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  priority?: boolean;
  className?: any;
}

export default function Image({ className, image, layout, priority, ...props }: ImageProps) {
  if (!image || !image.src) return <></>;

  const { altText, height, src, width } = image;

  return (
    <NextImage
      className={className}
      {...props}
      {...(layout !== 'fill' && {
        height,
        width,
      })}
      alt={altText ?? ''}
      layout={layout}
      src={src}
      priority={priority}
      unoptimized={true}
    />
  );
}
