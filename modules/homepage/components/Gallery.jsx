import React from 'react'

//* Assets
import Image from 'next/image';
import Logo from '@/app/assets/sve_logo_bg_g_cropped.webp';
import GalleryRow1 from '@/app/assets/Photo5.webp';
import GalleryRow2 from '@/app/assets/Gallery2.webp';
import GalleryRow3 from '@/app/assets/Gallery1.webp';
import GalleryRow4 from '@/app/assets/Gallery6.webp';
import Gallery5 from '@/app/assets/gallery10.webp';
import Gallery6 from '@/app/assets/gallery11.webp';
import Gallery7 from '@/app/assets/gallery12.webp';
import Gallery2Row1 from '@/app/assets/Lesson1.webp';
import Gallery2Row2 from '@/app/assets/Gallery5.webp';
import Gallery2Row3 from '@/app/assets/Gallery4.webp';
import Gallery2Row4 from '@/app/assets/gallery3.webp';
import Gallery2Row5 from '@/app/assets/gallery7.webp';
import Gallery2Row6 from '@/app/assets/gallery8.webp';
import Gallery2Row7 from '@/app/assets/gallery9.webp';

//* Styles
import homeStyles from '../styles/HomePage.module.scss';
import styles from '../styles/Gallery.module.scss';

const Gallery = () => {

    const PICTURES1 = [
        GalleryRow1,
        GalleryRow2,
        GalleryRow3,
        GalleryRow4,
        GalleryRow5,
        GalleryRow6,
        GalleryRow7,
    ]
    const PICTURES2 = [
        Gallery2Row1,
        Gallery2Row2,
        Gallery2Row3,
        Gallery2Row4,
        Gallery2Row5,
        Gallery2Row6,
        Gallery2Row7,
    ]

  return (
    <section 
        className={`${homeStyles["section"]} ${styles["gallery-section"]}`}
        id="gallery"
        >
            <div className={`${homeStyles["section-content"]} ${styles["section-content"]}`}>
                <div className={styles["section-mask"]}></div>
                <div className={styles["gallery-container"]}>
                    <div className={styles["row-picture"]}>
                        {
                            PICTURES1.map( pic => {
                                return(
                                    <Image
                                        key={`pic-gallery-1-${pic}`}
                                        src={pic}
                                        alt="gallery-pic"
                                        width={500}
                                        height={200}
                                        className={styles["gallery-pic"]}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={styles["row-picture"]}>
                        {
                            PICTURES2.map( pic => {
                                return(
                                    <Image
                                        key={`pic-gallery-2-${pic}`}
                                        src={pic}
                                        alt="gallery-pic"
                                        width={500}
                                        height={200}
                                        className={styles["gallery-pic"]}
                                    />
                                )
                            })
                        }
                    </div>
                    <Image 
                        src={Logo}
                        alt="logo"
                        width={500}
                        height={225}
                        className={styles["logo"]}
                    />
                </div>
            </div>
    </section>
  )
}

export default Gallery