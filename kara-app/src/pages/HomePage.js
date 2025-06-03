import React from 'react'
import { motion } from 'motion/react';
import styles from '../styles/HomePage.module.css';
import practiceImage from '../assets/practice-image.jpg'

function HomePage() {
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  const sloganVarients = {
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 0.8},
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
      <motion.div
        initial="hidden"
        variants={sloganVarients}
        whileInView={{opacity: 0.8, y: 0}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={styles.Slogan}
      >
        <ul className='list-unstyled mb-0 mx-5'>
          <li><h1>Knowledgeble</h1></li>
          <li><h1>Assessment</h1></li>
          <li><h1>Restores</h1></li>
          <li><h1>Allure</h1></li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default HomePage