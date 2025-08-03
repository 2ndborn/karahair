import React, { useState } from 'react'
import styles from '../styles/Services.module.css';
import {AnimatePresence, LayoutGroup, motion} from 'framer-motion';

import education from '../assets/karaeducation.webp';
import roc from '../assets/roc.webp';

import Title from '../components/Title';
import { OverlaySection } from '../utils/OverlaySection';
import { SectionTile } from '../utils/SectionTile';
import { HairData } from '../serviceData/HairData';
import { AnimateButton } from '../utils/AnimateButton';
import HairComponent from '../components/HairComponent';
import EducationComponent from '../components/EducationComponent';

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
          <AnimatePresence mode='wait'>
          {!isToggled && (
            <>
              <SectionTile
                key="hair"
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
              <SectionTile
                key='educate'
                id='educate'
                imageSrc={education}
                onClick={handleClick}
                isToggled={isToggled}
                tileClassName={styles.educate}
                imageClassName={styles.edImage}
                >
                  <div className={styles.edCover}>
                    <h1>
                      Education
                    </h1>
                  </div>
                </SectionTile>
            </>
          )}
          </AnimatePresence>
        </LayoutGroup>
        <div className={styles.codes}>Affiliate Codes</div>
      </div>
      <LayoutGroup>
        <AnimatePresence mode='wait'>
        {isToggled && (
          <OverlaySection id={isToggled} onClose={handleClose}>
            <div className={styles.closeButton}>
                <i class="fa-solid fa-xmark"></i>
            </div>
            {isToggled === 'hair' && (<HairComponent />)}
            {isToggled === 'educate' && <EducationComponent />}
          </OverlaySection>
        )}
        </AnimatePresence>
      </LayoutGroup>
    </>
  )
}

export default Services