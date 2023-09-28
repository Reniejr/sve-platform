import React, { useState } from 'react'

//* Components
import SideBar from '@/modules/userpage/components/SideBar';
import SveCommunitySection from '@/modules/userpage/components/SveCommunitySection';

//* Styles
import globals from '@/styles/Main.module.scss';
import styles from '@/modules/userpage/styles/UserPage.module.scss';

const UserPage = () => {

    const [ section, setSection ] = useState("sve_community")


  return (
    <div 
        className={`${globals["page"]} ${globals["full-page"]}`}
        id={styles["userpage"]}
        >
            <SideBar state={[section, setSection]} />
            <div className={styles["section-content"]}>
                <SveCommunitySection/>
            </div>
    </div>
  )
}

export default UserPage