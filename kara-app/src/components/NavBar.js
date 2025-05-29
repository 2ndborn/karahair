import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Title from './Title';
import styles from '../styles/NavBar.module.css'

import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { Reveal } from '../utils/Reveal';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const {expanded, setExpanded, ref} = useClickOutsideToggle();
  return (
    <div className={styles.NavContainer}>
      <Reveal>
        <Title />
        <Navbar expanded={expanded} onToggle={setExpanded} ref={ref} expand="md" className={styles.NavBarShadow}>
          <Container>
            <Navbar.Toggle
              className='ms-auto' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='ms-auto' id="basic-navbar-nav">
              <Nav className={expanded ? "ms-auto d-flex flex-column align-items-end" : "mx-auto"}>
                <NavLink to="/" className={styles.NavLink}>Home</NavLink>
                <NavLink to="/mystory" className={styles.NavLink}>My story</NavLink>
                <NavLink to="" className={styles.NavLink}>Services</NavLink>
                <NavLink to="" className={styles.NavLink}>Gallery</NavLink>
                <NavLink to="" className={styles.NavLink}>Contact me</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Reveal>
    </div>
  );
}

export default NavBar