import React from 'react';
import { headerMenu } from './headerFunction';
import MenuItems from './MenuItems';
import headerNavStyle from './headerNavigation.module.css'

type menusItems = {
  id: number
  name:string
  url: string
  position: number | null
  child:number | null,
  children?: menusItems[]
}

type menusProps = {
  children?: React.ReactNode,
  menus: menusItems[]
}

const Navigation: React.FC<menusProps> = ({children, menus}) => {
//const Navigation = ({children, menus}: menusProps) => {

  //const menuArrayNull: (string | number | null)[] = [];
  const menusRoot = headerMenu(menus);

return (
    <>
      <ul className={headerNavStyle.wrapperNavigation}>
        {menusRoot.map(parent=> <MenuItems key={parent.id} item={parent} /> )}
      </ul>
    </>
  )
}

export default Navigation;