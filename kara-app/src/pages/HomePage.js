import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll, useSpring, useTransform } from 'motion/react';
import styles from '../styles/HomePage.module.css';
import peach from '../assets/peachone.webp';
import Title from '../components/Title';
import HomeScrollComponent from '../components/HomeScrollComponent';

import {HomePageData} from '../serviceData/HomePageData';
import {data} from '../serviceData/data';
import ExpoComponent from '../components/ExpoComponent';

function HomePage() {

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }
  const buttonControl = useAnimation();

  // useEffect(() => {
  //   buttonControl.start({
  //     scale: [1, 1.05, 1],
  //     boxShadow: [
  //       '0px 2px 0px rgba(0,0,0,0.3)',
  //       '0px 5px 12px rgba(0,0,0,0.4)',
  //       '0px 2px 0px rgba(0,0,0,0.3)'
  //     ],
  //     transition: {duration: 1.5, repeat: Infinity, ease: "easeInOut"}
  //   })
  // }, [buttonControl])

  const ref = useRef(null);
  const {scrollYProgress} = useScroll({target: ref});
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const smoothScale = useSpring(scale, { stiffness: 60, damping: 30 });

  return (
    <>
      <Title title="K.A.R.A" subtitle="HAIRCARE" />
      <div ref={ref} style={{height: "1500vh"}}>
        <motion.img
          style={{scale: smoothScale}}
          src={peach}
          alt='out'
          className={styles.backgroundImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      
      {HomePageData.map((home) => (
        <HomeScrollComponent key={home.id} {...home} />
      ))}
      <div className={styles.homeBackground}></div>
      <section 
      style={{
        height: "100vh",
        display: "flex", justifyContent: "center",
        alignItems: "center",
        paddingTop: "150px",
        }}
      >
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 1, ease: "easeIn"}}
          style={{
            display: "flex", justifyContent: "center",
            alignItems: "center", height: "75%", width: "75%",
            flexDirection: "column",
            border: "4px solid #fff", backdropFilter: "blur(4px)", backgroundColor: "#ffffff3b",
            padding: "0 1.4em", boxShadow: "1px 2px 20px rgba(255, 255, 255, 0.5), -1px -2px 20px rgba(255, 255, 255, 0.5)"
          }}
        >
          <div style={{height: "30%", display: "flex", alignItems: "center", textAlign: "center"}}>
            <h1 style={{fontSize: "clamp(1.7rem, 4vw, 3.4rem)", color: "#fff", textShadow: "1px 2px 20px rgba(255, 255, 255, 0.5), -1px -2px 20px rgba(255, 255, 255, 0.5)"}}>
              Give your hair the care it deserves
            </h1>
          </div>
          <div style={{height: "30%", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap"}}>
            <button style={{minWidth: "250px", padding: "1em 2em", borderRadius: "1000px", border: "4px solid #fff", margin: "10px", color: "#fff", fontWeight: 700}}>
              Learn more
            </button>
            <button
              style={{
                minWidth: "250px", padding: "1em 2em", backgroundColor: "#c3f803ff", color: "#000000be", fontWeight: 700, borderRadius: "1000px", border: "4px solid #c3f803ff", margin: "10px"
              }}
            >Book a consultation</button>
          </div>
        </motion.div>   
      </section>
      </div>
    </>
  );
}

export default HomePage