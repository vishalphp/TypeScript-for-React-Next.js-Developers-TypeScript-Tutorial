import React from 'react'
import footerData from '@/data/footer.json';
import footerCopyRightData from '@/data/copyright.json';
import { objectArrayLoop, copyRightArrayHtml } from '@/utils/functions';
import { GridCardDangerouslySetInnerHTML } from '../flexCard/FlexCard';
import Container from '../container/Container';
import footerStyle from './footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer =()=> {
const result = objectArrayLoop(footerData);
const copyRightResult = copyRightArrayHtml(footerCopyRightData);

  return <div className='footer_full_width_wrapper background_purpule_color'><Container><GridCardDangerouslySetInnerHTML dangerouslySetInnerHTML={{__html: result}} layer={4}  className="gap20 footer_wrapper" /><GridCardDangerouslySetInnerHTML dangerouslySetInnerHTML={{__html: copyRightResult}} layer={4}  className="gap20" /></Container></div>;
}

export default Footer;