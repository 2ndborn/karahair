import React, { useState } from 'react'
import styles from '../styles/Services.module.css';
import {AnimatePresence, LayoutGroup, motion} from 'framer-motion';

import education from '../assets/karaeducation.webp';
import roc from '../assets/roc.webp';

import Title from '../components/Title';
import { OverlaySection } from '../utils/OverlaySection';

const Services = () => {

  const [isToggled, setIsToggled] = useState(null);

  const handleClick = (section) => {
    setIsToggled(section);
  }

  const handleClose = () => {
      setIsToggled(null);
  }

  return (
    <>
      <Title title="Services" />
      <div id='next-section' className={styles.GridContainer}>
        <div className={styles.header}>Services</div>
        <LayoutGroup>
          <motion.div
            layoutId='hair'
            onClick={() => handleClick('hair')}
            className={styles.hair}
          >
            <motion.img
              className={styles.hairImage}
              src={roc}
              alt="Curly model"
              initial={{ scale: 1, opacity: 1 }}
              animate={isToggled === 'hair' ? { scale: 2, opacity: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className={styles.hairCover}>
              <h1>
                Haircare
              </h1>
            </div>
          </motion.div>
        </LayoutGroup>
        <div className={styles.educate}>
          <img className={styles.edImage} src={education} alt='Students' />
          <div className={styles.edCover}>
            <h1>
              Education
            </h1>
          </div>
        </div>
        <div className={styles.codes}>Affiliate Codes</div>
      </div>
        <LayoutGroup>
          <AnimatePresence>
          {isToggled && (
            <OverlaySection id={'hair'} onClose={handleClose}>
              <div className={styles.closeButton}>
                  <i class="fa-solid fa-xmark"></i>
              </div>
              {isToggled === 'hair' && <h1>Hair tips & products</h1>}
            </OverlaySection>
          )}
          </AnimatePresence>
        </LayoutGroup>
    </>
  )
}

export default Services