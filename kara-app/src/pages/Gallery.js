import React from 'react'
import styles from '../styles/Gallery.module.css'
import { motion, useTransform } from 'framer-motion';

const Gallery = () => {
  return (
    <div>
        <section>
          <div className={styles.intro}>
            <h1>Hi I am Kara</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sed repellendus maiores possimus expedita
              consequuntur nam. Similique, maxime esse! Ullam deserunt numquam id laboriosam in temporibus quod eveniet corrupti
              ducimus.
            </p>
          </div>
          <div className={styles.con}>
            <div className={styles.container}>
              <div className={styles.box}></div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Gallery