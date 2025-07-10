import React from 'react'
import {motion}  from 'framer-motion'
import kara from '../assets/karapic.webp'
import styles from '../styles/MyStory.module.css'
import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap/'
import useDynamicColor from '../hooks/useDynamicColor'
import useFadeUp from '../hooks/useFadeUp'
import Title from '../components/Title'

const MyStoryPage = () => {
  const getColor = useDynamicColor();
  const isLoaded = useFadeUp();

  return (
    <>
      <Title title="MY" subtitle="STORY" />
          {/* <motion.div 
          className={styles.TitleContainer}
          style={{backgroundColor: getColor("title")}}
          >
          <h1>MY</h1>
          <h5>STORY</h5>

        </motion.div> */}
        <div id='next-section' className={styles.tcontainer}>
          <img
            src={kara}
            alt='owner'
            className={styles.heroImage}
            />
          <div className={styles.gradientBg}>
            <div className={`${styles.leftHalf} px-5`}>
              <div className='my-3'>
                <motion.h1
                  initial={{ opactiy: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.5, delay: 4, ease: "easeIn" }}
                >
                  Hi, I'm Kara
                </motion.h1>
              </div>
              <div className='my-4'>
                <h5>
                  As an expert colorist of over 20 years, I use my
                  knowledge of All hair types to 
                  assess the needs
                  of my clients before taking the right steps to
                  restore their hairs beauty and allure.
                </h5>
              </div>
            </div>
          </div>
        </div>
        
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