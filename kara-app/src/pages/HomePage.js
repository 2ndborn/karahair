import React from 'react'
import { motion } from 'motion/react';
import styles from '../styles/HomePage.module.css';
import practiceImage from '../assets/practice-image.jpg'

function HomePage() {
  const homeContent = [
    {title: "Knowledgeble", subtitle: "I bring over 2 decades of hair care experience with me. YOUR SAFE IN MY HANDS."},
    {title: "Assessment", subtitle: "Using the perfected Numan method of consultation."},
    {title: "Restores", subtitle: "Let take you on a journey to have you see what you really feel."},
    {title: "Allure", subtitle: "You radiate elegance and prestige infecting others with your glow."}
  ];
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
          {homeContent.map((content, index) => (
            <motion.li
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Animates when 30% of the element is visible
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 }},
              }}
            >
            <motion.h1
              initial={{opacity: 0, x: 250}}
              whileInView={{opacity: 1, x: 0}}
              transition={{delay: index * 0.8, duration: 0.8}}
              style={{fontSize: "clamp(2rem, 5vw, 4.5rem)"}}
            >
              {content.title}
            </motion.h1>
            <motion.h6
              initial={{opacity: 0, x: -250}}
              whileInView={{opacity: 1, x: 0}}
              transition={{delay: index * 0.8 + 0.3, duration: 0.8 }}
              style={{fontSize: "clamp(0.1rem, 5vw, 1rem)"}}
            >
              {content.subtitle}
            </motion.h6>
          </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}

export default HomePage