import React, { useRef } from 'react'
import {motion, useScroll, useSpring, useTransform, useVelocity} from "framer-motion";
import peach from '../assets/peachone.webp';

const IntroScrollComponent = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["85% end", "end start"]
    })
    const scale = useTransform(scrollYProgress, [0.4, 1], [1, 8]);
    const opacityTwo = useTransform(scrollYProgress, [0,0.5, 1], [0, 1, 0])
    const letterSpacing = useTransform(scrollYProgress, [0.4, 1], ["0px", "4px"]);

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

    const opacityThree = useTransform(scrollFade, [0, 0.2], [1, 0]);

    const {scrollY} = useScroll({target: ref})
    const velocity = useVelocity(scrollY)
    const velocityMap = useTransform(velocity, [-3000, 0, 3000], [-1, 0, 1]);
    const velocitySpring = useSpring(velocityMap, { stiffness: 30, damping: 90 })

    return (
        <motion.div ref={ref} 
        style={{
            opacity, position: "relative", 
            backgroundImage: "linear-gradient(to bottom, rgba(241, 231, 221, 1), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))", 
            height: "350vh" 
            }}
        >
            <motion.div
                style={{
                    velocitySpring,
                    opacity: opacityThree,
                    position: "sticky", top: 0,
                    display: "flex", flexDirection: "column",
                    justifyContent: "center", alignItems: "center",
                    height: "100vh", width: "100%",
                    zIndex: 1,
                    textAlign: "center", padding: "min(5rem, 8%)",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "cover",
                    backgroundClip: "text",
                    backgroundImage: `url(${peach})`,
                }}
            >
                <h1
                    style={{
                        fontWeight: 800, marginBottom: "3rem",
                        fontSize: "clamp(3.5rem, 2.955rem + 2.73vw, 5rem)"
                    }}
                >My Mission
                </h1>
                <h3
                    style={{
                        fontWeight: 800,
                        fontSize: "clamp(1.5rem, 1.245rem + 1.27vw, 2.2rem)"
                    }}
                >
                    To understand the haircare needs of every individual client, <br />
                    so we can discover the true beauty behind our hair one strand at a time.
                </h3>
            </motion.div>
            <div style={{ height: "100vh" }} />
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden"}}>
                <motion.div
                    style={{
                        velocitySpring,
                        opacity: opacityTwo, scale,
                        display: "flex", justifyContent: "center",
                        alignItems: "center", height: "100vh"
                    }}
                >
                    <motion.h1
                        style={{
                            WebkitTextFillColor: "transparent",
                            fontWeight: 700,
                            fontSize: "clamp(2.5rem, 1.591rem + 4.55vw, 5rem)",
                            backgroundSize: "cover",
                            backgroundClip: "text",
                            backgroundImage: `url(${peach})`,
                            textAlign: "center",
                            letterSpacing,
                            padding: "min(5rem, 8%)",
                            margin: 0,
                        }}
                    >
                        Welcome to the KARA Method
                    </motion.h1>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default IntroScrollComponent