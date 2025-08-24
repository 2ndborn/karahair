import {React, useRef}  from 'react'
import styles from '../styles/Gallery.module.css'
import { motion, useTransform, useScroll, useInView } from 'framer-motion';

import wigs from '../assets/wigs.webp';
import curly from '../assets/curly.webp';
import brazil from '../assets/brazil.webp';

const Gallery = () => {

  const ref = useRef(null);
  const boxRef = useRef(null);
  const workRef = useRef(null);
  const { scrollYProgress: boxScrollY } = useScroll({
    target: boxRef,
    offset: ["start end", "start start"] // triggers when box enters and reaches top
  });
  const {scrollYProgress: workScrollX} = useScroll({
    target: workRef,
  });

  const scale = useTransform(boxScrollY, [0, 0.9], [1, 0.65]);
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
            <img className={styles.image} src={wigs} alt='wigs' />
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