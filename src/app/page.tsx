import Image from "next/image";
import styles from "./page.module.css";
import heroBannerData from '@/data/home/homeHeroBanner.json';
import HeroBanner from "@/component/heroBanner/HeroBanner";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBanner content={heroBannerData.content} image={heroBannerData.image} />
      
      Learn with us.
    
    </main>
  );
}
