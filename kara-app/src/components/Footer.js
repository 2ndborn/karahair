import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className={styles.Footer}>
        <Row>
          <Col md={4}>
            <h5>Menu</h5>
            <ul className="list-unstyled">
              <li><a href="/projects" className="text-light">Home</a></li>
              <li><a href="/projects" className="text-light">My Story</a></li>
              <li><a href="/projects" className="text-light">Services</a></li>
              <li><a href="/projects" className="text-light">Gallery</a></li>
              <li><a href="/contact" className="text-light">Contact Me</a></li>
            </ul>
          </Col>
          <Col md={4}>
                <h5>Contact Me</h5>
                <p><i className="fa-solid fa-mobile-screen-button"></i> 07900 000 000</p>
                <p><i className="fa-solid fa-envelope"></i> noemail@gmal.com</p>
          </Col>
          <Col md={4}>
            <h5>Follow Me</h5>
            <div className={styles.socialMedia}>
                <a href="/" className="px-2"><i className="fa-brands fa-instagram"></i></a>
                <a href="/" className="px-2"><i className="fa-brands fa-tiktok"></i></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} YourWebsite. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer