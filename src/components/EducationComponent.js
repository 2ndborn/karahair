import React from 'react'
import styles from '../styles/Services.module.css';
import { AnimateButton } from '../utils/AnimateButton';
import { EducateData } from '../serviceData/EducateData';
import { Link } from 'react-router-dom';

const EducationComponent = () => {
  return (
      <div>
          <div>
              <h1>Education</h1>
              <p>
                  KARA, education is more than skill-building it’s 
                  a space for growth, inspiration, and connection. 
                  Whether you’re an established stylist or just 
                  starting out, every course is designed with care 
                  and intention, tailored to meet your personal and 
                  professional goals.
              </p>
          </div>
          <div className={styles.serviceContainer}>
              {EducateData.map((d) => (
                  <div key={d.index} className={styles.grid}>
                      <h2>{d.heading}</h2>
                      {d.content.map((con, idx) => (
                          <p key={idx}>{con}</p>
                      ))}
                      <ul>
                        {d.reasons?.map((reason, idx) => (
                            <li key={idx}>{reason}</li>
                        ))}
                      </ul>
                  </div>
              ))}
          </div>
          <div className={styles.contactButtonWrapper}>
            <Link to="/contactme">
              <AnimateButton className={styles.serviceButton}>
                  Book a consultation
              </AnimateButton>
            </Link>
          </div>
          <div>
              <p>
                Education with KARA is rooted in real experience, 
                thoughtful teaching, and a commitment to raising 
                the standard together.
              </p>
          </div>
      </div>
  )
}

export default EducationComponent