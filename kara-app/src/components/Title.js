import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import styles from '../styles/Title.module.css'

function Title() {
  return (
    <div className={styles.TitleContainer}>
        <Container className='text-center'>
            <h1>K.A.R.A</h1>
        </Container>
    </div>
  )
}

export default Title