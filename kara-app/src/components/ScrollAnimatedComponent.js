import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimatedComponent({
  content,
  backgroundImage,
  flexDirection,
  marginBottom,
  }) {
  const mobileRef = useRef(null);

  // Scroll progress for fade/scale
  const { scrollYProgress: scrollYmobile } = useScroll({
    target: mobileRef,
    offset: ["start end", "end start"]
  });

  const scaleM = useTransform(scrollYmobile, [0, 1], [1, 0.95]);
  const scaleSpringM = useSpring(scaleM, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const opacityM = useTransform(scrollYmobile, [0, 0.5, 1], [0, 1, 0]);
  const opacitySpringM = useSpring(opacityM, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Scroll velocity for reactive motion
  const { scrollY: scrollYVelMob } = useScroll({ target: mobileRef });
  const velocityMob = useVelocity(scrollYVelMob);
  const velocityMappedMob = useTransform(velocityMob, [-3000, 0, 3000], [-1, 0, 1]);
  const velocitySpringMob = useSpring(velocityMappedMob, { stiffness: 30, damping: 90 });

  const desktopRef = useRef(null);

  // Scroll progress for fade/scale
  const { scrollYProgress } = useScroll({
    target: desktopRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const scaleSpring = useSpring(scale, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Scroll velocity for reactive motion
  const { scrollY } = useScroll({ target: desktopRef });
  const velocity = useVelocity(scrollY);
  const velocityMapped = useTransform(velocity, [-3000, 0, 3000], [-1, 0, 1]);
  const velocitySpring = useSpring(velocityMapped, { stiffness: 30, damping: 90 });

  return (
    <section style={{
      position: "relative", 
      height: "100vh", 
      padding: "1rem", 
      marginBottom: marginBottom,
      }}
    >
        <motion.div
        ref={desktopRef}
        className="d-none d-lg-flex" 
        style={{
          scale: scaleSpring,
          opacity: opacitySpring,
          y: velocitySpring,
          display: "flex",
          flexDirection: flexDirection,
          justifyContent: "center",
          height: "95vh",
          width: "100%",
          backgroundImage: backgroundImage,
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
            flexDirection: "column-reverse",
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
        <motion.div
          ref={mobileRef}
          className="d-lg-none"
          style={{
            scale: scaleSpringM, opacity: opacitySpringM, y: velocitySpringMob,
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
  );
}