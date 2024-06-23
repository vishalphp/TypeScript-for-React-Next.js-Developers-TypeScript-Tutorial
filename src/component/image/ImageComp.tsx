/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';

// Define the props interface
interface NextImageProps {
  src: string | any;
  width: number | string;
  height: number | string;
  alt?: string;
}

export default function ImageComp({src, width, height, alt}: NextImageProps) {

  // Check if src is a string (URL) or StaticImageData
  const isStaticImage = typeof src !== 'string';

  // If it's a StaticImageData, use it directly
  if (isStaticImage) {
    return <Image src={src} alt={alt || 'Image'} />;
  }

  // If it's a string (URL), ensure width and height are in number format
  const parsedWidth = typeof width === 'string' ? 1000 : width; // Replace 1000 with your default width
  const parsedHeight = typeof height === 'string' ? 1000 : height; // Replace 1000 with your default height

  return <Image src={src as string} width={parsedWidth} height={parsedHeight} alt={alt || 'Image'} />;

};
