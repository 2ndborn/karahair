import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/Footer.module.css'
import { NavLink } from "react-router-dom";
import { Reveal } from "../utils/Reveal";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className={styles.Footer}>
        <Reveal>
        <Row>
          <Col md={4} className="text-md-start px-md-5 text-center">
            <h4>Menu</h4>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="text-light text-decoration-none">Home</NavLink></li>
              <li><NavLink to="/mystory" className="text-light text-decoration-none">My Story</NavLink></li>
              <li><NavLink to="/services" className="text-light text-decoration-none">Services</NavLink></li>
              <li><NavLink to="/gallery" className="text-light text-decoration-none">Gallery</NavLink></li>
              <li><NavLink to="/contactme" className="text-light text-decoration-none">Contact Me</NavLink></li>
            </ul>
          </Col>
          <Col md={4} className="text-md-start px-md-5 text-center">
                <h4>Contact Me</h4>
                <ul className="list-unstyled">
                  <li><i className="fa-solid fa-mobile-screen-button"></i>07900 000 000</li>
                  <li><i className="fa-solid fa-envelope"></i>noemail@gmal.com</li>
                </ul>
          </Col>
          <Col md={4} className="text-md-start px-md-5 text-center">
            <h4>Follow Me</h4>
            <div className={styles.socialMedia}>
                <a href="/" className="px-2 text-light"><i className="fa-brands fa-instagram"></i></a>
                <a href="/" className="px-2 text-light"><i className="fa-brands fa-tiktok"></i></a>
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