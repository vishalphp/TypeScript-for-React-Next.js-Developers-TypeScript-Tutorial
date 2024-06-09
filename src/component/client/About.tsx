'use client';
import React, { useEffect, useState } from 'react'
import Featured from "@/component/featuredSection/Featured";
import featuredData from '@/data/home/featuredSection.json';
import { notFound } from 'next/navigation';

export default function About() {
    const [data, setData] =useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
     const timer = setTimeout(() => {
        setData(data + 1);
        setLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    },[data]);
    if (loading) {
        return <div className='loading'>Client Loading ...</div>;  // Return null to show the loading.tsx component
    }

    if(data > 10){
        notFound();
    }

  return (
    <>
    <div className='clientcomponentwrap'>About Client - {data}</div>
    <Featured content={featuredData.images} />
    </>
  )
}
