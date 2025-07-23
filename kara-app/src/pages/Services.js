import React from 'react'
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <div className={styles.GridContainer}>
        <div className='header'>Services</div>
        <div className='hair'>Hair</div>
        <div className='educate'>Education</div>
        <div className='codes'>Affiliate Codes</div>
    </div>
  )
}

export default Services