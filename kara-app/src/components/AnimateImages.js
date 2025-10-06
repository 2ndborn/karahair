import { motion } from 'framer-motion';

const AnimateImages = ({src, alt='', delay = 0, onClick}) => {
  return (
    <motion.img 
        src={src}
        alt={alt}
        style={{ width: "100%", display: "block", cursor: "pointer" }}
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: "easeInOut", delay}}
        viewport={{once: true, amount: 0.3}}
        onClick={onClick}
    />
  )
}

export default AnimateImages