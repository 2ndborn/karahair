import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion";
import peach from '../assets/peachone.webp';

const IntroScrollComponent = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center end", "end 10%"]
    })
    const scale = useTransform(scrollYProgress, [0, 1], [0, 8]);
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
            <div style={{display: "flex", justifyContent: "center", alignItems: "center",height: "90%", width: "90%", overflow: "hidden"}}>
                <motion.p style={{
                    y, opacity: opacityTwo,
                    scale: scale,
                    textAlign: "center",
                    fontWeight: "bold",
                    backgroundSize: "cover",
                    WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundImage: `url(${peach})`
                }}
                >
                    To understand your individual haircare needs, <br />
                    so we can uncover your hairs true beauty <br />
                    1 strand at a time. We can achieve this <br />
                    by following the KARA by model. <br />
                    Keep scrolling.
                </motion.p>
            </div>
        </motion.div>
    )
}

export default IntroScrollComponent