import React, { useState } from 'react'

//* Translations
import { useTranslations } from 'next-intl';

//* Data
import { REVIEWS } from '../data';

//* Styles
import homeStyles from '../styles/HomePage.module.scss';
import styles from '../styles/Testimonials.module.scss';

const Testimonials = () => {

    const t = useTranslations("testimonials")

    function chunkArray(array, chunkSize){
        const result = [];
        for (let i = 0; i < array.length; i+= chunkSize) {
            result.push(array.slice(i, i + chunkSize));
            
        }
        return result;
    }

    const chunkedArray = chunkArray(REVIEWS, 3);

    const [ slide, setSlide ] = useState(0)

    function back(){
        slide === 0 ? setSlide(1) : setSlide(0)
    }

    function forward(){
        slide === 1 ? setSlide(0) : setSlide(1)
    }

  return (
    <section 
        className={`${homeStyles["section"]} ${styles["testimonials"]}`}
        id="testimonials"
        >
            <div className={`${homeStyles["section-content"]} ${styles["section-content"]}`}>
                <h2 className={homeStyles["section-title"]}>{ t("title") }</h2>
                <ion-icon 
                    name="chevron-back-outline"
                    onClick={() => back()}
                    ></ion-icon>
                <ion-icon 
                    name="chevron-forward-outline"
                    onClick={() => forward()}
                    ></ion-icon>
                <div className={styles["reviews-slider"]}>
                    <div 
                        className={styles["reviews-slide-container"]}
                        style={{
                            marginLeft: slide === 0 ? "0" : "-100%"
                        }}
                        >
                        {
                            chunkedArray.map( (chunk, i) => {
                                return(
                                    <div 
                                        className={styles["review-slide"]}
                                        key={`reviews-slide-${i}`}
                                        >
                                            {
                                                chunk.map( review => {
                                                    return(
                                                        <div 
                                                            className={styles["review-card"]}
                                                            key={`review-card-${review.reviewer}`}
                                                        >
                                                            <p className={styles["reviewer-name"]}>{ review.reviewer }</p>
                                                            <p className={styles["reviewer-position"]}>{ review.position }</p>
                                                            <p className={styles["review"]}>"{ review.review }"</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Testimonials