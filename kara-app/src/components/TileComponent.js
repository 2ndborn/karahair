import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import brazil from '../assets/brazil.webp';

const TileComponent = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] 
  });

  const boxShadow = useTransform(scrollYProgress, [0, 1], [
    "inset 15px 15px 25px rgba(255, 3, 255, 0.6)",
    "inset -15px -15px 25px rgba(255, 3, 255, 0.6)"
  ]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0,1,0]);
  const opacitySpring = useSpring(opacity, {stiffness: 100, damping: 30, restDelta: 0.001})
  const y = useTransform(scrollYProgress, [0,1], [300, -300])

  const { scrollYProgress: scrollScale } = useScroll({
    target: ref,
    offset: ["end end", "end start"] 
  });

  const scale = useTransform(scrollScale, [0,1], [1, 0.85])

  const {scrollY} = useScroll({target: ref});
  const velocity = useVelocity(scrollY);
  const velocityMap = useTransform(velocity, [-2500, 0, 2500], [-1, 0, 1]);
  const velocitySpring = useSpring(velocityMap, { stiffness: 30, damping: 90 })

  return (
    <div style={{ height: "300vh", padding: "50px" }}>
        <div style={{height: "100vh,"}} />
      <motion.div
        ref={ref}
        style={{
          y: velocitySpring,
          position: "sticky",
          top: 60,  
          height: "90vh",
          backgroundColor: "#fff",
          border: "rgba(255, 3, 255, 0.4) solid 2px",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          boxShadow,
          scale,
        }}
      >
        <motion.div 
        style={{
          opacity: opacitySpring, y, 
          display: 'flex', justifyContent: "center", alignItems: "center", 
          height: "75%", width: "35%",
          boxShadow: "0px 10px 20px "
          }}>
          <h1>Hello, world!!!</h1>
        </motion.div>
        <motion.div 
        style={{
          y,
          opacity: opacitySpring,
          position: "relative", height: "75%", width: "35%", 
          borderRadius: "10px", overflow: "hidden",
          backgroundColor: "blue",
          boxShadow: "0px 15px 25px rgba(51, 0, 51, 0.6)"}}>
          <img src={brazil} alt='model' style={{height: "100%", width: "100%", objectFit: "cover"}} />
          <div style={{position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)"}} />
        </motion.div>
      </motion.div>
        <div style={{height: "100vh,"}} />
    </div>
  );
};

export default TileComponent;