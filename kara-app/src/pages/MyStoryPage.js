import React from 'react'
import kara from '../assets/karapic.webp'
import styles from '../styles/MyStory.module.css'

const MyStoryPage = () => {
  return (
    <div className={styles.tcontainer}>
        <img
          src={kara}
          alt='owner'
          className={styles.heroImage}
        />
        <div className={styles.gradientBg}></div>
    </div>
  )
}

export default MyStoryPage