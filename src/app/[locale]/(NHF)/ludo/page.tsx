import styles from "./page.module.css";
import heroBannerData from '@/data/home/homeHeroBanner.json';
import HeroBanner from "@/component/heroBanner/HeroBanner";
import Featured from "@/component/featuredSection/Featured";
import featuredData from '@/data/home/featuredSection.json';

const Ludo =()=> {

  return (
    <main className={styles.main}>
      <HeroBanner content={heroBannerData.content} image={heroBannerData.image} />
      <Featured content={featuredData.images} />
    </main>
  );
}
export default Ludo;