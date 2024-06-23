import React from 'react'
import Container from '../container/Container'
import videoStyle from './video.module.css';

type videoProps = {
    title?: string,
    src?: string,
    titleTwo?: string,
    description?: string,
    height?: string,
    width?: string,
    autoplay?: boolean,
    controls?: boolean,
    loop?: boolean,
    poster: string,
    preload?: string
}


export default function VideoSection({title, src, titleTwo, description, width, height, autoplay=false,controls=false, loop, poster, preload="none"}: videoProps) {
  return (
    <div className='fullwidth'>
       <Container>
          <h2 className={`${videoStyle.video__featured__h2__title}`}>
            {title}
          </h2>
          <div className='videotagwraper'>
            <video width={width} height={height} autoPlay={autoplay} loop={loop} poster={poster} preload={preload} controls={controls}>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
          </div>
          <h2 className={`${videoStyle.video__featured__h2__title}`}>{titleTwo}</h2>
          <div className='description'>
            {description}
          </div>
       </Container>
    </div>
  )
}
