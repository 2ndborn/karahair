import React from 'react'
import styles from '../styles/Contact.module.css';
import color from '../assets/colorchart.webp';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <img className={styles.colorChart} src={color} alt='colour chart' />
      <div className={styles.colorOverlay}></div>
      <div className={styles.formContainer}>
        <h2>Request a Consultation</h2>
        <form action="/action_page.php" method="get">
          <input className={styles.contactInput} type='text' name='name' placeholder='Name' required />
          <input className={styles.contactInput} type='email' name='email' placeholder='Email Address' required />
          <textarea className={styles.contactInput} name='query' placeholder='Your message' required></textarea>
          <button type='submit' value='Submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact