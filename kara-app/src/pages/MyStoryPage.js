import React from 'react'
import {motion}  from 'framer-motion'
import kara from '../assets/karapic.webp'
import styles from '../styles/MyStory.module.css'
import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap/'
import useDynamicColor from '../hooks/useDynamicColor'
import useFadeUp from '../hooks/useFadeUp'

const MyStoryPage = () => {
  const getColor = useDynamicColor();
  const isLoaded = useFadeUp();

  return (
    <>
      <section className={styles.sectionContainer}>
        {isLoaded &&  (
          <>
          <motion.div 
          className={styles.TitleContainer}
          style={{backgroundColor: getColor("title")}}
          >
          <h1>MY</h1>
          <h5>STORY</h5>

        </motion.div>
        <div className={styles.tcontainer}>
          <img
            src={kara}
            alt='owner'
            className={styles.heroImage}
            />
          <div className={styles.gradientBg}>
            <div className={styles.leftHalf}>
              <motion.h1
              initial={{ opactiy: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5, delay: 4, ease: "easeIn"}}
               className='display-3'>"I am Kara"</motion.h1>
              <h3>xxxxx</h3>
            </div>
          </div>
        </div>
        </>
        )}
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