'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { StaticImageData } from 'next/image';
import ImageComp from '../image/ImageComp'
import './embla.css'

type sliderProps = {
  id: number,
    name: string,
    city: string,
    message: string,
    image: string | StaticImageData
}

type PropType = {
  slides: sliderProps[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
           {slides.map((testM, index) => (
                <div className='embla__slide slider__loop__wrapper' key={index}>
                    <div className='image__name__city'>
                    <div className='testimonial__image'>
                        <ImageComp src={testM.image} width={100} height={100} alt={testM.name} />
                    </div>
                     <div className='name__city'> 
                          <div className='testimonial__name color_purpule_font'>{testM.name}</div>
                          <div className='testimonial__city '>{testM.city}</div>
                    </div>
                    </div>
                    <div className='testimonial__content'>
                    <div className='testimonial__message'>{testM.message}</div>
                    </div>
                </div>
                ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
