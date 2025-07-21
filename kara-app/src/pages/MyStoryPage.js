import React from 'react'
import {motion}  from 'framer-motion'
import kara from '../assets/karapic.webp'
import nush from '../assets/nush.webp';
import award from '../assets/award.webp';
import wigs from '../assets/wigs.webp';

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
            <div className='my-3 display-1'>
              <motion.h1
                initial={{ opactiy: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, delay: 4, ease: "easeIn" }}
              >
                Hi, I'm Kara
              </motion.h1>
            </div>
            <div className='my-4'>
              <p>
                As an expert colorist of over 20 years, I use my
                knowledge of All hair types to 
                assess the needs
                of my clients before taking the right steps to
                restore their hairs beauty and allure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.StoryContainer}>
        <div className={`${styles.AboutMeOne} p-5`}>
          <p>
            Hello! I’m Kara, a passionate colour expert and
            <span> hair care professional with over 20 years in the
            beauty industry.</span> 
          </p>
          <p>
            I believe in that powerful moment <span>
            when a client looks into the mirror and sees</span> not
            just a fresh style, but <span>the actualised version of
            their internal self staring back at them.</span> That’s why I do
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
            I understand that <span>our hair's condition, style, and colour can completely
            shift how we feel about ourselves</span>.
          </p>
          <p>
            Whether you're preparing to land that dream job, close a big deal,
            or turn heads on a date (you know what I’m talking about),
            <span> I’m here to help you show up as your most confident self.</span>
          </p>
        </div>
        <div className={`${styles.AboutMeThree} p-5`}>
          <p>
            As an <span>award-winning curly and textured hair specialist</span>,
            I work across all hair types from straight to Afro and
            everything in between.
          </p>
          <p>
            I use vegan, <span>PPD-free colouring systems enriched with 
            coconut oil for </span>vibrant shine and healthy results.
          </p>
          <p>
            My approach is holistic, assessing your needs before
            restoring and <span>enhancing your hair’s natural beauty and allure.</span>
          </p>
          <div className={styles.ImageAnchorTwo}>
            <img 
              src={award}
              alt='cathy'
              className={styles.awardImage}
            />
          </div>
        </div>
        <div className={`${styles.AboutMeFour} p-5`}>
          <p>
            Beyond the salon, I’ve worked in TV and film, styling
            lead actors and matching wigs to period dramas. My
            recent credits include:
          </p>
          <p>
            <span>
              <ul>
                <li>Doctor Who Season 2</li>
                <li>Netflix’s Treason</li>
                <li>ITV’s Belgravia</li>
                <li>Channel 5’s Forsyte Saga</li>
                <li>Prime Video’s My Lady Jane</li>
              </ul>
            </span>
          </p>
          <div className={styles.ImageAnchorThree}>
            <img 
              src={wigs}
              alt='cathy'
              className={styles.wigsImage}
            />
          </div>
        </div>
        <div className={`${styles.AboutMeFive} p-5`}>
          <p>
            I’m also a trained educator offering 1:1 workshops and
            tailored curly hair and colour theory education for
            salons and individuals because beauty is best when it’s
            shared.
          </p>
          <p>
            When I’m not in the studio or on set, I’m home
            with my wonderful family, proudly juggling mum life with
            a creative one.
          </p>
          <div className={styles.contactButtonWrapper}>
            <button className={`${styles.contactButton}`}>
              Contact me now
            </button>
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