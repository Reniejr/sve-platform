import React, { useState } from 'react'

//* Translations
import { useTranslations } from 'next-intl';

//* Styles
import globals from '@/styles/Main.module.scss';
import homeStyles from '../styles/HomePage.module.scss';
import styles from '../styles/OurServices.module.scss';

const OurServices = () => {

    const t = useTranslations("our_services")

    const [ serviceShow, setServiceShow ] = useState("service1");

    const [ subServiceShow, setSubServiceShow ] = useState("_1")

    const servicesNav = ["service1", "service2", "service3"]

    const services = {
        "service1": ["_1", "_2", "_3", "_4"],
        "service2": [],
        "service3": ["_1", "_2", "_3"]
    }

  return (
    <section 
        className={`${homeStyles["section"]} ${styles["our-services"]}`}
        id="our-services"
        >
            <div className={`${homeStyles["section-content"]} ${styles["section-content"]}`}>
                <h2 className={homeStyles["section-title"]}>{ t("title") }</h2>
                <div className={styles["services-nav"]}>
                    {
                        servicesNav.map(service => {
                            return(
                                <button 
                                    className={`${globals["btn"]} ${styles["service-nav-btn"]} ${serviceShow === service ? styles["selected"] : ""}`}
                                    key={`service-nav-btn-${service}`}
                                    onClick={() => {
                                        setServiceShow(service)
                                        setSubServiceShow("_1")
                                    }}
                                    >
                                        { t(`${service}.title`)}
                                </button>
                            )
                        })
                    }
                </div>
                <div className={styles["service-main-topic-container"]}>
                    <p className={styles["description-main-service"]}>
                        {t(`${serviceShow}.description`)}
                    </p>
                    <div className={styles["services-container"]}>
                        {
                            services[serviceShow].length > 0 ?
                            services[serviceShow].map( service => {
                                return(
                                    <div 
                                        className={`${styles["service-card"]} ${subServiceShow === service ? styles["expand"] : styles["minimize"]}`}
                                        key={`service-card-${service}-${t(`${serviceShow}.${service}.title`)}`}
                                        >
                                            <div className={`${styles["side-bar"]} ${ subServiceShow === service ? styles["selected"] : styles["not-selected"]}`}></div>
                                            <div className={styles["card-content"]}>
                                                <h3 
                                                    className={`${styles['service-title']} ${subServiceShow === service ? styles["selected"] : styles["not-selected"]}`}
                                                    onClick={() => setSubServiceShow(service)}
                                                    >
                                                        {t(`${serviceShow}.${service}.title`)}
                                                </h3>
                                                <p 
                                                    className={`${styles['service-description']} ${subServiceShow === service ? styles["show"] : styles["hide"]}`}
                                                    >{t(`${serviceShow}.${service}.description`)}</p>
                                            </div>
                                        </div>
                                )
                            }) : null
                        }
                    </div>
                </div>
            </div>
    </section>
  )
}

export default OurServices