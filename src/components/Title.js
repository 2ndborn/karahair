import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import Container from 'react-bootstrap/esm/Container'
import styles from '../styles/Title.module.css'
import useFadeUp from '../hooks/useFadeUp';
import useDynamicColor from '../hooks/useDynamicColor';
import { useScrollToSection } from '../hooks/useScrollToSection';

function Title({title, subtitle}) {
  const isLoaded = useFadeUp(1000);
  const getColor = useDynamicColor();

  const scrollToSection = useScrollToSection();
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(prev => !prev)
    }, 2000);
    return () => clearInterval(interval)
  }, [])

  // const scrollToNext = () => {
  //   document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div 
      id="title-container" 
      style={{backgroundColor: getColor("title")}}
      className={`${styles.TitleContainer} ${styles.ColorNav}`}
    >
        <Container className='text-center'>
            {isLoaded && (
              <>
              <motion.h1
              initial={{ opacity: 0, y: 50}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              >
                {title}
              </motion.h1>
              <motion.h6
              initial={{ opacity: 0, y: 50}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut"}}
              >
                {subtitle}
              </motion.h6>
              </>
            )}
      </Container>
      {isLoaded && 
        <>
      <div className={styles.Arrow}>
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          onClick={() => scrollToSection('next-section')}
          className={`${styles.ScrollButton} text-decoration-none`}
          aria-label="Scroll to next section"
        >
          <AnimatePresence mode='wait'>
            {showText ? (
              <motion.span
                key="text"
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 1.2}}
                transition={{ duration: 0.3}}
                className={styles.titleScroll}
              >
                <h6 style={{margin: 0}}>Keep</h6>
                <h6>Scrolling</h6>
              </motion.span>
            ) : (
              <motion.i
                key="icon"
                className={`${styles.arrowIcon} fa-solid fa-angle-down`}
                initial={{opacity: 0, scale: 0.8}}
                animate={{ opacity: 1, scale: 2}}
                exit={{opacity: 0, scale: 1.2}}
                transition={{ duration: 0.3 }}
              ></motion.i>
              )}
          </AnimatePresence>
        </motion.button>
      </div>
      </>}
    </div>
  )
}

export default Title