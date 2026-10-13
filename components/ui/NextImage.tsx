import Image, { type ImageProps } from "next/image";

export type NextImageProps = ImageProps;

export function NextImage({ alt, ...props }: NextImageProps) {
  return <Image {...props} alt={alt} />;
}

export default NextImage;
