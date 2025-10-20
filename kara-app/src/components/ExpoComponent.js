import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react'

const ExpoComponent = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref})
    const x = useTransform(scrollYProgress, [0,1], ["80%", "-95%"])

    const data = ["K","N","O","W","L","E","D","G","E"]

  return (
    <>
      <section ref={ref} style={{position: "relative", height: "250vh"}}>
          <div  style={{position: "sticky", top: "100px", height: "80vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
              <motion.div style={{x, display: "flex" }}>
                  {data.map((d) =>
                      <motion.div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 5px"}}>
                          <h1 style={{ color: "transparent", fontSize: "20rem", fontWeight: 800, WebkitTextStroke: "10px #fff" }}>{d}</h1>
                      </motion.div>
                  )}
              </motion.div>
          </div>
      </section>
      <section style={{height: "200vh"}}>
          
      </section>
    </>
  )
}

export default ExpoComponent