import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion";
import peach from '../assets/peachone.webp';

const IntroScrollComponent = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center end", "end start"]
    })
    const scale = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const y = useTransform(scrollYProgress, [0, 1], [150, -150])
    const opacityTwo = useTransform(scrollYProgress, [0, 1], [1, 0])

    // const targeRef = useRef(null);
    const { scrollYProgress: targetYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })
    const opacity = useTransform(targetYProgress, [0, 1], [1, 0])

    return (
        <motion.div ref={ref} style={{ opacity, display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: "linear-gradient(to bottom, #f1e7dd, #ffffff, #fff)", height: "100vh" }}>
            <div>
                <motion.h1 style={{
                    y, opacity: opacityTwo,
                    scale: scale,
                    fontSize: "3rem",
                    fontWeight: "bold",
                    backgroundSize: "cover",
                    WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundImage: `url(${peach})`
                }}>Test</motion.h1>
            </div>
        </motion.div>
    )
}

export default IntroScrollComponent