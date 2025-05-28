import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Title from './Title';
import styles from '../styles/NavBar.module.css'

import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { Reveal } from '../utils/Reveal';


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
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>My story</Nav.Link>
                <Nav.Link>Services</Nav.Link>
                <Nav.Link>Gallery</Nav.Link>
                <Nav.Link>Contact me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Reveal>
    </div>
  );
}

export default NavBar