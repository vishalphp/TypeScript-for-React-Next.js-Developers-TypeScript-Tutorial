import Image from "next/image";
import styles from "./page.module.css";
import heroBannerData from '@/data/home/homeHeroBanner.json';
import HeroBanner from "@/component/heroBanner/HeroBanner";
import Featured from "@/component/featuredSection/Featured";
import featuredData from '@/data/home/featuredSection.json';

export default function Home() {

  return (
    <main className={styles.main}>
      <HeroBanner content={heroBannerData.content} image={heroBannerData.image} />
      <Featured content={featuredData.images} />
      
      Learn with us.
    
    </main>
  );
}
