import { Image as ImageType, Ratio } from '@root/common/types';
import NextImage from 'next/image';
import AspectRatio from './AspectRatio';

export interface ImageProps extends ImageType {
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  priority?: boolean;
  className?: any;
  ratio?: Ratio;
}

export default function Image({ className, altText, ariaLabel, height, src, width, layout, priority, ratio, ...props }: ImageProps) {
  return (
    <>
      {ratio ? (
        <AspectRatio ratio={ratio}>
          <NextImage
            aria-label={ariaLabel}
            className={className}
            {...props}
            {...(layout !== 'fill' && {
              height,
              width,
            })}
            alt={altText ?? 'image'}
            layout={layout}
            src={src}
            priority={priority}
            unoptimized={true}
          />
        </AspectRatio>
      ) : (
        <NextImage
          className={className}
          {...props}
          {...(layout !== 'fill' && {
            height,
            width,
          })}
          alt={altText ?? 'image'}
          layout={layout}
          src={src}
          priority={priority}
          unoptimized={true}
        />
      )}
    </>
  );
}
