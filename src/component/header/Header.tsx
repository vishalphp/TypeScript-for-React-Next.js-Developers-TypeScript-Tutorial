import React from 'react'
import headerStyle from './Header.module.css';
import FlexCard from '../flexCard/FlexCard';
import Logo from '../logo/Logo';
import LogoImage from '../../images/logo.webp';
import Navigation from '../headerNavigation/Navigation';
import navigationData from '@/data/headerNavigation.json';
import Container from '../container/Container';

type headerProps = {
    children?: React.ReactNode
}

const Header = ({}: headerProps) =>{
  

  return (
    <>
     <div className={`${headerStyle.headerwrapper} background-yellow-color p-20`}>
     <Container>
      <FlexCard layer={3}>
        <div className='logo flex_sub_layer_1'>
            <Logo src={LogoImage} width={140} height={100} alt="zup logo"  />
        </div>
        <div className={`${headerStyle.navigation} flex_sub_layer_2`}>
            <Navigation menus={navigationData.menus} />
        </div>  
      </FlexCard>
    </Container>
    </div>
    </>
  )
}

export default Header;
