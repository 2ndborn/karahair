import React from 'react';
import {AnimatePresence} from 'framer-motion';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/NavBar.module.css';

import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import useFadeUp from '../hooks/useFadeUp';
import useDynamicColor from '../hooks/useDynamicColor';
import NavItem from './NavItem';

function NavBar() {
  const {expanded, setExpanded, ref} = useClickOutsideToggle();
  const isLoaded = useFadeUp(500)
  const getColor = useDynamicColor();

  return (
    <div className={styles.NavContainer}>
        <Title />
        <AnimatePresence>
        <Navbar 
          style={{ backgroundColor: getColor("navbar") }}
          expanded={expanded}
          expand="md"
          className={`${styles.NavBarShadow} ${styles.ColorNav}`}
        >
          <Container>
            <Navbar.Toggle
              ref={ref}
              onClick={() => setExpanded(!expanded)}
              className='ms-auto' aria-controls="basic-navbar-nav" 
              style={{boxShadow: "none", border: "none"}}
            />
            <Navbar.Collapse className='ms-auto' id="basic-navbar-nav">
            {isLoaded && (
              <Nav className="mx-md-auto flex-md-row pt-md-0 flex-column align-items-center pt-4">
                <NavItem to="/" label="Home" delay={0.2} />
                <NavItem to="/mystory" label="My Story" delay={0.4} />
                <NavItem to="/services" label="Services" delay={0.6} />
                <NavItem to="/gallery" label="Gallery" delay={0.8} />
                <NavItem to="/contactme" label="Contact Me" delay={1.0} />
              </Nav>
            )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </AnimatePresence>
    </div>
  );
}

export default NavBar