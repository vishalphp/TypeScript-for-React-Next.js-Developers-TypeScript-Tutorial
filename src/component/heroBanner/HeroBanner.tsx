import React from 'react'
import Container from '../container/Container';
import FlexCard from '../flexCard/FlexCard';
import Image, { StaticImageData } from 'next/image';

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
    console.log(image);
  return (
    <>
      <Container>
        <FlexCard layer={2}>
            <div className='content__hero__wrapper flex_sub_layer_2'>
                {content.map((heroContent, index) => (
                   <div key={index}><div className='hero__main__heading'>{heroContent.mainheading}</div><div className='hero__main__subheading'>{heroContent.subheading}</div></div>
                  )
                )}
             
            </div>
            <div className='image__hero__wrapper flex_sub_layer_2'>
               <Image src={image} alt="hero banner" width={1280} height={787} />
            </div>
        </FlexCard>
      </Container>  
    </>
  )
}

export default HeroBanner;