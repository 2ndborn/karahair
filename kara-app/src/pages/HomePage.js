import React from 'react'
import { motion } from 'motion/react';
import styles from '../styles/HomePage.module.css';
import practiceImage from '../assets/practice-image.jpg'

function HomePage() {
  const slogans = ["Knowledgeble", "Assessment", "Restores", "Allure"];
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  const sloganVarients = {
    hidden: {opacity: 0, y: 75},
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
        <motion.ul className='list-unstyled mb-0 mx-5'>
          {slogans.map((slogan, index) => (
          <motion.li
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Animates when 30% of the element is visible
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.4, duration: 0.6 }},
              }}
            >
            <h1>{slogan}</h1>
          </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}

export default HomePage