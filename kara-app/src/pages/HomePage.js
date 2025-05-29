import React from 'react'
import styles from '../styles/HomePage.module.css';
import practiceImage from '../assets/practice-image.jpg'

function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <img src={practiceImage} alt='out' />
    </div>
  )
}

export default HomePage