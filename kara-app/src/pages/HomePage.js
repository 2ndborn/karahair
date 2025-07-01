import React, { useEffect } from 'react'
import { motion, useAnimation } from 'motion/react';
import styles from '../styles/HomePage.module.css';
import peach from '../assets/peachone.webp';
import Title from '../components/Title';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { Reveal } from '../utils/Reveal';
import { AnimateButton } from '../utils/AnimateButton';
import { Link } from 'react-router-dom';

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

  const buttonControl = useAnimation();

  useEffect(() => {
    buttonControl.start({
      scale: [1, 1.05, 1],
      boxShadow: [
        '0px 2px 0px rgba(0,0,0,0.3)',
        '0px 5px 12px rgba(0,0,0,0.4)',
        '0px 2px 0px rgba(0,0,0,0.3)'
      ],
      transition: {duration: 1.5, repeat: Infinity, ease: "easeInOut"}
    })
  }, [buttonControl])

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
      <div className={styles.homeBackground}></div>
      <motion.div id='next-section' className={`${styles.homeContainer} mx-auto`}>
        {homeContent.map((content, index) => (
          <section key={index} id={`section-${index}`} className={styles.sloganText}>
            <div className={styles.headingGroup}>
              <Reveal
                variants={{
                  hidden: { opacity: 0, scale: 0},
                  visible: { opacity: 1, scale: [0, 1.4, 1]}
                }}
                transition={{duration: 2, ease: 'easeInOut'}}
              >
                <h1 className='display-1'>{content.title}</h1>
              </Reveal>
              <Reveal
                variants={{
                  hidden: { opacity: 0, scale: 0},
                  visible: { opacity: 1, scale: [0, 1.4, 1]}
                }}
                transition={{duration: 2, delay: 0.8, ease: 'easeInOut'}}
              >
                <h5>{content.subtitle}</h5>
              </Reveal>
            </div>
            {index < homeContent.length - 1 ? (
              <div className={styles.buttonWrapper}>
                <Reveal>
                  <motion.button
                    className={styles.scrollButton}
                    onClick={() => scrollToSection(`section-${index + 1}`)}
                    aria-label="Scroll to next section"
                  >
                    <motion.i
                      className={`${styles.arrowIcon} fa-solid fa-angle-down`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.i>
                  </motion.button>
                </Reveal>
              </div>
            ) : (
                <div className={styles.contactButtonWrapper}>
                  <Reveal delay={1.3}>
                    <Link to="/contactme">
                      <AnimateButton className={`${styles.contactButton}`}>
                        Contact me now
                      </AnimateButton>
                    </Link>
                    {/* <motion.button
                     className={styles.contactButton}
                     animate={buttonControl}
                     whileHover={{scale: 1.05}}
                     whileTap={{scale: 0.95, borderColor: '#000' }}
                    >
                      Contact me now
                    </motion.button> */}
                  </Reveal>
                </div>
            )}
          </section>
        ))}
      </motion.div>
    </>
  );
}

export default HomePage