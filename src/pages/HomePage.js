import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import styles from '../styles/HomePage.module.css';
import peach from '../assets/peachone.webp';
import Title from '../components/Title';
import HomeScrollComponent from '../components/HomeScrollComponent';

import { HomePageData } from '../serviceData/HomePageData';
import { Link } from 'react-router-dom';
import IntroScrollComponent from '../components/IntroScrollComponent';

function HomePage() {

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const smoothScale = useSpring(scale, { stiffness: 60, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0,1], [1,0.2]);

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBackground(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, easeOut: "easeOut" }}
      >
        <Title title="K.A.R.A" subtitle="HAIRCARE" />
        <div  id='next-section'>
          <IntroScrollComponent />
        </div>
        <div ref={ref} style={{ height: "1500vh" }} id='next-section'>
          {showBackground && (
            <motion.img
              style={{ scale: smoothScale }}
              src={peach}
              alt='out'
              className={styles.backgroundImage}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          )}
          {HomePageData.map((home) => (
            <HomeScrollComponent key={home.id} {...home} />
          ))}
          {showBackground && (
            <motion.div style={{opacity}} className={styles.homeBackground} />
          )}
          <section
            style={{
              height: "100vh",
              display: "flex", justifyContent: "center",
              alignItems: "center",
              paddingTop: "150px",
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },    
                visible: { opacity: 1, y: 0 }
              }}
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ duration: 0.75, ease: "easeIn", delay: 0.25 }}
              style={{
                display: "flex", justifyContent: "center",
                alignItems: "center", height: "75%", width: "75%",
                flexDirection: "column",
                border: "4px solid #fff", backdropFilter: "blur(4px)", backgroundColor: "#ffffff3b",
                padding: "0 1.4em", boxShadow: "1px 2px 20px rgba(255, 255, 255, 0.5), -1px -2px 20px rgba(255, 255, 255, 0.5)"
              }}
            >
              <div style={{ height: "30%", display: "flex", alignItems: "center", textAlign: "center" }}>
                <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 3.4rem)", color: "#fff", textShadow: "1px 2px 20px rgba(255, 255, 255, 0.5), -1px -2px 20px rgba(255, 255, 255, 0.5)" }}>
                  Give your hair the care it deserves
                </h1>
              </div>
              <div style={{ height: "30%", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/mystory">
                  <motion.button
                    whileHover={{ backgroundColor: "#fff", color: "#000", scale: 1.05 }}
                    style={{ minWidth: "250px", padding: "1em 2em", borderRadius: "1000px", border: "4px solid #fff", margin: "10px", color: "#fff", fontWeight: 700 }}>
                    Learn more
                  </motion.button>
                </Link>
                <Link to="/contactme">
                  <motion.button
                    whileHover={{ backgroundColor: "#8dab16", border: "#8dab16 solid 4px", color: "#fff", scale: 1.05 }}
                    style={{
                      minWidth: "250px", padding: "1em 2em", backgroundColor: "#c3f803ff", color: "#000000be", fontWeight: 700, borderRadius: "1000px", border: "4px solid #c3f803ff", margin: "10px"
                    }}
                  >
                    Book a consultation
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </motion.div>
    </>
  );
}

export default HomePage