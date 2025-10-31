import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import styles from '../styles/MyStory.module.css';
import { Link } from 'react-router-dom';
import { OverlaySection } from '../utils/OverlaySection';
import WorkComponent from './WorkComponent';
import EducatorComponent from './EducatorComponent';

export default function TileComponent({margin, content, renderContent}) {

  const [isToggled, setIsToggled] = useState(null);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] 
  });

  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0,1,0]);
  const opacitySpring = useSpring(opacity, {stiffness: 100, damping: 30, restDelta: 0.001})
  const y = useTransform(scrollYProgress, [0,1], [300, -300])

  const { scrollYProgress: scrollScale } = useScroll({
    target: ref,
    offset: ["start end", "end start"] 
  });

  const scale = useTransform(scrollScale, [0.2, 0.5, 0.8], [0.8, 1, 0.8])

  const {scrollY} = useScroll({target: ref});
  const velocity = useVelocity(scrollY);
  const velocityMap = useTransform(velocity, [-2500, 0, 2500], [-1, 0, 1]);
  const velocitySpring = useSpring(velocityMap, { stiffness: 30, damping: 90 })

  const handleClick = () => {
    setIsToggled(content.id);
  }

  const handleClose = () => {
    setIsToggled(null)
  }

  return (
    <div style={{ height: "150vh", boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{ height: "50vh," }} />
      <motion.div
        ref={ref}
        style={{
          y: velocitySpring,
          position: "sticky",
          top: 60,
          height: "80vh",
          width: "min(95%, 1000px)",
          borderRadius: "15px",
          scale,
          boxShadow: "0px 8px 10px rgba(0,0,0,0.3), 0px 10px 14px rgba(0,0,0,0.5)",
          boxSizing: "border-box",
          margin: margin,
          overflow: "hidden"
        }}
      >
      <img src={content.image} alt='model' style={{ height: "100%", width: "100%", objectFit: "cover" }} />
      <motion.div style={{ opacity: opacitySpring, position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)"}} />
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            opacity: opacitySpring, y,
            display: 'flex', justifyContent: "center", alignItems: "center", textAlign: "center", flexDirection: "column",
            color: "#fff",
          }}>
          {renderContent ? renderContent(content) : (
            <p
              style={{ fontSize: "2rem", color: "rgba(255, 255, 255, 0.8)", paddingLeft: "min(5%, 3rem)", paddingRight: "min(5%, 3rem)" }}
            >
              {(content.id < 5 || content.id === 'paraFive') ? (
                <>
                  <span style={{ fontWeight: "800", color: "#fff" }}>{content.primary}</span>{content.secondary}
                </>
              ) : (
                <>
                  {content.primary}<span style={{ fontWeight: "800", color: "#fff" }}>{content.secondary}</span>
                </>
              )}
            </p>
          )}
        <div>
          {content.id === 4 ? (
            <Link to="/gallery">
              <button className={styles.storyButton}>{content.button}</button>
            </Link>
          ) : (
            !isToggled && (
              <>
                <button 
                  onClick={handleClick}
                  className={styles.storyButton}
                >
                  {content.button}
                </button>
              </>
            )
          )}
        </div>
        </motion.div>
      </motion.div>
        {isToggled &&  (
          <OverlaySection id={isToggled} onClose={handleClose}>
            {isToggled === 1 && (<WorkComponent />)}
            {isToggled === 2 && (<EducatorComponent />)}
          </OverlaySection>
        )}
      <div style={{ height: "50vh," }} />
    </div>
  );
};  