import React, { useEffect, useState } from 'react';
import {AnimatePresence} from 'framer-motion';
import { motion } from 'motion/react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/NavBar.module.css';

import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import useFadeUp from '../hooks/useFadeUp';
import useDynamicColor from '../hooks/useDynamicColor';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import { AnimateButton } from '../utils/AnimateButton';

function useScrollTrigger() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleSection = document.getElementById("title-container");
      if (!titleSection) {
        console.warn("TitleContainer not found!");
        return;
      }

      const rect = titleSection.getBoundingClientRect();
      setShowNav(rect.bottom < 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNav]);

  return showNav;
}

function NavBar() {
  const showNav = useScrollTrigger();
  const {expanded, setExpanded, ref} = useClickOutsideToggle();
  const isLoaded = useFadeUp()
  const getColor = useDynamicColor();

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div className={styles.NavContainer} initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: showNav ? 1 : 0, y: showNav ? 0 : -50 }} transition={{ duration: 0.5 }}>
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
                className={`${styles.McButton} ${expanded ? styles.active : ""} ms-auto`} aria-controls="basic-navbar-nav"
                style={{ boxShadow: "none", border: "none" }}
              >
                <span></span>
                <span></span>
                <span></span>
              </Navbar.Toggle>
              <Navbar.Collapse className='ms-auto' id="basic-navbar-nav">
                {isLoaded && (
                  <Nav className="mx-md-auto flex-md-row pt-md-0 flex-column align-items-center">
                    <NavItem to="/" label="Home" delay={0.2} />
                    <NavItem to="/mystory" label="My Story" delay={0.4} />
                    <NavItem to="/services" label="Services" delay={0.6} />
                    <NavItem to="/gallery" label="Gallery" delay={0.8} />
                    <Link to="/contactme">
                      <AnimateButton className={styles.NavContact} >
                        Let's talk
                      </AnimateButton>
                    </Link>
                  </Nav>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NavBar