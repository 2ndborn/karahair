import React from 'react'
import { motion } from 'motion/react';
import styles from '../styles/HomePage.module.css';
import peach from '../assets/peach.jpg';

function HomePage() {
  const homeContent = [
    {title: "KNOWLEDGE", subtitle: "I bring over 2 decades of hair care experience with me. YOUR SAFE IN MY HANDS."},
    {title: "ASSESSMENT", subtitle: "Using the perfected Numan method of consultation."},
    {title: "RESTORE", subtitle: "Let take you on a journey to have you see what you really feel."},
    {title: "ALLURE", subtitle: "You radiate elegance and prestige infecting others with your glow."}
  ];
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div className={styles.homeContainer}>
      <motion.img
        src={peach}
        alt='out'
        initial="hidden" // Reference the variants
        animate="visible"
        variants={variants}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      />
      <motion.div className={styles.Slogan}>
        <motion.ul className='list-unstyled mb-0 mx-5'>
          {homeContent.map((content, index) => (
            <motion.li
              key={index}
              initial="hidden"
              animate="visible"
              variants={{hidden: {opacity: 0, scale: 0}, visible: {opacity: 1, scale: 1}}}
              transition={{ duration: 1, delay: 2.5, ease: "easeOut"}}
            >
            <motion.h1
              style={{fontSize: "clamp(5rem, 4vw, 7rem)"}}
              className='text-md-start text-center'
            >
              {content.title}
            </motion.h1>
          </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}

export default HomePage