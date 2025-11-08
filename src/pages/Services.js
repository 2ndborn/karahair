import React, { useEffect, useState } from 'react'
import styles from '../styles/Services.module.css';
import {AnimatePresence, LayoutGroup, motion} from 'framer-motion';

import coach from '../assets/coach.JPG';
import treatment from '../assets/treatmenttwo.webp';
import boucleme from '../assets/boucleme.JPG';

import Title from '../components/Title';
import { OverlaySection } from '../utils/OverlaySection';
import { SectionTile } from '../utils/SectionTile';
import HairComponent from '../components/HairComponent';
import EducationComponent from '../components/EducationComponent';
import AffiliateComponent from '../components/AffiliateComponent';

const Services = () => {

  const [isToggled, setIsToggled] = useState(null);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBackground(true)
    }, 500)
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = (section) => {
    setIsToggled(section);
  }

  const handleClose = () => {
      setIsToggled(null);
  }

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, easeOut: "easeOut" }}
      >
        <Title title="Services" />
        {showBackground && (
          <div id='next-section' className={styles.GridContainer}>
            <LayoutGroup>
              <AnimatePresence mode='wait'>
                {!isToggled && (
                  <>
                    <SectionTile
                      key="hair"
                      id={'hair'}
                      imageSrc={treatment}
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
                      imageSrc={coach}
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
                    <SectionTile
                      key="codes"
                      id="codes"
                      imageSrc={boucleme}
                      onClick={handleClick}
                      isToggled={isToggled}
                      tileClassName={styles.codes}
                      imageClassName={styles.codeImage}
                    >
                      <div className={styles.codeCover}>
                        <h1>
                          Affiliate Codes
                        </h1>
                      </div>
                    </SectionTile>
                  </>
                )}
              </AnimatePresence>
            </LayoutGroup>
          </div>
        )}
        <LayoutGroup>
          <AnimatePresence mode='wait'>
            {isToggled && (
              <OverlaySection id={isToggled} onClose={handleClose}>
                {isToggled === 'hair' && (<HairComponent />)}
                {isToggled === 'educate' && <EducationComponent />}
                {isToggled === 'codes' && <AffiliateComponent />}
              </OverlaySection>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </motion.div>
    </>
  )
}

export default Services