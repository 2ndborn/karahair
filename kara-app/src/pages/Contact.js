import React from 'react'
import styles from '../styles/Contact.module.css';
import color from '../assets/colorchart.webp';

import Title from '../components/Title';

const Contact = () => {
  return (
    <>
      <Title title='Contact' subtitle='Me' />
      <div className={styles.contactContainer}>
        <img className={styles.colorChart} src={color} alt='colour chart' />
        <div className={styles.colorOverlay}></div>
        <div className={styles.formContainer}>
          <h3>Request a Consultation</h3>
          <form action="/action_page.php" method="get">
            <input className={styles.contactInput} type='text' name='name' placeholder='Name' required />
            <input className={styles.contactInput} type='email' name='email' placeholder='Email Address' required />
            <p className={styles.checkboxHeading}>Services Interested In:</p>
            <span className={styles.checkboxWrap}>
              <label htmlFor='colour'>Colour</label>
              <input type='checkbox' id='colour' name='Colour' required />
              <label htmlFor='education'>Education</label>
              <input type='checkbox' id='education' name='Education' required />
            </span>
            <textarea className={styles.contactInput} name='query' placeholder='Your message' required></textarea>
            <div className={styles.buttonWrap}>
              <button className={styles.cancelButton}>Cancel</button>
              <button className={styles.submitButton} type='submit' value='Submit'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact