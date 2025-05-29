import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "motion/react"

export const Reveal = ({children}) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const mainControl = useAnimation();

  useEffect(() => {
      if (inView) {
        mainControl.start("visible")
      }
  }, [inView, mainControl])
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0.5, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 2.5, delay: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}