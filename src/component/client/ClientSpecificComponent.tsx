'use client'
import { notFound, usePathname } from 'next/navigation'
import React from 'react'


type childrenProps = {
    children: React.ReactNode
}

export default function ClientSpecificComponent({children}:childrenProps) {
 const pathname = usePathname(); 
 
 if(pathname === '/commerce'){
    notFound();
 }
 
    return children;
}
