import React from 'react'
import styles from '../styles/Contact.module.css';
import multicolor from '../assets/multicolor.webp';

import Title from '../components/Title';

const Contact = () => {
  return (
    <>
      <Title title='Contact' subtitle='Me' />
      <div className={styles.contactContainer} id='next-section'>
        <img className={styles.colorChart} src={multicolor} alt='multi-colour hair' />
        <div className={styles.colorOverlay}></div>
        <div className={styles.formContainer}>
          <h3>Request a Consultation</h3>
          <form action="/action_page.php" method="get">
            <div className={styles.inputGroup}>
              <input
                className={styles.contactInput}
                type='text'
                id='name'
                name='name'
                placeholder=' '
                required
              />
              <label htmlFor='name' className={styles.inputLabel}>Name</label>
            </div>
            <div className={styles.inputGroup}>
              <input 
                className={styles.contactInput} 
                type='email'
                id='email'
                name='email' 
                placeholder=' ' 
                required 
              />
              <label htmlFor='email' className={styles.inputLabel}>
                Email Address
              </label>
            </div>
            <span className={styles.checkboxWrap}>
            <p className={styles.checkboxHeading}>Service:</p>
              <label htmlFor='colour'>Colour</label>
              <input type='radio' id='colour' name='services' value='Colour' required />
              <label htmlFor='education'>Education</label>
              <input type='radio' id='education' name='services' value='Education' required />
              <label htmlFor='both'>Both</label>
              <input type='radio' id='both' name='services' value='Both' required />
            </span>
            <div className={styles.inputGroup}>
              <textarea className={styles.contactInput} name='query' placeholder='Your message' required></textarea>
            </div>
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