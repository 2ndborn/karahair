import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParagraphTrigger = ({ para, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} style={{
      position: "absolute",
      top: `${index * 100}vh`,
      left: 0,
      width: "100%",
      height: "100vh",
      display: "flex", justifyContent: "start", alignItems: "center",
    }}>
      <motion.div style={{
        width: "60%", padding: "2rem",
        opacity,
      }}>
        <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
          <strong>{para.primary}</strong> {para.secondary}
        </p>
      </motion.div>
    </div>
  );
};

export default ParagraphTrigger