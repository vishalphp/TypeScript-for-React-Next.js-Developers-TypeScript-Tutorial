import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface NextImageProps {
  src: string | StaticImageData;
  width: number;
  height: number;
  alt: string;
}

const Logo = ({src, width, height, alt}: NextImageProps) => {
  return (
    <>
     <Link href="/"><Image 
      src={src}
      width={width}
      height={height}
      alt={alt}
      /></Link> 
    </>
  )
}
export default Logo;