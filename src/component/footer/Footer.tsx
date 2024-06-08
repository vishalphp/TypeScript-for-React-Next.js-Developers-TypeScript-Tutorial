import React from 'react'
import footerData from '@/data/footer.json';
import footerCopyRightData from '@/data/copyright.json';
import { objectArrayLoop, copySocialArray, copyrightMessageArray } from '@/utils/functions';
import { GridCard, GridCardDangerouslySetInnerHTML } from '../flexCard/FlexCard';
import Container from '../container/Container';
import footerStyle from './footer.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import Link from 'next/link';

const Footer = ()=> {
const result = objectArrayLoop(footerData);
const copySocialResult = copySocialArray(footerCopyRightData);
const copyMesRes = copyrightMessageArray(footerCopyRightData);
console.log(copyMesRes);

const retsocHTML = copySocialResult.map((soc, index)=> <>
<div className='socialwraper' key={index}>
  <div className={footerStyle.soc_name}><Link href={soc.val}>{soc.name ==='facebook'? <FaFacebook fontSize={40} /> : soc.name ==='twitter'? <FaTwitter fontSize={40}/>: soc.name ==='instagram'? <FaInstagram fontSize={40}/>: soc.name ==='gmail' ? <MdOutlineMail fontSize={40}/>:'' }</Link></div>
</div>
</>);

const retmesHTML = copyMesRes.map((mes, index)=> <>
<div className={`${footerStyle.copmeswraper}`} key={index}>
  <div className={footerStyle.copytext_name}>{mes.val}</div>
</div>
</>);

  return <div className={`${footerStyle.footer_full_width_wrapper} background_purpule_color`}>
    <Container><GridCardDangerouslySetInnerHTML dangerouslySetInnerHTML={{__html: result}} layer={4}  className="gap20 footer_wrapper" />
     <div className={footerStyle.copyright_footer}><GridCard layer={4}  className="gap20" >{retsocHTML}</GridCard><GridCard layer={1}  className="gap20" >{retmesHTML}</GridCard></div>
    </Container>
    </div>;
}

export default Footer;