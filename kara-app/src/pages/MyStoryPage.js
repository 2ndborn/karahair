import React from 'react'
import {motion}  from 'framer-motion'
import kara from '../assets/karapic.webp'
import nush from '../assets/nush.webp';
import award from '../assets/award.webp';
import wigs from '../assets/wigs.webp';
import curly from '../assets/curly.webp';
import brazil from '../assets/brazil.webp';

import styles from '../styles/MyStory.module.css'
import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap/'
import useDynamicColor from '../hooks/useDynamicColor'
import useFadeUp from '../hooks/useFadeUp'
import Title from '../components/Title'
import { AnimateButton } from '../utils/AnimateButton';
import { Link } from 'react-router-dom';

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
            <div className={`${styles.quoteContainer}`}>
              <div className={styles.quoteBox}>
                <i className={`${styles.leftQuote} fa-solid fa-quote-left`}></i>
                <p>
                  That moment when a client looks into the mirror
                  and sees not just a fresh style, but the actualised
                  version of their internal self staring back at them.
                  That’s why I do what I do.
                </p>
                <i className={`${styles.rightQuote} fa-solid fa-quote-right`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.pr1}>
          <p>
            <span>I’m a colour specialist and hairdresser with over 20 years 
            in the game</span>, working across every hair texture, every 
            shade, every style.
          </p>
        </div>
        <div className={styles.pr2}>
          <p>
            <span>Hair is my craft, but education is my purpose.</span> I run 
            cutting edge courses built for the next wave of stylists
            those who want to break rules the right way. 
          </p>
        </div>
        <div className={styles.pr3}>
          <p className='mb-3'>
            <span>My work doesn’t just follow trends it helps 
            create them.</span> From the salon floor to the set, I’ve coloured for 
            major productions like: 
          </p>
            <ul>
              <li><strong>Netflix:</strong> Treason</li>
              <li><strong>Amazon Prime: </strong>My Lady Jane</li>
              <li><strong>ITV:</strong> Belgravia - The Next Chapter</li>
              <li><strong>Channel 5:</strong> The Forsyte Saga</li>
              <li><strong>BBC:</strong> Doctor Who</li>
            </ul>
        </div>
        <div className={styles.pr4}>
          <p>
            <span>I’m all about pushing boundaries and raising 
            standards</span> to ensure the future of hairdressing 
            is diverse, skilled, and fearless.
          </p>
        </div>
        <div className={styles.pr5}>
          <p>
            Whether you’re sat in my chair or learning in my 
            classroom, you’re getting more than just hair, <span>you’re getting 
            experience, vision, and straight-up passion.</span>
          </p>
          <div className={styles.contactButtonWrapper}>
            <Link to="/contactme">
              <AnimateButton className={styles.contactButton}>
                Book Consultation now!!!
              </AnimateButton>
            </Link>
          </div>
        </div>
        <div className={styles.img}>
          <img className={styles.image} src={wigs} alt="wigs colouring"/>
        </div>
        <div className={styles.img2}>
          <img 
            className={styles.image2} 
            src={curly} 
            alt='Curly hair tutorial'
          />
        </div>
        <div className={styles.img3}>
          <img 
            className={styles.image3} 
            src={brazil} 
            alt='Happy Client'
          />
        </div>
        <div className={styles.k}>K</div>
        <div className={styles.h}>H</div>
      </div>

      {/* <div className={styles.StoryContainer}>
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
      </div> */}
    </>
  )
}

export default MyStoryPage