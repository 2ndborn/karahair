import React, { useState } from 'react'
import styles from '../styles/Services.module.css';
import {AnimatePresence, LayoutGroup, motion} from 'framer-motion';

import education from '../assets/karaeducation.webp';
import roc from '../assets/roc.webp';

import Title from '../components/Title';
import { OverlaySection } from '../utils/OverlaySection';
import { SectionTile } from '../utils/SectionTile';
import { HairData } from '../serviceData/HairData';

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
            {isToggled === 'hair' && (
              <div>
                <div>
                  <h1>Haircare</h1>
                  <p>
                    Hair artistry with care at the centre. All services are tailored for
                    all hair textures, using health-conscious products that protect the
                    integrity of your hair and scalp. We work with colour ranges derived
                    from natural ingredients, infused with coconut oil, PPD-free formulas,
                    and vegan options.
                  </p>
                </div>
                <div className={styles.serviceContainer}>
                  {HairData.map((d) => (
                    <div key={d.index} className={styles.grid}>
                      <h2>{d.heading}</h2>
                      <p>{d.content}</p>
                    </div>
                  ))}
                </div>
                  <div className={styles.contactButtonWrapper}>
                    <button className={styles.contactButton}>
                      Book Consultation now!!!
                    </button>
                  </div>
                <div>
                  <p>
                    Please note: A patch test is required at least 48 hours prior to any
                    colour service your safety and scalp health always come first.
                  </p>
                </div>
              </div>
            )}
            {isToggled === 'educate' && <h1>Education resources & guides</h1>}
          </OverlaySection>
        )}
        </AnimatePresence>
      </LayoutGroup>
    </>
  )
}

export default Services