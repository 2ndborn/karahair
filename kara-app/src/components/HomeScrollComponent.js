import React, {useRef} from 'react'
import {motion, useScroll, useSpring, useTransform, useVelocity} from 'framer-motion';

const HomeScrollComponent = ({title, icon, content}) => {
    
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref})
    const x = useTransform(scrollYProgress, [0,1], ["100%", "-100%"])

    const targetRef = useRef(null);
    const {scrollYProgress: targetScroll} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })
    const opacity = useTransform(targetScroll, [0.15, 0.6, 0.9], [0.5,1,0])
    const y = useTransform(targetScroll, [0,1], [150, -150])

    const {scrollY} = useScroll({target: targetRef})
    const velocity = useVelocity(scrollY)
    const velocityMap = useTransform(velocity, [-2500, 0, 2500], [-1, 0, 1]);
    const velocitySpring = useSpring(velocityMap, { stiffness: 30, damping: 90 })
    
    return (
        <>
            {/* <div style={{ height: "150vh" }} ref={ref}>
                <motion.div 
                style={{
                    position: "sticky", top: "50%", 
                    height: "50vh", display: "flex", 
                    alignItems: "center", justifyContent: "center", overflow: "hidden",
                    color: "#fff", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
                    }}
                >
                    <motion.h1 style={{ x, letterSpacing: "-1px", fontWeight: "700", fontSize: "clamp(3rem, 15vw, 14rem)"}}>{title}</motion.h1>
                </motion.div>
            </div> */}
            <section ref={ref} style={{position: "relative", height: "200vh"}}>
                      <div  style={{position: "sticky", top: "100px", height: "80vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
                          <motion.div style={{x, display: "flex" }}>
                                  <motion.div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 5px"}}>
                                      <h1 style={{ color: "transparent", fontSize: "20rem", fontWeight: 800, WebkitTextStroke: "10px #fff" }}>{title}</h1>
                                  </motion.div>
                          </motion.div>
                      </div>
                  </section>
            <div style={{ height: "150vh" }} ref={targetRef}>
                <motion.div style={{
                    opacity,
                     position: "sticky", top: "50%",
                     height: "75vh",
                     display: "flex", justifyContent: "center", 
                     alignItems: "center", flexDirection: "column",
                     textAlign: "center", padding: "min(4em, 5%)",
                     backgroundColor: "rgba(255, 255, 255, 0.2)",
                     backdropFilter: "blur(20px)",
                     color: "#fffefeff",
                     boxShadow: "inset 0 -8px 20px #fff"
                     }}
                >
                    <motion.div style={{opacity, y, velocitySpring, display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div>
                            <h1 style={{ fontSize: "clamp(2.5rem, 0.864rem + 8.18vw, 7rem)", fontWeight: 600, marginBottom: "2rem"}}>{icon}</h1>
                            <p style={{fontWeight: "700", fontSize: "min(1.5rem, 5vw)", textShadow: "0 5px 8px rgba(0, 0, 0, 0.4)"}}>{content}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default HomeScrollComponent