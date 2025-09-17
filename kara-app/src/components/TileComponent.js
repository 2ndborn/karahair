import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TileComponent = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] 
  });

  const boxShadow = useTransform(scrollYProgress, [0, 1], [
    "inset 15px 15px 25px rgba(0,0,0,0.6)",
    "inset -15px -15px 25px rgba(0,0,0,0.6)"
  ]);

  const { scrollYProgress: scrollScale } = useScroll({
    target: ref,
    offset: ["end end", "end start"] 
  });

  const scale = useTransform(scrollScale, [0,1], [1, 0.85])

  return (
    <div style={{ height: "300vh", padding: "50px" }}>
        <div style={{height: "100vh,"}} />
      <motion.div
        ref={ref}
        style={{
          position: "sticky",
          top: 60,  
          height: "90vh",
          backgroundColor: "#fff",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow,
          scale,
        }}
      >
        <div style={{height: "90%", width: "45%", backgroundColor: "red"}}></div>
        <div style={{height: "90%", width: "45%", backgroundColor: "blue"}}></div>
      </motion.div>
        <div style={{height: "100vh,"}} />
    </div>
  );
};

export default TileComponent;