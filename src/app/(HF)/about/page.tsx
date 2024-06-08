'use client';
import React, { useEffect, useState } from 'react'
import heroBannerData from '@/data/home/homeHeroBanner.json';
import HeroBanner from "@/component/heroBanner/HeroBanner";
import Featured from "@/component/featuredSection/Featured";
import featuredData from '@/data/home/featuredSection.json';

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
        return null;  // Return null to show the loading.tsx component
    }
    return (
        <main>
          <HeroBanner content={heroBannerData.content} image={heroBannerData.image} />
          <Featured content={featuredData.images} />
        </main>
      );
}
