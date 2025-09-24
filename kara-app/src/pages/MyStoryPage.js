import React, { useRef } from 'react'
import {motion, useScroll, useTransform}  from 'framer-motion'
import kara from '../assets/karapic.webp'
import award from '../assets/award.webp';
import wigs from '../assets/wigs.webp';
import curly from '../assets/curly.webp';
import brazil from '../assets/brazil.webp';
import bel from '../assets/bel.webp';
import jane from '../assets/jane.webp';
import forsytes from '../assets/forsytes.webp';
import treason from '../assets/treason.webp';
import colorchart from '../assets/colorchart.webp';

import styles from '../styles/MyStory.module.css'
import useDynamicColor from '../hooks/useDynamicColor'
import useFadeUp from '../hooks/useFadeUp'
import Title from '../components/Title'
import { AnimateButton } from '../utils/AnimateButton';
import { Link } from 'react-router-dom';
import TileComponent from '../components/TileComponent';
import { paragraphs } from '../serviceData/paragraphData';

const MyStoryPage = () => {
  const getColor = useDynamicColor();
  const isLoaded = useFadeUp();

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
      {/* <div className={styles.container}>
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
      </div> */}
      <section style={{
        height: "1700vh", position: "relative",
        backgroundImage: "radial-gradient(50% 50% at 50% 50%, rgba(255, 3, 255, 0.2), rgba(255, 3, 255, 0.17), rgba(255, 3, 255, 0.15) 5%, white)",
        }}
      >
        <TileComponent content={paraOne} margin={"0px 190px 0px 10px"} boxShadow={"8px 8px 10px rgba(0,0,0,0.3), 10px 10px 14px rgba(0,0,0,0.5)"} />
        <TileComponent content={paraTwo} margin={"0px 100px 0px 100px"} boxShadow={"0px 8px 10px rgba(0,0,0,0.3), 0px 10px 14px rgba(0,0,0,0.5)"} />
        <TileComponent content={paraThree} margin={"0px 10px 20px 190px"} boxShadow={"-8px 8px 10px rgba(0,0,0,0.3), -10px 10px 14px rgba(0,0,0,0.5)"} />
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
        <TileComponent content={paraFour} margin={"0px 10px 0px 190px"} boxShadow={"-4px 8px 10px rgba(0,0,0,0.3), -6px 10px 14px rgba(0,0,0,0.5)"} />
        <TileComponent content={paraFive} margin={"0px 100px 0px 100px"} boxShadow={"0px 8px 10px rgba(0,0,0,0.3), 0px 10px 14px rgba(0,0,0,0.5)"}  />
        <TileComponent
          content={{ image: colorchart }} boxShadow={"8px 8px 10px rgba(0,0,0,0.3), 10px 10px 14px rgba(0,0,0,0.5)"}
          renderContent={() => (
            <>
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: 'flex',
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "1rem",
                  zIndex: 2, // higher than overlay
                  pointerEvents: "auto", // ensure buttons are clickable
                }}
              >
                <button style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#fff",
                  color: "#000",
                  cursor: "pointer",
                  zIndex: 3 // optional, for extra safety
                }}>
                  <i class="fa-brands fa-instagram"></i>
                  Button One
                </button>
                <button style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#fff",
                  color: "#000",
                  cursor: "pointer",
                  zIndex: 3
                }}>
                  <i class="fa-brands fa-whatsapp"></i>
                  Button Two
                </button>
              </motion.div>
            </>
          )}
        />

      </section>
    </>
  )
}

export default MyStoryPage