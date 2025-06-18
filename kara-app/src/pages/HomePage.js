import React from 'react'
import { motion } from 'motion/react';
import styles from '../styles/HomePage.module.css';
import peach from '../assets/peachone.webp';
import Title from '../components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function HomePage() {
  const homeContent = [
    { title: "KNOWLEDGE", subtitle: "I bring over 2 decades of hair care experience with me. YOUR SAFE IN MY HANDS." },
    { title: "ASSESSMENT", subtitle: "Using the perfected Numan method of consultation." },
    { title: "RESTORE", subtitle: "Let take you on a journey to have you see what you really feel." },
    { title: "ALLURE", subtitle: "You radiate elegance and prestige infecting others with your glow." }
  ];
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 1 } // Ensures staggered effect
    }
  };

  const sloganVariants = {
    hidden: { opacity: 0, x: -250 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <>
      <Title />
      <motion.div id='next-section' className={styles.homeContainer}>
        <motion.img
          src={peach}
          alt='out'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div className={styles.Slogan}>
          <motion.ul
            className='list-unstyled mb-0 mx-5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants} // Controls staggered animation
          >
            {homeContent.map((content, index) => (
              <motion.li
                key={index}
                variants={sloganVariants} // Apply animation to <li> instead of <h1>
                className='mb-4'
              >
                <h1
                  className='text-lg-start text-center display-5'
                >
                  {content.title}
                </h1>
                <h5
                  className='text-lg-start text-center fs-6'
                >
                  {content.subtitle}
                </h5>
              </motion.li>
            ))}
            <div className={`${styles.buttonContainer} d-flex justify-content-center align-items-center`}>
              <Button>Button</Button>
            </div>
          </motion.ul>
        </motion.div>
      </motion.div>
    </>
  );
}

export default HomePage