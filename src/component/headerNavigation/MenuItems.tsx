'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import headerStyle from './headerNavigation.module.css'

type menusItems = {
  id: number;
  name: string;
  url: string;
  position: number | null;
  child: number | null;
  children?: menusItems[];
};

type MenuItemsProps = {
  item: any & menusItems;
};

const MenuItems: React.FC<MenuItemsProps> = ({ item }) => {

  const [openMenu, setOpenMenu] = useState(false);
  const [modalMenu, setModalMenu] = useState("modal__close");

const openchild = () =>{
  setOpenMenu(true);
  setModalMenu("modal__open");
}

const closeChild = ()=>{
  setOpenMenu(false);
  setModalMenu("modal__close");
}

  return (
    <li className={`itemlis ${item.child ===null && item.children.length > 0 ? headerStyle.posrelative :''} ${item.child ===null && item.children.length > 0 ? modalMenu :''}`}>
      <Link onMouseEnter={openchild} href={item.url} className={`${headerStyle.anchorItems} ${item.children.length > 0 ? 'hasChildren' :''}`}>{item.name} {item.child ===null && item.children.length > 0 ? <MdKeyboardArrowDown /> :''}</Link>
      {item.children && item.children.length > 0 && (
        <ul onMouseLeave={closeChild} className={`background-yellow-color item-${item.child} ${item.child !== 1 ? headerStyle.posabsolute :'' } ${openMenu && item.child !== 1 && headerStyle.openclass__menu}`}>
          {item.children.map((child: { id: React.Key | null | undefined; }) => (
            <MenuItems key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItems;
