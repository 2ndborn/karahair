import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

export default function TileComponent({margin, boxShadow, content,}) {
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

  return (
    <div style={{ height: "200vh", boxSizing: "border-box"}}>
      <div style={{ height: "50vh," }} />
      <motion.div
        ref={ref}
        style={{
          y: velocitySpring,
          position: "sticky",
          top: 60,
          height: "90vh",
          borderRadius: "15px",
          scale,
          boxShadow: boxShadow,
          boxSizing: "border-box",
          margin: margin,
          overflow: "hidden"
        }}
      >
      <img src={content.image} alt='model' style={{ height: "100%", width: "100%", objectFit: "cover" }} />
      <motion.div style={{ opacity: opacitySpring, position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }} />
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            opacity: opacitySpring, y,
            display: 'flex', justifyContent: "center", alignItems: "center", textAlign: "center",
            color: "#fff",
          }}>
          <p
            style={{fontSize: "2rem", padding: "0px 100px"}}
          >
            <span>{content.primary}</span>{content.secondary}
          </p>
        </motion.div>
        
      </motion.div>
      <div style={{ height: "50vh," }} />
    </div>
  );
};