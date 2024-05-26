import Image, { StaticImageData } from 'next/image'
import React from 'react'

type childrenProps = {
    children?: React.ReactNode,
    src?: string | StaticImageData,
    width?: number,
    height?: string | `${number}`,
    alt?: string 
}

const Logo = ({children, src, width, height, alt}: childrenProps) => {
  return (
    <>
     <Image 
      src={src || '/default-logo.png'}
      width={width || 110}
      height={height || 'auto'}
      alt={alt || 'logo'}
      />
    </>
  )
}
export default Logo;