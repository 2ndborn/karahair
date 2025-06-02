import { Navbar, Nav, Container } from "react-bootstrap";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import CustomNavbarToggle from "./CustomNavbarToggle";
import NavItem from "./NavItem";
import useFadeUp from "../hooks/useFadeUp";

const CustomNavbar = () => {
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  const isLoaded = useFadeUp(500)

  return (
    <Navbar ref={ref} expand="md" className="navbar-custom">
      <Container>
        <CustomNavbarToggle onToggle={() => setExpanded(!expanded)} />
        
        <Navbar.Collapse in={expanded} className="ms-auto" id="navbar-nav">
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
  );
};

export default CustomNavbar;