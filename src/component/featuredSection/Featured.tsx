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
  content: featuredImages[]
}

const Featured = ({children, content}:featuredProps)=> {
  console.log(content);
  return (
     <div className={`${featuredStyle.featured__wrapper_section} background_gray_color`}>
       <Container>
         <h2 className={`${featuredStyle.featured__h2_title} color_purpule_font ${signPrenterFont.className}`}>Game Cash Withdrawal</h2>
         <GridCard layer={4} className='gap20'>
          
             {
              content.map((item, index) => <Image key={index} src={item.image} alt={item.name} width={300} height={300} />) 
             }
         </GridCard>
       </Container>
     </div>
  )
}

export default Featured;