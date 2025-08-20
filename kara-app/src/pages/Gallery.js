import {React, useRef, useEffect, useState}  from 'react'
import styles from '../styles/Gallery.module.css'
import { motion, useTransform, useScroll, useSpring, useMotionValueEvent, useInView } from 'framer-motion';

import wigs from '../assets/wigs.webp';
import curly from '../assets/curly.webp';
import brazil from '../assets/brazil.webp';

const Gallery = () => {

  
  const ref = useRef(null);
  const boxRef = useRef(null);
  const workRef = useRef(null);
  const doorsRef = useRef(null);
  const { scrollYProgress: boxScrollY } = useScroll({
    target: boxRef,
    offset: ["start end", "start start"] // triggers when box enters and reaches top
  });
  const {scrollYProgress: workScrollX} = useScroll({
    target: workRef,
  });
  const {scrollYProgress: doorsScrollY} = useScroll({
    target: doorsRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(boxScrollY, [0, 0.9], [1, 0.65]);
  const x = useTransform(workScrollX, [0, 1], ["5%", "-75%"]);
  const leftScaleRaw = useTransform(doorsScrollY, [0.25,0.65], [1,0])
  const rightScaleRaw = useTransform(doorsScrollY, [0.25,0.65], [1,0])
  const leftScale = useSpring(leftScaleRaw, {
    stiffness: 100,
    damping: 20,
    mass: 0.5
  });

  const rightScale = useSpring(rightScaleRaw, {
    stiffness: 100,
    damping: 20,
    mass: 0.5
  });
  const paraOpacity = useTransform(doorsScrollY, [0.55, 0.75], [0, 1], {clamp: true})
  const paraY = useTransform(doorsScrollY, [0.55, 0.75], [20, 0], {clamp: true})
  const paraScale = useTransform(doorsScrollY, [0.35, 0.4], [0.95, 1]);
  const [textVisible, setTextVisible] = useState(false);

  const isInView = useInView(ref, { once: false, margin: '-20% 0px' });

  useMotionValueEvent(doorsScrollY, "change", (v) => {
    if (v > 0.38 && !textVisible) setTextVisible(true);
  });

  const imageOpacity = useTransform(doorsScrollY, [0, 1], [0.3, 1]);
  const imageScale = useTransform(doorsScrollY, [0, 1], [1.2, 1]);

  const [scrollVal, setScrollVal] = useState(0);

  useMotionValueEvent(doorsScrollY, "change", (v) => {
    setScrollVal(v);
  });

  const workArray = [1,2,3,4,5];
  return (
    <div>
      <motion.div style={{
        position: 'fixed',
        top: 10,
        left: 10,
        background: 'black',
        color: 'white',
        padding: '0.5rem',
        zIndex: 9999
      }}>
        ScrollY: {scrollVal.toFixed(2)}
      </motion.div>

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
              <h1>Hi I am Kara</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sed repellendus maiores possimus expedita
                consequuntur nam. Similique, maxime esse! Ullam deserunt numquam id laboriosam in temporibus quod eveniet corrupti
                ducimus.
              </p>
            </motion.div>
          </motion.div>
          <div className={styles.con} ref={boxRef}>
            <div className={styles.container}>
              <div className={styles.box}></div>
            </div>
          </div>
        </section>
        <section className={styles.sec2}>
        <div className={styles.para1}>
          <p>
            <span>I’m a colour specialist and hairdresser with over 20 years
              in the game</span>, working across every hair texture, every
            shade, every style.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageCon}>
            <img className={styles.image} src={wigs} alt='wigs'/>
          </div>
        </div>
        <div className={styles.para2}>
          <p>
            <span>Hair is my craft, but education is my purpose.</span> I run 
            cutting edge courses built for the next wave of stylists
            those who want to break rules the right way. 
          </p>
        </div>
        <div className={styles.para3}>
          <p>
            <span>My work doesn’t just follow trends it helps
              create them.</span> From the salon floor to the set, I’ve coloured for
            major productions like:
          </p>
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
      <section className={styles.sec4}>
        <div className={styles.imageContainer2}>
          <img className={styles.curlyImage} src={curly} alt='curly hair' />
        </div>
        <div className={styles.con}>
          <div className={styles.para4}>
            <p>
              <span>I’m all about pushing boundaries and raising 
              standards</span> to ensure the future of hairdressing 
              is diverse, skilled, and fearless.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.sec5}>
        <div className={styles.doorsWrapper}>
        <div className={styles.doorsContainer} ref={doorsRef}>
          <motion.img
            className={styles.brazilContainer}
            style={{
               scale: imageScale,
              }}
            src={brazil} alt='Fabulour girl' 
          />
          <motion.div
            className={styles.left}
            style={{
              scaleX: leftScale,
              transformOrigin: "left center"
            }}
          transition={{ease: "easeInOut", duration: 1.5}}
          ></motion.div>
          <motion.div
            className={styles.right}
            style={{
              scaleX: rightScale, transformOrigin: "right center"
            }}
            transition={{ease: "easeInOut", duration: 1.5}}
          ></motion.div>
        </div>
          <motion.div className={styles.para5}>
            <motion.p
              style={{ opacity: paraOpacity, y: paraY }}
            >
            Whether you’re sat in my chair or learning in my
            classroom, you’re getting more than just hair, <span>you’re getting
              experience, vision, and straight-up passion.</span>
          </motion.p>
          
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
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            zIndex: 5,
          }}
        >
          Whether you’re sat in my chair or learning in my classroom...
        </motion.p>
        <img
          src={brazil}
          alt="Revealed content"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
      </section>
    </div>
  )
}

export default Gallery