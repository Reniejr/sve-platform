import React from 'react'

//* Translations
import { useTranslations } from 'next-intl';

//* Assets
import Image from 'next/image';
import Logo from '@/app/assets/sve_logo_no_bg.webp'

//* Styles
import styles from '../styles/MainFooter.module.scss';

const MainFooter = () => {

  const t = useTranslations("footer")

  return (
    <footer
      className={styles['footer']}
    >
      <Image
        src={Logo}
        alt="logo"
        width={225}
        height={110}
        className={styles['logo']}
      />
      <div className={styles["socials-container"]}>
        <p className={styles["social-label"]}>{ t("follow_us") }</p>
        <div className={styles["socials"]}>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        </div>
      </div>
      <p className={styles["privacy-policy"]}>{ t("privacy_policy") }</p>
      <p className={styles["terms-conditions"]}>{ t("terms_conditions") }</p>
      <p className={styles["copyright"]}>{ t("copyright") }</p>
    </footer>
  )
}

export default MainFooter