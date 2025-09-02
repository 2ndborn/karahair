import { useRef } from "react";
import {motion, useScroll, useTransform, useSpring, useVelocity} from "framer-motion";

const ScrollAnimateMobile = ({ content }) => {
    const targetRef = useRef(null);

    // Scroll progress for fade/scale
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const scaleSpring = useSpring(scale, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Scroll velocity for reactive motion
    const { scrollY } = useScroll({ target: targetRef });
    const velocity = useVelocity(scrollY);
    const velocityMapped = useTransform(velocity, [-3000, 0, 3000], [-1, 0, 1]);
    const velocitySpring = useSpring(velocityMapped, { stiffness: 30, damping: 90 });

    return (
        <section style={{position: "relative", height: "100vh", padding: "1rem"}} >
        <motion.div
          ref={targetRef}
          style={{
            scale: scaleSpring, opacity: opacitySpring, y: velocitySpring,
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
              <p><strong>{content.primary}</strong>{content.secondary}</p>
            </motion.div>
          </motion.div>
          <div style={{position: "relative", height: "100%", width: "100%", borderRadius: "10px", 
            overflow: "hidden",
            boxShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px, 5px 5px 10px rgba(0, 0, 0, 0.2)",
            }}>
            <img style={{height: "100%", width: "100%", objectFit: "cover"}} src={content.image} alt='kara' />
            <div style={{position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)"}} />
          </div>
        </motion.div>
      </section>
    )
}

export default ScrollAnimateMobile