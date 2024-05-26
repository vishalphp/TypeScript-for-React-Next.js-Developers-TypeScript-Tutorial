type menusItems = {
    id: number
    name:string
    url: string
    position: number | null
    child:number | null
    children?:menusItems[]
  }
 
export const headerMenu = (menus: menusItems[], parentId: number | null = null): menusItems[] =>{

       return menus
       .filter(menu => menu.child === parentId)
       .map(parent => {
           const children = headerMenu(menus, parent.id);
           return {...parent, children}
        });


     //const firstLevel = menus.filter(menu => menu.child === null);
     //const nextLevel = menus.filter(menu => menu.child !== null);

     /*const nestedMenu = menus.map(parent => {
        const children = nextLevel.filter(child => child.child === parent.id);
        return { ...parent, children };
      });
    return nestedMenu;*/
  //console.log("MENU");
}