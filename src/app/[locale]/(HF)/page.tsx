import styles from "./page.module.css";
import heroBannerData from '@/data/home/homeHeroBanner.json';
import HeroBanner from "@/component/heroBanner/HeroBanner";
import Featured from "@/component/featuredSection/Featured";
import featuredData from '@/data/home/featuredSection.json';
import Testmonial from "@/component/testmonial/Testmonial";
import testmonialData from '@/data/home/testimonial.json';
import featuredDataTwo from '@/data/home/featuredSectionTwo.json';
import VideoSection from "@/component/videoSection/VideoSection";
import videoData from '@/data/home/videoSection.json';
import API from "@/component/api/API";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('IndexPage');
  return (
    <main className={styles.main}>
      <h1>{t('title')}</h1>
      <HeroBanner content={heroBannerData.content} image={heroBannerData.image} />
      <Featured content={featuredData.images} title={featuredData.title} layer={4} />
      <Testmonial content={testmonialData} />
      <Featured content={featuredDataTwo.images} title={featuredDataTwo.title} layer={6} />
      <VideoSection title={videoData.title} src={videoData.src} titleTwo={videoData.titleTwo} description={videoData.descriptionTwo} width={videoData.width} height={videoData.height} autoplay={videoData.autoplay} controls={videoData.controls} loop={videoData.loop} poster={videoData.poster} preload={videoData.preload} />
      <API />
    </main>
  );
}
