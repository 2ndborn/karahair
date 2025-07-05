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
              <h1 className='display-3'>"I am Kara"</h1>
              <h3>xxxxx</h3>
            </div>
          </div>
        </div>
      </section>
    {/* <section>
      <div className={styles.con}>
        <div className={styles.con2}>
          <div className={styles.box}>
              <div className={styles.box2}>
                <img
                  src={kara}
                  alt='owner'
                  className={styles.heroImage2}
                />
            </div>
          </div>
        </div>
        <div className={styles.con3}>
          <h1>I am Kara</h1>
          <h3>Young heart run freet</h3>
        </div>
      </div>
    </section> */}
    </>
  )
}

export default MyStoryPage