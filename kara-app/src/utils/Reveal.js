import React from 'react'
import { motion, useInView, useAnimation } from "motion/react"

export const Reveal = ({children}) => {
    return (
        <div>
            <motion.div
            variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    )
}