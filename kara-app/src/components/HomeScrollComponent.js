import React, {useRef} from 'react'
import {motion, useScroll, useSpring, useTransform, useVelocity} from 'framer-motion';

const HomeScrollComponent = ({title, icon, content}) => {
    
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
    target: ref,
    })
    const x = useTransform(scrollYProgress, [0,1], ["200%", "0%"]);

    const targetRef = useRef(null);
    const {scrollYProgress: targetScoll} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })
    const opacity = useTransform(targetScoll, [0.15, 0.6, 0.9], [0.5,1,0])
    const y = useTransform(targetScoll, [0,1], [250, -250])

    const {scrollY} = useScroll({target: targetRef})
    const velocity = useVelocity(scrollY)
    const velocityMap = useTransform(velocity, [-2500, 0, 2500], [-1, 0, 1]);
    const velocitySpring = useSpring(velocityMap, { stiffness: 30, damping: 90 })
    
    return (
        <>
            <div style={{ height: "150vh" }} ref={ref}>
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
            </div>
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
                        <div style={{ fontSize: "clamp(1.8rem, calc(7vw + 1rem), 5rem)"}}>
                            {icon}
                            <p style={{fontWeight: "700", fontSize: "min(1.5rem, 5vw)", textShadow: "0 5px 8px rgba(0, 0, 0, 0.4)"}}>{content}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default HomeScrollComponent