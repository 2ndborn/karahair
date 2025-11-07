import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import kara from '../assets/karapic.webp'
import bel from '../assets/bel.webp';
import jane from '../assets/jane.webp';
import forsytes from '../assets/forsytes.webp';
import treason from '../assets/treason.webp';

import styles from '../styles/MyStory.module.css'
import Title from '../components/Title'
import TileComponent from '../components/TileComponent';
import { paragraphs } from '../serviceData/paragraphData';

const MyStoryPage = () => {

  const workRef = useRef(null);
  const { scrollYProgress: workScrollX } = useScroll({
    target: workRef,
  });
  const x = useTransform(workScrollX, [0, 1], ["5%", "-75%"]);

  const [paraOne, paraTwo, paraThree, paraFour, paraFive] = paragraphs;
  const workArray = [
    {
      id: 1,
      company: "ITV",
      title: "Belgravia The Next Chapter",
      image: bel,
    },
    {
      id: 2,
      company: "Amazon Prime",
      title: "My Lady Jane",
      image: jane,
    },
    {
      id: 3,
      company: "Channel 5",
      title: "The Forsytes",
      image: forsytes,
    },
    {
      id: 4,
      company: "Netflix",
      title: "Treason",
      image: treason,
    },
  ];

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };


  return (
    <>
      <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, easeOut: "easeOut" }}
      >
        <Title title="MY" subtitle="STORY" />
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
        <section style={{ position: "relative" }}>
          <div style={{
            position: "fixed", top: 0, left: 0,
            width: "100%", height: "100vh", backgroundImage: "radial-gradient(#fff 70%, #d9b9a06c)",
            zIndex: -1
          }}
          />
          <TileComponent content={paraOne} boxShadow={"8px 8px 10px rgba(0,0,0,0.3), 10px 10px 14px rgba(0,0,0,0.5)"} />
          <TileComponent content={paraTwo} boxShadow={"0px 8px 10px rgba(0,0,0,0.3), 0px 10px 14px rgba(0,0,0,0.5)"} />
          <TileComponent content={paraThree} boxShadow={"-8px 8px 10px rgba(0,0,0,0.3), -10px 10px 14px rgba(0,0,0,0.5)"} />
          <section className={styles.sec3} ref={workRef}>
            <div className={styles.workContainer}>
              <motion.div
                className={styles.work}
                style={{ x }}
              >
                {workArray.map((work) => (
                  <motion.div
                    key={work.id}
                    className={styles.cards}
                  >
                    <motion.img
                      src={work.image}
                      alt='studio'
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "fill"
                      }}
                    />
                  </motion.div>
                )
                )}
              </motion.div>
            </div>
          </section>
          <TileComponent content={paraFour} boxShadow={"-4px 8px 10px rgba(0,0,0,0.3), -6px 10px 14px rgba(0,0,0,0.5)"} />
          <TileComponent content={paraFive} boxShadow={"0px 8px 10px rgba(0,0,0,0.3), 0px 10px 14px rgba(0,0,0,0.5)"} />
          <div style={{ height: "12.5vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default MyStoryPage