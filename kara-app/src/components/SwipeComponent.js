import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import kara from '../assets/karapic.webp';
import styles from '../styles/Gallery.module.css';
// Custom hook for screen size
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

export default function SwipeComponent() {
  const isMobile = useIsMobile();
const welcomeRef = useRef(null);
  const {scrollYProgress: welcomeScroll} = useScroll({
    target: welcomeRef,
    offset: ["start end", "end end"],
  });
  const gradientProgress = useTransform(welcomeScroll, [0,1], [20,100]);
  const backgroundStyle = useTransform(gradientProgress, (val) => 
    `linear-gradient(to right, #fff ${val}%, transparent)`
  );
  const welcomeScale = useTransform(welcomeScroll, [0, 1], [1.05, 0.9])

  const {scrollYProgress: welcomeParagraph} =useScroll({
    target: welcomeRef,
    offset: ["start end", "end start"],
  });

  const welcomeOpacity = useTransform(welcomeParagraph, [0.2, 0.4, 0.6], [0, 1, 0]);
  const welcomeSmooth = useSpring(welcomeOpacity, {stiffness: 100, damping: 30, restDelta: 0.001})
  const WelcomeY = useTransform(welcomeParagraph, [0, 1], [-25, 25]);

  const welcomeRefMob = useRef(null);
  const {scrollYProgress: welcomeScrollMob} = useScroll({
    target: welcomeRefMob,
    offset: ["start end", "end end"],
  });
  const gradientProgressMob = useTransform(welcomeScrollMob, [0,1], [-50, 100]);
  const backgroundStyleMob = useTransform(gradientProgressMob, (val) => 
    `linear-gradient(to top, #f1e7dd ${val}%, transparent)`
  ); 
  const welcomeScaleMob = useTransform(welcomeScrollMob, [0, 1], [1.05, 0.9])

  const {scrollYProgress: welcomeParagraphMob} = useScroll({
    target: welcomeRefMob,
    offset: ["start end", "end start"],
  });

  const welcomeOpacityMob = useTransform(welcomeParagraphMob, [0.2, 0.4, 0.6], [0, 1, 0]);
  const welcomeSmoothMob = useSpring(welcomeOpacityMob, {stiffness: 100, damping: 30, restDelta: 0.001})
  const WelcomeYMob = useTransform(welcomeParagraphMob, [0, 1], [-50, 50]);


  return isMobile ? (
    <section className={styles.sec} ref={welcomeRefMob}>
      <motion.div
        className={styles.secContainerOne}
        style={{ scale: welcomeScaleMob }}
      >
        <div className={styles.secImageContainer}>
          <img className={styles.secImage} src={kara} alt='test' />
        </div>
        <motion.div
          style={{ position: "absolute", inset: 0, backgroundImage: backgroundStyleMob }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.div>
      <div className={styles.secContainerTwo}>
        <div className={styles.leftQuoteContainer}>
          <i style={{ fontStyle: "oblique" }} className={`fa-solid fa-quote-left`}></i>
        </div>
        <div className={styles.rightQuoteContainer}>
          <i style={{ fontStyle: "oblique" }} className={`fa-solid fa-quote-right`}></i>
        </div>
        <motion.div
          className={styles.secContentContainer}
          style={{ opacity: welcomeSmoothMob, y: WelcomeYMob }}
        >
          <h1 style={{ marginBottom: "3rem" }}>
            Hi I am Kara!!!
          </h1>
          <h4 style={{ textAlign: "center", fontStyle: "oblique" }}>
            I am obessed with that moment when a client looks into the mirror
            and sees not just restoration, but the actualised
            version of their internal self staring back at them.
            I am immediately reminded why I do this.
          </h4>
        </motion.div>
      </div>
    </section>
  ) : (
    <section className={styles.sec} ref={welcomeRef}>
      <motion.div
        className={styles.secContainerOne}
        style={{ scale: welcomeScale }}
      >
        <div className={styles.secImageContainer}>
          <img className={styles.secImage} src={kara} alt='test' />
        </div>
        <motion.div
          style={{ position: "absolute", inset: 0, backgroundImage: backgroundStyle }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.div>
      <div className={styles.secContainerTwo}>
        <div className={styles.leftQuoteContainer}>
          <i style={{ fontStyle: "oblique" }} className={`fa-solid fa-quote-left`}></i>
        </div>
        <div className={styles.rightQuoteContainer}>
          <i style={{ fontStyle: "oblique" }} className={`fa-solid fa-quote-right`}></i>
        </div>
        <motion.div
          className={styles.secContentContainer}
          style={{ opacity: welcomeSmooth, y: WelcomeY }}
        >
          <h1 style={{ marginBottom: "3rem" }}>
            Hi I am Kara!!!
          </h1>
          <h4 style={{ textAlign: "center", fontStyle: "oblique" }}>
            I am obessed with that moment when a client looks into the mirror
            and sees not just restoration, but the actualised
            version of their internal self staring back at them.
            I am immediately reminded why I do this.
          </h4>
        </motion.div>
      </div>
    </section>
  );
}