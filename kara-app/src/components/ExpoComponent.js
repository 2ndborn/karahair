import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react'
import styles from '../styles/HomePage.module.css';
import colorchart from '../assets/colorchart.webp'

const ExpoComponent = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref})
    const x = useTransform(scrollYProgress, [0,1], ["80%", "-80%"])

    const data = ["K","N","O","W","L","E","D","G","E"]

  return (
    <>
      <section ref={ref} style={{position: "relative", height: "200vh"}}>
          <div  style={{position: "sticky", top: "100px", height: "80vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
              <motion.div style={{x, display: "flex" }}>
                  {data.map((d) =>
                      <motion.div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 5px"}}>
                          <h1 style={{ color: "transparent", fontSize: "20rem", fontWeight: 800, WebkitTextStroke: "10px #fff" }}>{d}</h1>
                      </motion.div>
                  )}
              </motion.div>
          </div>
      </section>
      <section className={styles.cont}>
        <div className={styles.contentTitle}>
          <h3>Knowledge</h3>
        </div>
        <div className={styles.expoContainer}>
          <div className={styles.content}>
            <p style={{ padding: "min(5rem, 8%)", fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
              Your comfort and confidence are my highest priorities.
              For over two decades, I’ve had the privilege of supporting
              a diverse range of clients with their hair needs.
              Through years of dedicated practice, my skills in nurturing,
              styling, and colouring have evolved to an expert level ensuring
              every client feels seen, celebrated, and beautifully cared for.
            </p>
          </div>
          <div className={styles.content}>
            <div style={{ height: "65%", width: "80%", backgroundColor: "#000" }}>
              <img src={colorchart} alt='color' style={{ height: "100%", width: "100%", backgroundPosition: "cover" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExpoComponent