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
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Animates when 30% of the element is visible
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1},
              }}
            >
            <motion.h1
              initial={{opacity: 0, x: 250}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: index * 0.8, duration: 0.8, type: "spring", bounce: 0.75}}
              style={{fontSize: "clamp(2rem, 5vw, 4.5rem)"}}
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