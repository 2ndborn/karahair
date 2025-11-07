import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/Footer.module.css'
import { NavLink } from "react-router-dom";
import { Reveal } from "../utils/Reveal";
import useDynamicColor from "../hooks/useDynamicColor";

const Footer = () => {
  const getColor = useDynamicColor();
  return (
    <footer style={{ backgroundColor: getColor("footer") }} className="py-4 mx-auto" >
      <Container className={styles.Footer}>
        <Reveal>
        <Row>
          <Col md={4} className="text-md-start px-md-5 text-center">
            <h4 className="mb-3"><strong>Menu</strong></h4>
            <ul className={`${styles.FooterList} list-unstyled`}>
              <li><NavLink to="/" className="text-decoration-none">Home</NavLink></li>
              <li><NavLink to="/mystory" className="text-decoration-none">My Story</NavLink></li>
              <li><NavLink to="/services" className="text-decoration-none">Services</NavLink></li>
              <li><NavLink to="/gallery" className="text-decoration-none">Gallery</NavLink></li>
              <li><NavLink to="/contactme" className="text-decoration-none">Contact Me</NavLink></li>
            </ul>
          </Col>
          <Col md={4} className="text-md-start px-md-5 text-center">
                <h4 className="mb-3"><strong>Contact Me</strong></h4>
                <ul className={`${styles.FooterList} list-unstyled`}>
                  <li><i className="fa-solid fa-mobile-screen-button me-2"></i>07799 212 929</li>
                  <li><i className="fa-solid fa-envelope me-2"></i>noemail@gmal.com</li>
                </ul>
          </Col>
          <Col md={4} className="text-md-start px-md-5 text-center">
            <h4 className="mb-3"><strong>Follow Me</strong></h4>
            <div className={styles.socialMedia}>
                <a 
                  href="https://www.instagram.com/kara__haircare_" 
                  target="_blank" rel="noreferrer" 
                  className="px-md-0 pe-md-3 px-3"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@kara_hair_care"
                  target="_blank" rel="noreferrer"
                  className="px-md-0 pe-md-3 px-3"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} YourWebsite. All Rights Reserved.</p>
          </Col>
        </Row>
        </Reveal>
      </Container>
    </footer>
  );
};

export default Footer