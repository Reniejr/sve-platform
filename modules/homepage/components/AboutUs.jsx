import React from 'react'

//* Translations
import { useTranslations } from 'next-intl';

//* Assets
import Image from 'next/image';
import Logo from '@/app/assets/sve_logo_no_bg.webp';
import Photo12 from '@/app/assets/Photo12.webp';

//* Styles
import homeStyles from '../styles/HomePage.module.scss';
import styles from '../styles/AboutUs.module.scss';

const AboutUs = () => {

    const t = useTranslations("about_us")

  return (
    <section
        className={`${homeStyles["section"]} ${styles["about-us"]}`}
        id="about-us"
    >
        <div className={`${homeStyles["section-content"]} ${styles["section-content"]}`}>
            <Image
                src={Logo}
                alt="logo"
                width={500}
                height={225}
                className={styles["logo"]}
            />
            <h2 className={homeStyles["section-title"]}>
                { t("title") }
            </h2>
            <p className={homeStyles["section-description"]}>{ t("description") }</p>
            <p className={homeStyles["txt-content"]}>{ t("txt1") }</p>
            <p className={homeStyles["txt-content"]}>{ t("txt2") }</p>
            <p className={homeStyles["txt-content"]}>{ t("txt3") }</p>
            <Image
                src={Photo12}
                alt="photo-12"
                width={1000}
                height={800}
                className={styles["about-us-img"]}
            />
            <div className={styles["txt-content-row"]}>
                <p className={styles["txt-content"]}>{ t.rich("txt4", { b: (txt) => <b>{txt}</b>}) }</p>
                <p className={styles["txt-content"]}>{ t.rich("txt5", { b: (txt) => <b>{txt}</b>}) }</p>
            </div>

        </div>
    </section>
  )
}

export default AboutUs