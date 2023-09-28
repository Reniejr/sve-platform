import React from 'react'

//* Translations
import { useTranslations } from 'next-intl';

//* Assets
import Image from 'next/image';
import VideoMeeting from '@/app/assets/Videomeeting1.webp'


//* Styles
import homeStyles from '../styles/HomePage.module.scss';
import styles from '../styles/JoinNetwork.module.scss';

const JoinNetwork = () => {

    const t = useTranslations("join_network")

  return (
    <section 
        className={`${homeStyles["section"]} ${styles["join-network-section"]}`}
        id="join-network"
    >
        <div className={styles["img-container"]}>
            <div className={styles["img-mask"]}></div>
            <Image
                src={VideoMeeting}
                alt="video-meeting"
                width={600}
                height={400}
                className={styles["video-meeting-img"]}
            />
        </div>
        <div className={`${homeStyles["section-content"]} ${styles["section-content"]}`}>
            <h2 className={styles["section-title"]}>{ t("title") }</h2>
            <p className={styles["section-description"]}>{ t("description") }</p>
        </div>
    </section>
  )
}

export default JoinNetwork