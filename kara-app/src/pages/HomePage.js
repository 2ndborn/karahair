import React from 'react'
import { motion } from 'motion/react';
import styles from '../styles/HomePage.module.css';
import practiceImage from '../assets/practice-image.jpg'

function HomePage() {
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div className={styles.homeContainer}>
      <motion.img
        src={practiceImage}
        alt='out'
        initial="hidden" // Reference the variants
        animate="visible"
        variants={variants}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      />
      <div className={styles.Slogan}>
        <h1>Knowledge</h1>
      </div>
    </motion.div>
  )
}

export default HomePage