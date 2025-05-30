import React from 'react';
import {motion} from 'framer-motion';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Title from './Title';
import styles from '../styles/NavBar.module.css'

import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { NavLink } from 'react-router-dom';
import useFadeUp from '../hooks/useFadeUp';
import useDynamicColor from '../hooks/useDynamicColor';

function NavBar() {
  const {expanded, setExpanded, ref} = useClickOutsideToggle();
  const isLoaded = useFadeUp(2000)
  const getColor = useDynamicColor();

  return (
    <div className={styles.NavContainer}>
        <Title />
        <Navbar 
        style={{backgroundColor: getColor("navbar")}}
        expanded={expanded} 
        onToggle={setExpanded} 
        ref={ref} expand="md" 
        className={styles.NavBarShadow}>
          <Container>
            <Navbar.Toggle
              className='ms-auto' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='ms-auto' id="basic-navbar-nav">
            {isLoaded && (
              <Nav className={expanded ? "ms-auto d-flex flex-column align-items-end" : "mx-auto"}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}>
                  <NavLink to="/" className={styles.NavLink}>Home</NavLink>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}>
                  <NavLink to="/mystory" className={styles.NavLink}>My story</NavLink>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}>
                  <NavLink to="" className={styles.NavLink}>Services</NavLink>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}>
                  <NavLink to="" className={styles.NavLink}>Gallery</NavLink>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1, ease: "easeOut" }}>
                  <NavLink to="" className={styles.NavLink}>Contact me</NavLink>
                </motion.div>
              </Nav>
            )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}

export default NavBar