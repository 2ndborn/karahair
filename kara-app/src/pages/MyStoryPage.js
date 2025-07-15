import React from 'react'
import {motion}  from 'framer-motion'
import kara from '../assets/karapic.webp'
import nush from '../assets/nush.webp';
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
      <div className={styles.StoryContainer}>
        <div className={`${styles.AboutMeOne} p-5`}>
          <p>
            Hello! I’m Kara, a passionate colour expert and
            hair care professional with over 20 years in the
            beauty industry. I believe in that powerful moment
            when a client looks into the mirror and sees not
            just a fresh style, but the actualised version of
            their internal self staring back. That’s why I do
            what I do.
          </p>
        </div>
        <div className={styles.ImageAnchor}>
          <img 
            src={nush}
            alt='cathy'
            className={styles.cathyImage}
          />
        </div>
        <div className={`${styles.AboutMeTwo} p-5`}>
          <p>
            I understand that our Hair's condition, style, and colour can completely
            shift how we feel about ourselves. Whether you're
            preparing to land that dream job, close a big deal,
            or turn heads on a date (you know what I’m talking about),
            I’m here to help you show up as your most confident self.
          </p>
        </div>
        <div className={`${styles.AboutMeThree} p-5`}>
          <p>
            As an award-winning curly and textured hair specialist,
            I work across all hair types—from straight to Afro and
            everything in between. I use vegan, PPD-free colouring
            systems enriched with coconut oil for vibrant shine and
            healthy results. My approach is holistic, assessing
            individual needs before restoring and enhancing your
            hair’s natural beauty and allure.
          </p>
        </div>
        <div className={`${styles.AboutMeTwo} p-5`}>
          <p>
            Beyond the salon, I’ve worked in TV and film, styling
            lead actors and matching wigs to period dramas. My
            recent credits include:
          </p>
          <p>
            <ul>
              <li>Doctor Who Season 2</li>
              <li>Netflix’s Treason</li>
              <li>ITV’s Belgravia</li>
              <li>Channel 5’s Forsyte Saga</li>
              <li>Prime Video’s My Lady Jane</li>
            </ul>
          </p>
        </div>
        <div className={`${styles.AboutMeOne} p-5`}>
          <p>
            I’m also a trained educator offering 1:1 workshops and
            tailored curly hair and colour theory education for
            salons and individuals—because beauty is best when it’s
            shared. When I’m not in the studio or on set, I’m home
            with my wonderful family, proudly juggling mum-life with
            creative life.
          </p>
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