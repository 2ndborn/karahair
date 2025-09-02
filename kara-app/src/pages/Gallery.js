import { React, useEffect, useRef, useState } from 'react'
import styles from '../styles/Gallery.module.css'
import { motion, useTransform, useScroll, useInView, useAnimation, useSpring, useMotionValueEvent, AnimatePresence, useVelocity } from 'framer-motion';

import kara from '../assets/karapic.webp'
import wigs from '../assets/wigs.webp';
import curly from '../assets/curly.webp';
import brazil from '../assets/brazil.webp';
import bel from '../assets/bel.webp';
import jane from '../assets/jane.webp';
import forsytes from '../assets/forsytes.webp';
import treason from '../assets/treason.webp';
import { useScrollFade } from '../hooks/useScrollFade';
import { paragraphs } from '../serviceData/paragraphData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ScrollAnimatedComponent from '../components/ScrollAnimatedComponent';
import ScrollAnimateMobile from '../components/ScrollAnimateMobile';

const Gallery = () => {

  const ref = useRef(null);
  const boxRef = useRef(null);
  const workRef = useRef(null);
  const para0Ref = useRef(null);
  const sec4Ref = useRef(null);


  const { scrollYProgress: boxScrollY } = useScroll({
    target: boxRef,
    offset: ["start end", "start start"] // triggers when box enters and reaches top
  });
  const { scrollYProgress: workScrollX } = useScroll({
    target: workRef,
  });
  const { scrollYProgress: para1ScrollY } = useScroll({
    target: para0Ref,
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: sec4ScrollY } = useScroll({
    target: sec4Ref,
    offset: ["end end", "end start"]
  })

  const { scrollYProgress: sec4ParaScrollY } = useScroll({
    target: sec4Ref,
    offset: ["start end", "end start"]
  })

  const sec4Scale = useTransform(sec4ScrollY, [0, 1], [1, 0.85]);
  const sec4Opacity = useTransform(sec4ScrollY, [0, 1], [1, 0]);
  const paraY = useTransform(sec4ParaScrollY, [0, 1], [250, -250]);
  const paraYOpacity = useTransform(sec4ParaScrollY, [0.25, 0.5, 0.75], [0, 1, 0]);

  const scale = useTransform(boxScrollY, [0, 0.9], [1, 0.65]);
  const opacity = useTransform(boxScrollY, [0, 0.5], [0, 1]);
  const smoothOpacity = useSpring(opacity, { stiffness: 20, damping: 20, mass: 1 });
  const spanOne = useTransform(para1ScrollY, [0, 0.3], [0, 1]);
  const spanTwo = useTransform(para1ScrollY, [0.4, 0.55], [0, 1]);
  const smoothSpanOne = useSpring(spanOne, { stiffness: 40, damping: 20 });
  const smoothSpanTwo = useSpring(spanTwo, { stiffness: 40, damping: 20 });
  const x = useTransform(workScrollX, [0, 1], ["5%", "-75%"]);

  const isInView = useInView(ref, { once: false, margin: '-20% 0px' });

  const images = [
    { image: wigs, label: "wig making" },
    { image: kara, label: "owner" },
    { image: brazil, label: "model" },
  ];

  const { ref: paraRefOne, inView: inViewOne } = useScrollReveal();
  const { ref: paraRefTwo, inView: inViewTwo } = useScrollReveal();
  const { ref: paraRefThree, inView: inViewThree } = useScrollReveal();

  useEffect(() => {
    if (inViewOne) setActiveIndex(0);
    else if (inViewTwo) setActiveIndex(1);
    else if (inViewThree) setActiveIndex(2);
  }, [inViewOne, inViewTwo, inViewThree]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paraOne, paraTwo, paraThree] = paragraphs;

  const targetRef = useRef(null);

  const {scrollYProgress: testScrollY} = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
  })

  const targetScale = useTransform(testScrollY, [0, 1], [1, 0.85]);
  const targetScaleOne = useSpring(targetScale, {stiffness: 100, damping: 30, restDelta: 0.001})

  const {scrollYProgress: testScrollParaY} = useScroll({
    target: targetRef,
    offset: ["start end", "end start"] // start of the element meets the end of the view. End of the element meets the start of the viewport
  })

  const testOpacity = useTransform(testScrollParaY, [0, 0.5, 1], [0,1,0]);
  const testOpacityOne = useSpring(testOpacity, {stiffness: 100, damping: 30, restDelta: 0.001})
  const testParaY = useTransform(testScrollParaY, [0, 1], [250, -250]);

  const {scrollY: velScrollY} = useScroll({target: paraRefOne});
  const velocity = useVelocity(velScrollY);
  const smoothScroll = useTransform(velocity, [-3000, 0, 3000], [-1,0,1])
  const smoothedScroll = useSpring(smoothScroll, {stiffness: 30, damping: 90})

  const workArray = [
    {
      id: 1,
      company: "ITV",
      title: "Belgravia The Next Chapter",
      image: bel,
    },
    {
      id: 2,
      company: "Amazon Prime",
      title: "My Lady Jane",
      image: jane,
    },
    {
      id: 3,
      company: "Channel 5",
      title: "The Forsytes",
      image: forsytes,
    },
    {
      id: 4,
      company: "Netflix",
      title: "Treason",
      image: treason,
    },
  ];

  return (
    <div>
      {/* <section className={styles.sec}>
          <motion.div 
            className={styles.intro}
          >
            <motion.div
            className={styles.text}
            style={{
            transformOrigin: "left center",
            scale }}
            >
              <motion.h1
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
              >
                Hi I am Kara
              </motion.h1>
              <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 1.5, ease: "easeIn" }}
              >
                That moment when a client looks into the mirror
                  and sees not just a fresh style, but the actualised
                  version of their internal self staring back at them.
                  That’s why I do what I do.
              </motion.p>
            </motion.div>
          </motion.div>
          <div className={styles.con} ref={boxRef}>
            <div className={styles.container}>
              <motion.img
                className={styles.karaImage}
                style={{opacity: smoothOpacity}}
                src={kara}
                alt="owner"
              />
            </div>
          </div>
      </section> */}
      <section className={styles.sec1}>
        <div className={styles.para1} ref={para0Ref}>
          <p>
            <motion.span
              style={{ opacity: smoothSpanOne }}
            >
              I’m a colour specialist and hairdresser with over 20 years
              in the game
            </motion.span>
            <motion.span style={{ opacity: smoothSpanTwo }}>
              , working across every hair texture, every
              shade, every style.
            </motion.span>
          </p>
        </div>
      </section>
      {/* <section className={styles.sec2}>
        <div className={styles.test}>
        <div className={styles.imageContainer}>
          <div className={styles.imageCon}>
            <AnimatePresence mode='wait'>
              <motion.img
                key={activeIndex}
                src={images[activeIndex]?.image}
                alt={images[activeIndex]?.label}
                className={styles.image}
                initial={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, y: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.5, ease:"easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div className={styles.para3}>
          <motion.p
            ref={paraRefOne}
            style={{willChange: "opacity, transform"}}
            initial={{ opacity: 0 }}
            animate={{
              opacity: inViewOne ? 1 : 0,
              transform: inViewOne ? "scale(1)" : "scale(1.02)"
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <strong>{paraOne.primary}</strong>{paraOne.secondary}
          </motion.p>
        </div>
        <div className={styles.para3}>
          <motion.p 
            ref={paraRefTwo}
            style={{willChange: "opacity, transform"}}
            initial={{opacity: 0}}
            animate={{
              opacity: inViewTwo ? 1 : 0,
              transform: inViewTwo ? "scale(1)" : "scale(1.02)"
            }}
            transition={{ duration: 0.5, ease:"easeInOut"}}
          >
            <strong>{paraTwo.primary}</strong> {paraTwo.secondary}
          </motion.p>
        </div>
        <div className={styles.para3}>
          <motion.p 
            ref={paraRefThree}
            initial={{opacity: 0}}
            animate={{
              opacity: inViewThree ? 1 : 0,
              transform: inViewThree ? "scale(1)" : "scale(1.02)"
            }}
            transition={{ duration: 0.5, ease:"easeInOut"}}
          >
            <strong>{paraThree.primary}</strong> {paraThree.secondary}
          </motion.p>
        </div>
        </div>
      </section> */}
      <ScrollAnimatedComponent 
        content={paraOne} 
        backgroundImage={"radial-gradient(140% 140% at 60% 0%, #fff, #f1e7dd)"} 
        marginBottom={"25px"}
      />
      <ScrollAnimatedComponent 
        content={paraTwo} 
        backgroundImage={"radial-gradient(140% 140% at 30% 0%, white, #a0c4ff)"}
        marginBottom={"25px"} 
        flexDirection={"row-reverse"} 
      />
      <ScrollAnimatedComponent 
        content={paraThree} 
        backgroundImage={"radial-gradient(140% 140% at 60% 0%, #fff, #ca8383)"}
        marginBottom={"0px"}  
      />
      <ScrollAnimateMobile content={paraOne} />
      <section style={{position: "relative", height: "100vh", padding: "1rem"}} >
        <motion.div
          ref={targetRef}
          style={{
            scale: targetScaleOne, opacity: testOpacityOne, y: smoothedScroll,
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "center",
            height: "95vh",
            width: "100%",
            backgroundImage: "radial-gradient(160% 130% at 50% 0%, white, #d9b9a0)",
            padding: "20px",
            boxSizing: "border-box",
            borderRadius: "15px",
          }}
        >
          <motion.div style={{
            // position: "absolute",
            // inset: 0,
            height: "40vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            zIndex: 5, // make sure it sits above the image if needed
            overflow: "hidden",
          }}>
            <motion.div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              fontSize: "1.5rem",
              textAlign: "center",
            }}>
              <p><strong>{paraOne.primary}</strong>{paraOne.secondary}</p>
            </motion.div>
          </motion.div>
          <div style={{position: "relative", height: "100%", width: "100%", borderRadius: "10px", 
            overflow: "hidden",
            boxShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px, 5px 5px 10px rgba(0, 0, 0, 0.2)",
            }}>
            <img style={{height: "100%", width: "100%", objectFit: "cover"}} src={paraOne.image} alt='kara' />
            <div style={{position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)"}} />
          </div>
        </motion.div>
      </section>

      <section className={styles.sec3} ref={workRef}>
        <div className={styles.workContainer}>
          <motion.div
            className={styles.work}
            style={{ x }}
          >
            {workArray.map((work) => (
              <motion.div
                key={work.id}
                className={styles.cards}
              >
                <motion.img
                  src={work.image}
                  alt='studio'
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "fill"
                  }}
                />
              </motion.div>
            )
            )}
          </motion.div>
        </div>
      </section>
      <section className={styles.sec4} >
        <motion.div className={styles.imageContainer2} ref={sec4Ref} style={{ scale: sec4Scale }}>
          <img className={styles.curlyImage} src={curly} alt='curly hair' />
          <motion.div className={styles.secFourOverlay} style={{ opacity: sec4Opacity }} />
        </motion.div>
        <motion.div
          className={styles.para4}
          style={{ y: paraY, opacity: paraYOpacity }}
        >
          <motion.div className={styles.innerContainer} style={{ opacity: sec4Opacity }}>
            <p>
              <strong>I’m all about pushing boundaries and raising
                standards</strong> to ensure the future of hairdressing
              is diverse, skilled, and fearless.
            </p>
          </motion.div>
        </motion.div>
      </section>
      <section ref={ref} style={{ height: '120vh', position: 'relative' }}>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={isInView ? { scaleX: 0 } : {}}
          transition={{ duration: 2, delay: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            background: 'lime',
            transformOrigin: 'left center',
            zIndex: 6,
          }}
        />
        <motion.div
          initial={{ scaleX: 1 }}
          animate={isInView ? { scaleX: 0 } : {}}
          transition={{ duration: 2, delay: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'lime',
            transformOrigin: 'right center',
            zIndex: 6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: '100%',
            width: '100%',
            backgroundColor: "rgba(0,0,0,0.2)",
            fontSize: '2rem',
            zIndex: 5,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.1, duration: 0.8 }}
            style={{
              color: "white",
              textAlign: "center",
              transform: 'translate(-50%, -50%)',
              fontSize: '2rem',
              padding: "0 20px",
              zIndex: 5,
            }}
          >
            Whether you’re sat in my chair or learning in my
            classroom, you’re getting more than just hair, <span>you’re getting
              experience, vision, and straight-up passion.</span>
          </motion.p>
          <button>Click</button>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: 1 }}
          src={brazil}
          alt="a model"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '0 0',
            zIndex: -1,
          }}
        />
      </section>
    </div>
  )
}

export default Gallery