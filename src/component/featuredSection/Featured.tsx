import React from 'react'
import Container from '../container/Container';
import FlexCard from '../flexCard/FlexCard';
import { signPrenterFont } from '@/assets/font';
import featuredStyle from './featured.module.css';

const Featured = ()=> {
  return (
     <div className={`${featuredStyle.featured__wrapper_section} background_gray_color`}>
       <Container>
         <h2 className={`${featuredStyle.featured__h2_title} color_purpule_font ${signPrenterFont.className}`}>Game Cash Withdrawal</h2>
         <FlexCard layer={4} className='gap20'>
             <div className='one'>
               ddfd
             </div>
             <div className='one'>
               ddfd
             </div>
             <div className='one'>
               ddfd
             </div>
             <div className='one'>
               ddfd
             </div>
         </FlexCard>
       </Container>
     </div>
  )
}

export default Featured;