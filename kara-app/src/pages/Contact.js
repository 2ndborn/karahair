import React from 'react'
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.formContainer}>
        <h2>Contact me</h2>
      <form action="/action_page.php" method="get">
        <input type='text' name='name' placeholder='Name' />
        <input type='email' name='email' placeholder='Email Address' />
        <textarea name='query' placeholder='Your message'></textarea>
        <button type='submit' value='Submit'>Send</button>
      </form>
      </div>
    </div>
  )
}

export default Contact