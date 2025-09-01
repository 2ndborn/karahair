import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimatedComponent({ content, backgroundImage }) {
  const targetRef = useRef(null);

  // Scroll progress for fade/scale
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const scaleSpring = useSpring(scale, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const translateY = useTransform(scrollYProgress, [0, 1], [250, -250]);

  // Scroll velocity for reactive motion
  const { scrollY } = useScroll({ target: targetRef });
  const velocity = useVelocity(scrollY);
  const velocityMapped = useTransform(velocity, [-3000, 0, 3000], [-1, 0, 1]);
  const velocitySpring = useSpring(velocityMapped, { stiffness: 30, damping: 90 });

  return (
    <section style={{ position: "relative", height: "100vh", padding: "1rem", marginBottom: "50px" }}>
      <motion.div
        ref={targetRef}
        style={{
          scale: scaleSpring,
          opacity: opacitySpring,
          y: velocitySpring,
          display: "flex",
          justifyContent: "center",
          height: "95vh",
          width: "100%",
          backgroundImage: "radial-gradient(35% 75% at 30% 47%, white, #d9b9a0)",
          padding: "20px",
          boxSizing: "border-box",
          borderRadius: "15px"
        }}
      >
        {/* Text Block */}
        <motion.div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "60%",
            zIndex: 5,
            margin: "1rem",
            padding: "1rem",
            overflow: "hidden"
          }}
        >
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              fontSize: "2rem"
            }}
          >
            <p style={{ padding: "1rem" }}>
              <strong>{content.primary}</strong>
              {content.secondary}
            </p>
          </motion.div>
        </motion.div>

        {/* Image Block */}
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "40%",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px, 5px 5px 10px rgba(0, 0, 0, 0.2)"
          }}
        >
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={content.image}
            alt="section visual"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}