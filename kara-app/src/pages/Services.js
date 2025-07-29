import React from 'react'
import styles from '../styles/Services.module.css';
import education from '../assets/karaeducation.webp';
import roc from '../assets/roc.webp';

const Services = () => {
  return (
    <div className={styles.GridContainer}>
        <div className={styles.header}>Services</div>
        <div className={styles.hair}>
          <img className={styles.hairImage} src={roc} alt='Curly model'/>
          <div className={styles.hairCover}>
            <h1>
              Haircare
            </h1>
          </div>
        </div>
        <div className={styles.educate}>
          <img className={styles.edImage} src={education} alt='Students' />
          <div className={styles.edCover}>
            <h1>
              Education
            </h1>
          </div>
        </div>
        <div className={styles.codes}>Affiliate Codes</div>
    </div>
  )
}

export default Services