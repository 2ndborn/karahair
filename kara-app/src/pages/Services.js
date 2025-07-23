import React from 'react'
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <div className={styles.GridContainer}>
        <div className={styles.header}>Services</div>
        <div className={styles.hair}>Hair</div>
        <div className={styles.educate}>Education</div>
        <div className={styles.codes}>Affiliate Codes</div>
    </div>
  )
}

export default Services