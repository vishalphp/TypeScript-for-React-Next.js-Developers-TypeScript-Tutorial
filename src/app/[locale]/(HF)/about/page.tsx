import React from 'react'
import heroBannerData from '@/data/home/homeHeroBanner.json';
import HeroBanner from "@/component/heroBanner/HeroBanner";
import AboutComp from '@/component/client/About';

export default function About() {
   
    return (
        <main>
          <HeroBanner content={heroBannerData.content} image={heroBannerData.image} />
          <AboutComp />
        </main>
      );
}
