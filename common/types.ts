export enum BlockTypeEnum {
  COLLAPSABLE = 'collapsable',
  HERO = 'hero',
  MEDIA = 'media',
  TICKET_CARD = 'ticket-card',
}

export enum BlockDirectionEnum {
  COLUMN = 'column',
  ROW = 'row',
}

export interface Image {
  altText: string;
  ariaLabel?: string | null;
  caption?: string | null;
  height: number;
  mime: MediaType;
  src: string;
  width: number;
}

export enum MediaType {
  IMAGE_GIF = 'image/gif',
  IMAGE_JPG = 'image/jpeg',
  IMAGE_PNG = 'image/png',
  IMAGE_WEBP = 'image/webp',
  VIDEO_MP4 = 'video/mp4',
  VIDEO_QUICKTIME = 'video/quicktime',
}

export enum Ratio {
  CAROUSEL = 'carousel',
  ELEVEN_BY_FOUR = '11 / 4',
  FOUR_BY_THREE = '4 / 3',
  ONE_BY_ONE = '1 / 1',
  ORIGINAL = 'original',
  SIXTEEN_BY_NINE = '16 / 9',
  THREE_BY_FOUR = '3 / 4',
  TWENTY_ONE_BY_NINE = '21 / 9',
}

export enum TypeName {
  MEDIA_IMAGE = 'media-image',
  MEDIA_ROW = 'media-row',
  MEDIA_VIDEO = 'media-video',
}

export interface Video {
  autoplay?: boolean;
  controls?: boolean;
  height?: number;
  loop?: boolean;
  mime?: MediaType.VIDEO_MP4 | MediaType.VIDEO_QUICKTIME;
  muted?: boolean;
  poster?: string;
  src: string;
  width?: number;
}

export enum CallToActionVariantEnum {
  BLACK = 'dark-blue',
  LINK = 'link',
  LINK_ICON = 'link-icon',
  TEXT = 'text',
  WHITE = 'white',
  BORDER = 'border',
  NO_BORDER = 'no-border',
}
