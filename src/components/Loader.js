import React from 'react';
import {motion} from 'framer-motion';
import useDynamicColor from '../hooks/useDynamicColor';

const Loader = () => {
    const getColor = useDynamicColor();
    const loaderStyle = {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        background: getColor('title'),
        zIndex: 999,
    }

    const variants = {
        hidden: {height: 0, opacity: 1},
        expand: {
            height: '100vh',
            opacity: 1,
            transition: {
                height: {
                    duration: 0.8, ease: 'easeInOut'
                }
            }
        },
        fadeOut: {
            opacity: 0,
            transition: {
                duration: 1, 
                ease: 'easeOut',
                delay: 0.7
            }
        }
    }

  return (
    <motion.div
        variants={variants}
        initial='hidden'
        animate={['expand', 'fadeOut']}
        exit='fadeOut'
        style={loaderStyle}
    />
  )
}

export default Loader