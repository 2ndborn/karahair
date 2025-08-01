import React, { useState } from 'react'
import styles from '../styles/Services.module.css';
import {AnimatePresence, LayoutGroup, motion} from 'framer-motion';

import education from '../assets/karaeducation.webp';
import roc from '../assets/roc.webp';

import Title from '../components/Title';
import { OverlaySection } from '../utils/OverlaySection';
import { SectionTile } from '../utils/SectionTile';

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
          <AnimatePresence>
          {!isToggled && (
          <SectionTile
            id={'hair'}
            imageSrc={roc}
            onClick={handleClick}
            isToggled={isToggled}
            tileClassName={styles.hair}
            imageClassName={styles.hairImage}
          >
            <div className={styles.hairCover}>
              <h1>
                Haircare
              </h1>
            </div>
          </SectionTile>
          )}
          </AnimatePresence>
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