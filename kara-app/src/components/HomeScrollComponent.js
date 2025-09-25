import React, {useRef} from 'react'
import {motion, useScroll, useSpring, useTransform, useVelocity} from 'framer-motion';

const HomeScrollComponent = ({title, icon, content}) => {
    
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
    target: ref,
    })
    const x = useTransform(scrollYProgress, [0,1], ["100%", "0%"]);

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
                <motion.div style={{ position: "sticky", top: "50%", height: "50vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
                    <motion.h1 style={{ x, fontSize: "200px" }}>{title}</motion.h1>
                </motion.div>
            </div>
            <div style={{ height: "150vh", backgroundColor: "grey" }} ref={targetRef}>
                <div style={{
                     position: "sticky", top: "50%", 
                     backgroundColor: "yellow", 
                     height: "75vh", 
                     display: "flex", justifyContent: "center", 
                     alignItems: "center", flexDirection: "column",
                     textAlign: "center", padding: "0 4rem"
                     }}
                >
                    <motion.div style={{opacity, y, velocitySpring}}>
                        <div style={{ fontSize: "5rem" }}>
                            {icon}
                        </div>
                        <h3>{content}</h3>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default HomeScrollComponent