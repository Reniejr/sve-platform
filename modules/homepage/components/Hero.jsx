import React from 'react'

//* Translations
import { useTranslations } from 'next-intl';

//* Router
import { useRouter } from 'next/router';

//* Assets
import Image from 'next/image';
import LogoNoBg from '@/app/assets/sve_logo_no_bg.webp';
import HeroBg from '@/app/assets/Photo5.webp';
import Photo1 from '@/app/assets/Photo1.webp';
import Photo12 from '@/app/assets/Photo12.webp';
import Photo3 from '@/app/assets/Photo3.webp';
import Photo10 from '@/app/assets/Photo10.webp';

//* Styles
import styles from '../styles/Hero.module.scss';
import PictureImg from './PictureImg';
import ArrowDown from '@/app/assets/ArrowDown';

const Hero = () => {

    const tHome = useTranslations("homepage")
    const router = useRouter()

  return (
    <section className={styles['hero']}>
        <div className={styles["hero-bg-container"]}>
          <Image
            src={HeroBg}
            alt="hero-bg"
            width={4608}
            height={3456}
            className={styles["hero-bg"]}
          />
          <div className={styles["bg-mask"]}></div>
        </div>
        <div className={styles["hero-content-text"]}>
          <h1 className={styles["hero-title"]}>{ tHome("title") }</h1>
          <p className={styles["hero-description"]}>{ tHome("description") }</p>
        </div>
        <PictureImg
          imgSrc={Photo1}
          imgAlt="photo-1"
          addingStyles={styles["pictures"]}
        />
        <PictureImg
          imgSrc={Photo12}
          imgAlt="photo-12"
          addingStyles={styles["pictures"]}
        />
        <PictureImg
          imgSrc={Photo3}
          imgAlt="photo-3"
          addingStyles={styles["pictures"]}
        />
        <PictureImg
          imgSrc={Photo10}
          imgAlt="photo-10"
          addingStyles={styles["pictures"]}
        />
        {/* <Image
          src={LogoNoBg}
          alt="logo-no-bg"
          width={500}
          height={225}
          className={styles["hero-logo"]}
          /> */}
          <div 
            className={styles["discover-container"]}
            onClick={() => router.push("/#about-us")}
            >
            <p className={styles["discover"]}>{ tHome("discover") }</p>
            <ArrowDown/>
            <ArrowDown/>
          </div>
    </section>
  )
}

export default Hero