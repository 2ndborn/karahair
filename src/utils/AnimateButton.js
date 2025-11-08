import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";

export const AnimateButton = ({children, className}) => {
    const buttonControl = useAnimation();
    useEffect(() => {
        buttonControl.start({
          scale: [1, 1.01, 1],
          boxShadow: [
            '0px 2px 0px rgba(0,0,0,0.3)',
            '0px 5px 12px rgba(0,0,0,0.4)',
            '0px 2px 0px rgba(0,0,0,0.3)'
          ],
          transition: {duration: 1.5, repeat: Infinity, ease: "easeInOut"}
        })
      }, [buttonControl])

    return (
        <motion.button
            className={className}
            animate={buttonControl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, borderColor: '#000' }}
        >
            {children}
        </motion.button>
    )
}