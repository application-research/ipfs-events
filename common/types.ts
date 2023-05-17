export enum MediaType {
  IMAGE_GIF = 'image/gif',
  IMAGE_JPG = 'image/jpeg',
  IMAGE_PNG = 'image/png',
  IMAGE_WEBP = 'image/webp',
  VIDEO_MP4 = 'video/mp4',
  VIDEO_QUICKTIME = 'video/quicktime',
}

export interface Image {
  altText: string;
  caption?: string | null;
  height: number;
  mime: MediaType;
  src: string;
  width: number;
}
