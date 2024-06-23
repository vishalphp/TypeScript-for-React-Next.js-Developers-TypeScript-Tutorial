import React from 'react'
import Container from '../container/Container';
import { GridCard} from '../flexCard/FlexCard';
import { signPrenterFont } from '@/assets/font';
import featuredStyle from './featured.module.css';
import Image, { StaticImageData } from 'next/image';

type featuredImages = {
  image: string | StaticImageData,
  name: string
}

type featuredProps = {
  children?: React.ReactNode,
  content: featuredImages[],
  title?: string,
  layer?: number
}

const Featured = ({content, title, layer=4}:featuredProps)=> {
  return (
     <div className={`${featuredStyle.featured__wrapper_section} background_gray_color`}>
       <Container>
         <h2 className={`${featuredStyle.featured__h2_title} color_purpule_font ${signPrenterFont.className}`}>{title}</h2>
         <GridCard layer={layer} className='gap20'>
             {
              content.map((item, index) => <div key={index} className='featured_image_col'><Image  src={item.image} alt={item.name} width={300} height={300} /></div>) 
             }
         </GridCard>
       </Container>
     </div>
  )
}

export default Featured;