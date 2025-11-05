import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion";
import peach from '../assets/peachone.webp';

const IntroScrollComponent = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["85% end", "end start"]
    })
    const scale = useTransform(scrollYProgress, [0, 1], [0, 8]);
    const y = useTransform(scrollYProgress, [0, 1], [150, -150])
    const opacityTwo = useTransform(scrollYProgress, [0,0.5, 1], [0, 1, 0])

    // const targeRef = useRef(null);
    const { scrollYProgress: targetYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })
    const opacity = useTransform(targetYProgress, [0, 1], [1, 0])

        const { scrollYProgress: scrollFade } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Fade out "Ready" between 0% and 20% scroll progress
    const opacityThree = useTransform(scrollFade, [0, 0.2], [1, 0]);

    return (
        <motion.div ref={ref} style={{ opacity, position: "relative", backgroundImage: "linear-gradient(to bottom, #f1e7dd, #ffffff, #fff)", height: "350vh" }}>
            <motion.div style={{opacity: opacityThree, position: "sticky", top: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%", zIndex: 1}}>
                <h1>Ready</h1>
            </motion.div>
            <div style={{height: "100vh"}}></div>
            <div style={{ height: "150vh", position: "relative"}}>
            <motion.div style={{opacity: opacityTwo, position: "sticky", top: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%", zIndex: 2}}>
                <h1>Steady</h1>
            </motion.div>
            </div>
            {/* <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
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
            </div> */}
        </motion.div>
    )
}

export default IntroScrollComponent