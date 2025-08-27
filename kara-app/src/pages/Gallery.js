import {React, useEffect, useRef}  from 'react'
import styles from '../styles/Gallery.module.css'
import { motion, useTransform, useScroll, useInView, useAnimation, useSpring } from 'framer-motion';

import kara from '../assets/karapic.webp'
import wigs from '../assets/wigs.webp';
import curly from '../assets/curly.webp';
import brazil from '../assets/brazil.webp';
import { useScrollFade } from '../hooks/useScrollFade';

const Gallery = () => {

  const { ref: para2Ref, opacity: para2Opacity } = useScrollFade(["start end", "end center"], [0.1, 0.5]);
  const { ref: para3Ref, opacity: para3Opacity } = useScrollFade(["start end", "end center"], [0.1, 0.5]);
  const { ref: wigRef, opacity: wigOpacity } = useScrollFade(["start end", "end center"], [0.2, 0.5]);

  const ref = useRef(null);
  const boxRef = useRef(null);
  const workRef = useRef(null);
  const para1Ref = useRef(null);
  
  const controls = useAnimation();
  const sec4Ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sec4Ref,
    offset: ["start end", "end start"]
  })

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.5 && latest < 0.6) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    });
  }, [scrollYProgress, controls]);

  const { scrollYProgress: boxScrollY } = useScroll({
    target: boxRef,
    offset: ["start end", "start start"] // triggers when box enters and reaches top
  });
  const {scrollYProgress: workScrollX} = useScroll({
    target: workRef,
  });
  const {scrollYProgress: para1ScrollY} = useScroll({
    target: para1Ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(boxScrollY, [0, 0.9], [1, 0.65]);
  const opacity = useTransform(boxScrollY, [0, 0.5], [0, 1]);
  const smoothOpacity = useSpring(opacity, { stiffness: 20, damping: 20, mass: 1 });
  const spanOne = useTransform(para1ScrollY, [0, 0.3], [0, 1]);
  const spanTwo = useTransform(para1ScrollY, [0.4, 0.6], [0, 1]);
  const smoothSpanOne = useSpring(spanOne, {stiffness: 40, damping: 20});
  const smoothSpanTwo = useSpring(spanTwo, {stiffness: 40, damping: 20});
  const x = useTransform(workScrollX, [0, 1], ["5%", "-75%"]);

  const isInView = useInView(ref, { once: false, margin: '-20% 0px' });

  const workArray = [1,2,3,4,5];
  return (
    <div>
      <section ref={ref} className={styles.sec}>
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
              >Hi I am Kara</motion.h1>
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
      <section className={styles.sec2}>
        <div className={styles.para1} ref={para1Ref}>
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
      <section>
        <div className={styles.imageContainer} ref={wigRef}>
          <div className={styles.imageCon}>
            <motion.img 
            className={styles.image}
            style={{ opacity: wigOpacity }}
            src={wigs} 
            alt='wigs' 
            />
          </div>
        </div>
        <div className={styles.para2} ref={para2Ref}>
          <motion.p style={{ opacity: para2Opacity}}>
              Hair is my craft, but education is my purpose.
             I run
            cutting edge courses built for the next wave of stylists
            those who want to break rules the right way.
          </motion.p>
        </div>
        <div className={styles.para3} ref={para3Ref}>
          <motion.p style={{ opacity: para3Opacity}}>
            My work doesn’t just follow trends it helps
              create them. From the salon floor to the set, I’ve coloured for
            major productions like:
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
                <div key={work} className={styles.cards}>
                  {work}
                </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className={styles.sec4} ref={sec4Ref}>
        <div className={styles.imageContainer2}>
          <img className={styles.curlyImage} src={curly} alt='curly hair' />
        </div>
        <div className={styles.con}>
          <motion.div 
            className={styles.para4}
            style={{ opacity: 0, y: 50 }}  
            animate={controls}
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
            
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            zIndex: 5,
          }}
        >
          Whether you’re sat in my chair or learning in my classroom...
        </motion.p>
        </div>
        <motion.img
          initial={{opacity: 0}}
          animate={isInView ? {opacity: 1} : {}}
          transition={{ duration: 2, delay: 1}}
          src={brazil}
          alt="Revealed content"
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