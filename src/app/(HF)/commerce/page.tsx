import ClientSpecificComponent from '@/component/client/ClientSpecificComponent'
import React from 'react'
//import { usePathname } from 'next/navigation'

export default function Commerce() {

    //const router = usePathname();
    //console.log(router);

  return (
    <ClientSpecificComponent><div>commerce</div></ClientSpecificComponent>
  )
}
