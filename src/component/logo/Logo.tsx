import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
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
     <Link href="/"><Image 
      src={src || '/default-logo.png'}
      width={width || 110}
      height={height || 'auto'}
      alt={alt || 'logo'}
      /></Link>
    </>
  )
}
export default Logo;