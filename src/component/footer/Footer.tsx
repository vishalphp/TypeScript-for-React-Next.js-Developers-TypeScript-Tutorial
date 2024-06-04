import React from 'react'
import footerData from '@/data/footer.json';
import { objectArrayLoop } from '@/utils/functions';
import { GridCard, GridCardDangerouslySetInnerHTML } from '../flexCard/FlexCard';
import Container from '../container/Container';
import footerStyle from './footer.module.css';

const Footer =()=> {
const result = objectArrayLoop(footerData);

  return <div className='footer_full_width_wrapper background_purpule_color'><Container><GridCardDangerouslySetInnerHTML dangerouslySetInnerHTML={{__html: result}} layer={4}  className="gap20 footer_wrapper" /></Container></div>;
}

export default Footer;