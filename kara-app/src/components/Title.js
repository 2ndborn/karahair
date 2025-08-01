import React from 'react'
import {motion} from 'framer-motion';
import Container from 'react-bootstrap/esm/Container'
import styles from '../styles/Title.module.css'
import useFadeUp from '../hooks/useFadeUp';
import useDynamicColor from '../hooks/useDynamicColor';
import { useScrollToSection } from '../hooks/useScrollToSection';

function Title({title, subtitle}) {
  const isLoaded = useFadeUp(1000);
  const getColor = useDynamicColor();

  const scrollToSection = useScrollToSection();

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
      <div className={styles.Arrow}>
        <button 
          onClick={() => scrollToSection('next-section')}
          className={`${styles.ScrollButton} text-decoration-none`}
          aria-label="Scroll to next section"
        >
        <motion.i 
        className={`${styles.arrowIcon} fa-solid fa-angle-down`}
        animate={{ scale: [1,1.3,1]}}
        transition={{duration: 2, repeat: Infinity}}
        ></motion.i>
        </button>
      </div>
    </div>
  )
}

export default Title