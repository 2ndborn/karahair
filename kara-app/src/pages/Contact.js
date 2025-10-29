import React from 'react'
import {motion} from 'framer-motion'
import styles from '../styles/Contact.module.css';
import multicolor from '../assets/multicolor.webp';

import Title from '../components/Title';

const Contact = () => {

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
    <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, easeOut: "easeOut" }}
      >
      <Title title='Contact' subtitle='Me' />
      <div className={styles.contactContainer} id='next-section'>
        <img className={styles.colorChart} src={multicolor} alt='multi-colour hair' />
        <div className={styles.colorOverlay}></div>
        <div className={styles.formContainer}>
          <div className={styles.buttonContainer}>
              <a
                className={styles.socialButton}
                href='https://wa.me/7799212929?text=Hi%20Kara'
                target='_blank' rel='noreferrer' alt="Message Kara via WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
                Chat on WhatsApp
              </a>
              <a
                className={styles.socialButton}
                href='mailto:mfrancisr@hotmail.com?subject=Haircare%20consultation%20enquiry?Body=Hi%20Kara%20'
                alt="Send an email to Kara"
                target='_blank' rel='noreferrer'>
                <i class="fa-regular fa-envelope"></i>
                Message via Email
              </a>
              <a
                className={styles.socialButton}
                href='https://www.instagram.com/kara__haircare_'
                target='_blank' rel='noreferrer' alt="link to Kara's Instagram">
                <i class="fa-brands fa-instagram"></i>
                Follow on Instagram
              </a>
          </div>
          {/* <h3>Request a Consultation</h3>
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
          </form> */}
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default Contact