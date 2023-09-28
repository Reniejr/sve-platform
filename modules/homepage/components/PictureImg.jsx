import React from 'react'

//* Assets
import Image from 'next/image';
import LogoNoBg from '@/app/assets/sve_logo_no_bg.webp';

//* Styles
import styles from '../styles/PictureImg.module.scss';

const PictureImg = ({ imgSrc, imgAlt, addingStyles }) => {
  return (
    <div className={`${styles["picture-img"]} ${addingStyles}`}>
        <div className={styles["img-container"]}>
            <Image
                src={imgSrc}
                alt={imgAlt}
                width={300}
                height={300}
                className={styles["img-frame"]}
            />
        </div>
        <Image
            src={LogoNoBg}
            alt="logo"
            width={500}
            height={225}
            className={styles['picture-logo']}
        />
    </div>
  )
}

export default PictureImg