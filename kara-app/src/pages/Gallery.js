import {React, useRef}  from 'react'
import styles from '../styles/Gallery.module.css'
import { motion, useTransform, useScroll } from 'framer-motion';

const Gallery = () => {
  
  const ref = useRef(null);
  const boxRef = useRef(null);
const { scrollYProgress: boxScrollY } = useScroll({
  target: boxRef,
  offset: ["start end", "start start"] // triggers when box enters and reaches top
});
  const scale = useTransform(boxScrollY, [0, 0.9], [1, 0.65])
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
    </div>
  )
}

export default Gallery