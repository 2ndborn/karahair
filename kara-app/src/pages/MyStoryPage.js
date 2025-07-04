import React from 'react'
import kara from '../assets/karapic.webp'
import styles from '../styles/MyStory.module.css'
import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap/'

const MyStoryPage = () => {
  return (
    <>
    <section>
    <div className={styles.tcontainer}>
      <img
        src={kara}
        alt='owner'
        className={styles.heroImage}
      />
      <div className={styles.gradientBg}>
        <div className={styles.leftHalf}>
          <h1>"I am Kara"</h1>
          <h3>xxxxx</h3>
        </div>
      </div>
    </div>
    </section>
    <section>
      <div>
        <div className={styles.box}></div>
      </div>
    </section>
    </>
  )
}

export default MyStoryPage