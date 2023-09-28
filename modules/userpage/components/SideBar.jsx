import React from 'react'

//* Assets
import Image from 'next/image';
import Logo from '@/app/assets/sve_logo_no_bg.webp';

//* Styles
import globals from '@/styles/Main.module.scss';
import styles from '../styles/SideBar.module.scss';

const SideBar = ({state}) => {

    const [ section, setSection ] = state

  return (
    <nav className={styles["nav-bar"]}>
        <div className={styles["left-content"]}>
            <Image
                src={Logo}
                alt="logo"
                width={225}
                height={120}
                className={styles["logo"]}
            />
            <div className={styles["search-bar"]}>
                <div className={styles["input-container"]}>
                    <input 
                        type="text" 
                        name="" 
                        id=""
                        className={styles['search-input']} 
                        placeholder="Search"
                    />
                    <ion-icon name="search-outline"></ion-icon>
                </div>
            </div>
            <div className={styles["nav-items-container"]}>
                <button 
                    className={`${globals["btn"]} ${styles["nav-btn"]} ${section === "sve_community" ? styles["selected"] : ""}`}
                    onClick={() => setSection("sve_community")}
                    >
                        SVE Community
                </button>
                <button 
                    className={`${globals["btn"]} ${styles["nav-btn"]} ${section === "course_content" ? styles["selected"] : ""}`}
                    onClick={() => setSection("course_content")}
                    >
                        Course Content
                </button>
                <button 
                    className={`${globals["btn"]} ${styles["nav-btn"]} ${section === "my-profile" ? styles["selected"] : ""}`}
                    onClick={() => setSection("my_network")}
                    >
                        My Network
                </button>
            </div>
        </div>
        <div className={styles["right-content"]}>
            <div className={styles["user-info"]}>
                <div className={styles["avatar-container"]}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                </div>
            </div>
            <button 
                className={`${globals["btn"]} ${styles["logout-btn"]}`}
                >
                    Logout
            </button>
        </div>
    </nav>
  )
}

export default SideBar