import React from 'react'
import Container from '../container/Container';
import FlexCard from '../flexCard/FlexCard';
import Image, { StaticImageData } from 'next/image';
import herobannerStyle from './herobanner.module.css';
import { signPrenterFont, inter400 } from '@/assets/font';
import HeroDownloadButton from './HeroDownloadButton';
import downloadButtonData from '@/data/home/downloadApk/index.json';

type heroBannerProps ={
    mainheading?: string,
    subheading?: string
}

type heroProps = {
    children?: React.ReactNode;
    content: heroBannerProps[]
    image: string | StaticImageData
}

const HeroBanner = ({children, content, image}:heroProps) => {
    
  return (
    <>
    <div className={`${herobannerStyle.herobanner_wrapper}`}>
      <Container>
        <FlexCard layer={2}>
            <div className='content__hero__wrapper flex_sub_layer_2'>
                {content.map((heroContent, index) => (
                   <div key={index}><div className='hero__main__heading'><h1 className={`${herobannerStyle.hero__banner__h1} ${signPrenterFont.className} color_purpule_font`}>{heroContent.mainheading}</h1></div><div className={`${inter400.className} color_black_font ${herobannerStyle.hero__main__subheading}`}>{heroContent.subheading}</div></div>
                  )
                )}
               <HeroDownloadButton downloadButtonData={downloadButtonData.download} />
            </div>
            <div className={`${herobannerStyle.image__hero__wrapper} flex_sub_layer_2`}>
               <Image src={image} alt="hero banner" width={1280} height={787} />
            </div>
        </FlexCard>
      </Container>  
      </div>
    </>
  )
}

export default HeroBanner;