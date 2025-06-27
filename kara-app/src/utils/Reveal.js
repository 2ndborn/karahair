import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "motion/react"

export const Reveal = ({children, variants, transition, delay}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: false});
  const mainControl = useAnimation();

  useEffect(() => {
      if (inView) {
        mainControl.start("visible")
      }
  }, [inView, mainControl])
  return (
    <div ref={ref}>
      <motion.div
        variants={variants || {
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={transition || { duration: 2.5, delay: 0, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}