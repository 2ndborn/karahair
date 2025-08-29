import {React, useEffect, useRef, useState}  from 'react'
import styles from '../styles/Gallery.module.css'
import { motion, useTransform, useScroll, useInView, useAnimation, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion';

import kara from '../assets/karapic.webp'
import wigs from '../assets/wigs.webp';
import curly from '../assets/curly.webp';
import brazil from '../assets/brazil.webp';
import bel from '../assets/bel.webp';
import jane from '../assets/jane.webp';
import forsytes from '../assets/forsytes.webp';
import treason from '../assets/treason.webp';
import { useScrollFade } from '../hooks/useScrollFade';
import { paragraphs } from '../serviceData/paragraphData';

const Gallery = () => {

  // const { ref: para2Ref, opacity: para2Opacity } = useScrollFade(["start end", "end center"], [0.1, 0.5]);
  // const { ref: para3Ref, opacity: para3Opacity } = useScrollFade(["start end", "end center"], [0.1, 0.5]);
  const { ref: wigRef, opacity: wigOpacity } = useScrollFade(["start end", "end center"], [0.2, 0.5]);

  const ref = useRef(null);
  const boxRef = useRef(null);
  const workRef = useRef(null);
  const para0Ref = useRef(null);
  

  const { scrollYProgress: boxScrollY } = useScroll({
    target: boxRef,
    offset: ["start end", "start start"] // triggers when box enters and reaches top
  });
  const {scrollYProgress: workScrollX} = useScroll({
    target: workRef,
  });
  const {scrollYProgress: para1ScrollY} = useScroll({
    target: para0Ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(boxScrollY, [0, 0.9], [1, 0.65]);
  const opacity = useTransform(boxScrollY, [0, 0.5], [0, 1]);
  const smoothOpacity = useSpring(opacity, { stiffness: 20, damping: 20, mass: 1 });
  const spanOne = useTransform(para1ScrollY, [0, 0.3], [0, 1]);
  const spanTwo = useTransform(para1ScrollY, [0.4, 0.55], [0, 1]);
  const smoothSpanOne = useSpring(spanOne, {stiffness: 40, damping: 20});
  const smoothSpanTwo = useSpring(spanTwo, {stiffness: 40, damping: 20});
  const x = useTransform(workScrollX, [0, 1], ["5%", "-75%"]);

  const isInView = useInView(ref, { once: false, margin: '-20% 0px' });

  const images = [
    {image: wigs, label: "wig making"},
    {image: kara, label: "owner"},
    {image: brazil, label: "model"},
  ];

  // const inViewOne = useInView(paraRefOne, { margin: '-40% 0px -40% 0px' });
  // const inView2 = useInView(paraRefTwo, { margin: '-40% 0px -40% 0px' });
  // const inView3 = useInView(paraRefThree, { margin: '-40% 0px -40% 0px' });

  const { ref: paraRefOne, inView: inViewOne } = useScrollReveal();
  const { ref: paraRefTwo, inView: inViewTwo } = useScrollReveal();
  const { ref: paraRefThree, inView: inViewThree } = useScrollReveal();

  useEffect(() => {
    if (inViewOne) setActiveIndex(0);
    else if (inViewTwo) setActiveIndex(1);
    else if (inViewThree) setActiveIndex(2);
  }, [inViewOne, inViewTwo, inViewThree]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paraOne, paraTwo, paraThree] = paragraphs;

  // const paraViewOne = useRef(null);
  // const useInViewOne = useInView(paraViewOne, { margin: '-40% 0px -40% 0px', threshold: 0.1 })

  function useScrollReveal(margin = "-40% 0px -40% 0px", threshold = 0.1) {
    const ref = useRef(null);
    const inView = useInView(ref, {margin, threshold});
    return {ref, inView}
  }

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
    <div>
      <section className={styles.sec}>
          <motion.div 
            className={styles.intro}
          >
            <motion.div
            className={styles.text}
            style={{
            transformOrigin: "left center",
            scale }}
            >
              <motion.h1
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
              >
                Hi I am Kara
              </motion.h1>
              <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 1.5, ease: "easeIn" }}
              >
                That moment when a client looks into the mirror
                  and sees not just a fresh style, but the actualised
                  version of their internal self staring back at them.
                  That’s why I do what I do.
              </motion.p>
            </motion.div>
          </motion.div>
          <div className={styles.con} ref={boxRef}>
            <div className={styles.container}>
              <motion.img
                className={styles.karaImage}
                style={{opacity: smoothOpacity}}
                src={kara}
                alt="owner"
              />
            </div>
          </div>
      </section>
      <section className={styles.sec1}>
        <div className={styles.para1} ref={para0Ref}>
          <p>
            <motion.span
              style={{ opacity: smoothSpanOne }}
            >
              I’m a colour specialist and hairdresser with over 20 years
              in the game
            </motion.span>
            <motion.span style={{ opacity: smoothSpanTwo }}>
              , working across every hair texture, every
              shade, every style.
            </motion.span>
          </p>
        </div>
      </section>
      <section className={styles.sec2}>
        <div className={styles.imageContainer}>
          <div className={styles.imageCon}>
            <AnimatePresence mode='wait'>
            <motion.img
              key={activeIndex}
              src={images[activeIndex]?.image}
              alt={images[activeIndex]?.label}
              className={styles.image}
              initial={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, y: -20, filter: 'blur(6px)' }}
              transition={{ duration: 0.8, ease:"easeInOut" }}
            />
            </AnimatePresence>
          </div>
        </div>
        <div className={styles.para3}>
          <motion.p
            ref={paraRefOne}
            initial={{opacity: 0}}
            animate={{opacity: inViewOne ? 1 : 0, y: inViewOne ? 0 : -20}}
            transition={{ duration: 0.5, ease:"easeInOut"}}
          >
            <strong>{paraOne.primary}</strong>{paraOne.secondary}
          </motion.p>
        </div>
        <div className={styles.para3}>
          <motion.p 
            ref={paraRefTwo}
            initial={{opacity: 0}}
            animate={{opacity: inViewTwo ? 1 : 0}}
            transition={{ duration: 0.5, ease:"easeInOut"}}
          >
            <strong>{paraTwo.primary}</strong> {paraTwo.secondary}
          </motion.p>
        </div>
        <div className={styles.para3}>
          <motion.p 
            ref={paraRefThree}
            initial={{opacity: 0}}
            animate={{opacity: inViewThree ? 1 : 0}}
            transition={{ duration: 0.5, ease:"easeInOut"}}
          >
            <strong>{paraThree.primary}</strong> {paraThree.secondary}
          </motion.p>
        </div>
      </section>

      <section className={styles.sec3} ref={workRef}>
        <div className={styles.workContainer}>
          <motion.div
            className={styles.work}
            style={{ x }}
          >
            {workArray.map((work) => (
              <div key={work.id} className={styles.cards}>
                <img
                  src={work.image} 
                  alt='studios' 
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "fill"
                  }}
                  />
                </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className={styles.sec4}>
        <div className={styles.imageContainer2}>
          <img className={styles.curlyImage} src={curly} alt='curly hair' />
        </div>
        <div className={styles.con}>
          <motion.div 
            className={styles.para4}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1, delay: 0.5, ease: "easeIn"}}
          >
            <p>
              <span>I’m all about pushing boundaries and raising
                standards</span> to ensure the future of hairdressing
              is diverse, skilled, and fearless.
            </p>
          </motion.div>
        </div>
      </section>
      <section ref={ref} style={{ height: '120vh', position: 'relative' }}>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={isInView ? { scaleX: 0 } : {}}
          transition={{ duration: 2, delay: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            background: 'lime',
            transformOrigin: 'left center',
            zIndex: 6,
          }}
        />
        <motion.div
          initial={{ scaleX: 1 }}
          animate={isInView ? { scaleX: 0 } : {}}
          transition={{ duration: 2, delay: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'lime',
            transformOrigin: 'right center',
            zIndex: 6,
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: '100%',
            width: '100%',
            backgroundColor: "rgba(0,0,0,0.2)",
            fontSize: '2rem',
            zIndex: 5,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.1, duration: 0.8 }}
            style={{
              color: "white",
              textAlign: "center",
              transform: 'translate(-50%, -50%)',
              fontSize: '2rem',
              padding: "0 20px",
              zIndex: 5,
            }}
          >
            Whether you’re sat in my chair or learning in my
            classroom, you’re getting more than just hair, <span>you’re getting
            experience, vision, and straight-up passion.</span>
          </motion.p>
          <button>Click</button>
        </div>
        <motion.img
          initial={{opacity: 0}}
          animate={isInView ? {opacity: 1} : {}}
          transition={{ duration: 2, delay: 1}}
          src={brazil}
          alt="a model"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '0 0',
            zIndex: -1,
          }}
        />
      </section>
    </div>
  )
}

export default Gallery