import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react'
import styles from '../styles/HomePage.module.css';


const ExpoComponent = ({title, head, content, image, rowReverse}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref})
    const x = useTransform(scrollYProgress, [0,1], ["80%", "-80%"])

    const target = useRef(null);
    const {scrollYProgress: targetYProgress} = useScroll({
      target: target,
      offset: ["start end", "end start"]
    })
    const opacity = useTransform(targetYProgress, [0.25, 0.5, 0.75], [0, 1, 0])
    const y = useTransform(targetYProgress, [0, 1], [250, -250])


  return (
    <>
      <section ref={ref} style={{position: "relative", height: "200vh"}}>
          <div  style={{position: "sticky", top: "100px", height: "80vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
              <motion.div style={{x, display: "flex" }}>
                      <motion.div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 5px"}}>
                          <h1 style={{ color: "transparent", fontSize: "20rem", fontWeight: 800, WebkitTextStroke: "10px #fff" }}>{title}</h1>
                      </motion.div>
              </motion.div>
          </div>
      </section>
      <section className={styles.cont} ref={target}>
        <motion.div className={styles.contentTitle} style={{opacity, y}}>
          <h3 style={{fontSize: "clamp(2rem, 4vw, 4rem)"}}>{head}</h3>
        </motion.div>
      <motion.div style={{opacity, y}} className={rowReverse ? 
        `${styles.expoContainer} ${styles.rowReverse}` :
         styles.expoContainer}>
          <div className={styles.content}>
            <p style={{ padding: "min(5rem, 8%)", fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
              {content}
            </p>
          </div>
          <div className={styles.content}>
            <div style={{ height: "65%", width: "80%", backgroundColor: "#000" }}>
              <img src={image} alt='color' style={{ height: "100%", width: "100%", backgroundPosition: "cover" }} />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default ExpoComponent