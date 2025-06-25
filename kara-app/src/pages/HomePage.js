import React from 'react'
import { motion } from 'motion/react';
import styles from '../styles/HomePage.module.css';
import peach from '../assets/peachone.webp';
import Title from '../components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useScrollToSection } from '../hooks/useScrollToSection';

function HomePage() {
  const homeContent = [
    { title: "KNOWLEDGEBLE", subtitle: "I bring over 2 decades of hair care experience with me. YOUR SAFE IN MY HANDS." },
    { title: "ANALYSIS", subtitle: "Using the perfected Numan method of consultation." },
    { title: "RESTORES", subtitle: "Let take you on a journey to have you see what you really feel." },
    { title: "ALLUREMENT", subtitle: "You radiate elegance and prestige infecting others with your glow." }
  ];
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  const scrollToSection = useScrollToSection();

  // const listVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { staggerChildren: 1 } // Ensures staggered effect
  //   }
  // };

  // const sloganVariants = {
  //   hidden: { opacity: 0, x: -250 },
  //   visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  // };

  return (
    <>
      <Title />
      <motion.img
        src={peach}
        alt='out'
        className={styles.backgroundImage}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div id='next-section' className={styles.homeContainer}>
        {homeContent.map((content, index) => (
          <section key={index} id={`section-${index}`} className={styles.sloganText}>
            <div className={styles.headingGroup}>
              <h1>{content.title}</h1>
              <h5>{content.subtitle}</h5>
            </div>
            {index < homeContent.length - 1 && (
              <button
              className={styles.scrollButton}
              onClick={() => scrollToSection(`section-${index + 1}`)}
              aria-label="Scroll to next section"
              >
                <motion.i
                  className={`${styles.arrowIcon} fa-solid fa-angle-down`}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.i>
              </button>
            )}
          </section>
        ))}
        <div className={styles.buttonContainer}>
          <Button>Contact Me Now</Button>
        </div>
      </motion.div>
    </>
  );
}

export default HomePage