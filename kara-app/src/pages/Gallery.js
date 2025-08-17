import {React, useRef}  from 'react'
import styles from '../styles/Gallery.module.css'
import { motion, useTransform, useScroll } from 'framer-motion';

import wigs from '../assets/wigs.webp';

const Gallery = () => {
  
  const ref = useRef(null);
  const boxRef = useRef(null);
  const workRef= useRef(null);
  const { scrollYProgress: boxScrollY } = useScroll({
    target: boxRef,
    offset: ["start end", "start start"] // triggers when box enters and reaches top
  });
  const {scrollYProgress: workScrollX} = useScroll({
    target: workRef,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(boxScrollY, [0, 0.9], [1, 0.65])
  const x = useTransform(workScrollX, [0,1], [2000 , -2500])
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
      <section className={styles.sec3}>
        <div className={styles.workContainer}>
          <motion.div
            className={styles.work}
            ref={workRef}
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
    </div>
  )
}

export default Gallery