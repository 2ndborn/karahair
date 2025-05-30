import React from 'react'
import {motion} from 'framer-motion';
import Container from 'react-bootstrap/esm/Container'
import styles from '../styles/Title.module.css'
import useFadeUp from '../hooks/useFadeUp';
import useDynamicColor from '../hooks/useDynamicColor';

function Title() {
  const isLoaded = useFadeUp(1000);
  const getColor = useDynamicColor();

  return (
    <div 
    style={{backgroundColor: getColor("title")}}
    className={styles.TitleContainer}>
        <Container className='text-center'>
            {isLoaded && (
              <motion.h1
              initial={{ opacity: 0, y: 50}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              >
                K.A.R.A
              </motion.h1>)}
        </Container>
    </div>
  )
}

export default Title