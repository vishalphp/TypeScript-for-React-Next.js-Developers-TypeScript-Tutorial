import React from 'react';
import Image, { StaticImageData } from 'next/image';

type imageProps = {
    src: string | StaticImageData,
    width?: string | number,
    height?: string | number,
    alt?: string
  }


export default function ImageComp({src, width, height, alt}: imageProps) {


  return (
    <>
      <Image src={src} width={width} height={height} alt={alt} />
    </>
  )
}
