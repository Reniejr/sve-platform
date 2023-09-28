import React, { useState, useEffect } from 'react'

//* Router
import Link from 'next/link';

//* Translations
import { useTranslations } from 'next-intl';

//* Assets
import Image from 'next/image';
import PrimaryLogo from '../../../app/assets/sve_logo_no_bg.webp'


//* Styles
import globals from '../../../styles/Main.module.scss';
import styles from '../styles/MainHeader.module.scss';

const MainHeader = () => {

    const tNav = useTranslations("header")

    const NAVIGATIONS_ITEMS = [
        {
            "label": "about-us",
            "link": "#about-us"
        },
        {
            "label": "our-services",
            "link": "#our-services"
        },
        {
            "label": "testimonials",
            "link": "#testimonials"
        },
        {
            "label": "faq",
            "link": "#faq"
        },
    ]

    const [ scrollPosition, setScrollPosition ] = useState(0)

    useEffect(() => {
      function updatePosition (){
        setScrollPosition(window.pageYOffset)
      }

      window.addEventListener('scroll', updatePosition)

      updatePosition()
    
      return () => window.removeEventListener('scroll', updatePosition)

      /* eslint-disable-next-line */
    }, [])

    function handleScroll(){
        return scrollPosition === 0 ?
            styles["on-top"] :
            styles["off-top"] 
    }

  return (
    <header className={`${styles['header']} ${handleScroll()}`} id={styles["main-header"]}>
        <div className={styles["header-content"]}>
            <div className={styles["header-col"]}>
                <Image 
                    src={PrimaryLogo} 
                    alt="logo" 
                    width={200} 
                    height={88}
                    className={styles["logo-nav"]}
                    />
                {
                    NAVIGATIONS_ITEMS.map( item => {
                        return(
                            <div 
                                className={styles["nav-link"]}
                                key={`nav-item-${item.label}`}
                                >
                                <Link 
                                    href={`/${item.link}`}
                                    className={styles["nav-item"]}
                                    >
                                    { tNav(item.label)}
                                </Link>
                                <div className={styles["underline"]}></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles["header-col"]}>
                <div className={`${styles["nav-link"]} ${styles["login-link"]}`}>
                    <Link 
                        href={`https://lms-demo-dev.web.app/login`}
                        className={styles["nav-item"]}
                        >
                        { tNav("sign-in")}
                    </Link>
                    <div className={styles["underline"]}></div>
                </div>
                <div className={styles["divider"]}></div>
                <div className={`${globals["btn"]} ${globals["btn-primary"]} ${styles["btn"]}`}>
                    <Link 
                        href={`https://lms-demo-dev.web.app/registration`}
                        className={globals["link-text"]}
                        >
                        { tNav("sign-up")}
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default MainHeader