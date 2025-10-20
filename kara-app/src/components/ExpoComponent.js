import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react'

const ExpoComponent = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref})
    const x = useTransform(scrollYProgress, [0,1], ["100%", "-95%"])

    const data = ["K","N","O","W","L","E","D","G","E"]

  return (
      <div ref={ref} style={{ position: "relative", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "400vh", backgroundColor: "grey" }}>
          <div style={{display: "flex"}}>
              {data.map((d) =>
                  <motion.div style={{ x, position: "sticky", top: "100px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", padding: "1rem", margin: "0 5px", }}>
                      <h1 style={{ color: "white", fontSize: "20rem" }}>{d}</h1>
                  </motion.div>
              )}
          </div>
    </div>
  )
}

export default ExpoComponent