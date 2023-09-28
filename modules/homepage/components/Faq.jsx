import React, { useState } from 'react'

//* Translations
import { useTranslations } from 'next-intl';

//* Data
import { FAQS } from '../data';

//* Styles
import homeStyles from '../styles/HomePage.module.scss';
import styles from '../styles/Faq.module.scss';

const Faq = () => {

    const t = useTranslations("faq")

    const [ faqSelected, setFaqSelected ] = useState(0)

  return (
    <section 
        className={`${homeStyles["section"]} ${styles["faq-section"]}`}
        id="faq"
        >
        <div className={`${homeStyles["section-content"]} ${styles["section-content"]}`}>
            <h2 className={homeStyles["section-title"]}>{ t("title") }</h2>
            <div className={styles["faqs-container"]}>
                {
                    FAQS.map( (faq, i) => {
                        return(
                            <div 
                                className={styles["faq"]}
                                key={`faq-${faq.q}`}
                                >
                                    <div 
                                        className={`${styles["question-container"]} ${ i === faqSelected ? styles["selected-question"] : styles["not-selected-question"]}`}
                                        onClick={() => {
                                            if(i !== faqSelected){
                                                setFaqSelected(i)
                                            }
                                        }}
                                        >
                                        <p className={styles["question"]}>{ faq.q }</p>
                                        <ion-icon 
                                            name={`chevron-${i === faqSelected ? "up" : "down"}-outline`}
                                            ></ion-icon>
                                    </div>
                                    <div className={`${styles["answer-container"]} ${i === faqSelected ? styles["show-answer"] : styles["hide-answer"]}`}>
                                        <p className={styles["answer"]}>{ faq.a }</p>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Faq