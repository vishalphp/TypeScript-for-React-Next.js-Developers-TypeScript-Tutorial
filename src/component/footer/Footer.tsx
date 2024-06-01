import React from 'react'
import footerData from '@/data/footer.json';
import { objectArrayLoop } from '@/utils/functions';


const Footer =()=> {
const result = objectArrayLoop(footerData);

  return <div dangerouslySetInnerHTML={{__html: result}} />;
}

export default Footer;