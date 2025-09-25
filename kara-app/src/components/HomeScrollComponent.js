import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';

const HomeScrollComponent = ({icon}) => {
    
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
    target: ref,
    })
    const x = useTransform(scrollYProgress, [0,1], ["100%", "0%"]);
    
    return (
        <>
            <div style={{ height: "150vh" }} ref={ref}>
                <motion.div style={{ position: "sticky", top: "50%", height: "50vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
                    <motion.h1 style={{ x, fontSize: "200px" }}>KNOWLEDGE</motion.h1>
                </motion.div>
            </div>
            <div style={{ height: "150vh", backgroundColor: "grey" }}>
                <div style={{ position: "sticky", top: "50%", backgroundColor: "yellow", height: "75vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    {icon}
                    <h1>
                        "Your comfort and confidence are my highest priorities. 
                        For over two decades, I’ve had the privilege of supporting
                         a diverse range of clients with their hair needs. 
                         Through years of dedicated practice, my skills in nurturing, 
                         styling, and colouring have evolved to an expert level—ensuring 
                         every client feels seen, celebrated, and beautifully cared for."
                    </h1>
                </div>
            </div>
        </>
    )
}

export default HomeScrollComponent