import React, { useState } from 'react'
import styles from '../styles/Services.module.css';
import {LayoutGroup, motion} from 'framer-motion';

import education from '../assets/karaeducation.webp';
import roc from '../assets/roc.webp';

import Title from '../components/Title';

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
            <img className={styles.hairImage} src={roc} alt='Curly model' />
            <div
              onClick={handleClick}
              className={styles.hairCover}>
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
      {isToggled && (
        <LayoutGroup>
          <motion.div
            layoutId='hair'
            onClick={handleClose}
            className={styles.overlay}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeIn"}}
          >
            <div className={styles.overlayContent}>
              {isToggled === 'hair' && <h1>Hair tips & products</h1>}
            </div>
          </motion.div>
        </LayoutGroup>
      )}
    </>
  )
}

export default Services