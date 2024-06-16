import React from 'react'
import { StaticImageData } from 'next/image';
import Container from '../container/Container';
import testmonialStyle from './testmonial.module.css';
import { signPrenterFont } from '@/assets/font';
import ImageComp from '../image/ImageComp';
import EmblaCarousel from '@/component/slider/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

type testM ={
    id: number,
    name: string,
    city: string,
    message: string,
    image: string | StaticImageData
}
type testimonialProps = {
    title: string,
    subtitle: string,
    review_image: string,
    review_width: string,
    review_height: string,
    review_alt: string,
    testimonials: testM[]
}
type contentProps ={
    content: testimonialProps
}

export default function Testmonial({content}: contentProps) { 

const OPTIONS: EmblaOptionsType = { loop: true }
//const SLIDE_COUNT = 5


  return (
    <div className={`${testmonialStyle.fullsection} `}>
        <Container>
            <div className={`${testmonialStyle.testmonial__heading} ${signPrenterFont.className} color_purpule_font`}>{content.title}</div>
            <div className={`${testmonialStyle.testmonial__subheading} color_black_font`}>{content.subtitle}</div>
            <div className={`${testmonialStyle.testmonial__review__image}`}>
                <ImageComp src={content.review_image} width={content.review_width} height={content.review_height} alt={content.review_alt} />
            </div> 
            {/*https://www.embla-carousel.com/*/}
            <EmblaCarousel slides={content.testimonials} options={OPTIONS} />
        </Container>
    </div>
  )
}
