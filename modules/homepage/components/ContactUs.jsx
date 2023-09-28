import React from 'react'

//* Translations
import { useTranslations } from 'next-intl';

//* Assets
import Image from 'next/image';
import Logo from '@/app/assets/sve_logo_no_bg.webp'

//* Components
import ContactForm from './ContactForm';

//* Styles
import homeStyles from '../styles/HomePage.module.scss';
import styles from '../styles/ContactUs.module.scss';

const ContactUs = () => {

    const t = useTranslations("contact_us")

  return (
    <section 
        className={`${homeStyles["section"]} ${styles["contact-us-section"]}`}
        >
            <div className={`${homeStyles["section-content"]} ${styles["section-content"]}`}>
                <Image
                    src={Logo}
                    alt="logo"
                    width={320}
                    height={160}
                    className={styles["logo"]}
                />
                <p className={styles["section-description"]}>{ t("description_1") }</p>
                <ContactForm/>
                <p className={styles["section-description"]}>{ t("description_2") }</p>
            </div>
    </section>
  )
}

export default ContactUs