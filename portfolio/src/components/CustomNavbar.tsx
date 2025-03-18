import "./CustomNavbar.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function CustomNavbar() {
  const linkClass = "fs-3 mx-2";

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      //   className={styles.customNavbar}
    >
      <Container>
        {/* Navbar Brand on the Left */}
        <Navbar.Brand href="#profile" className="fw-bold fs-1">
          Alec Groseclose
        </Navbar.Brand>

        {/* Toggler for Mobile View */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none", boxShadow: "none" }}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white", fontSize: "1.5rem" }}
          ></FontAwesomeIcon>
        </Navbar.Toggle>

        {/* Navbar Links on the Right */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* ms-auto pushes links to the right */}
            <Nav.Link href="#about" className={linkClass}>
              About
            </Nav.Link>

            <Nav.Link href="#skills" className={linkClass}>
              Skills
            </Nav.Link>

            <Nav.Link href="#projects" className={linkClass}>
              Projects
            </Nav.Link>

            <Nav.Link href="#Resmue" className={linkClass}>
              Resume
            </Nav.Link>

            <Nav.Link href="#Contact" className={linkClass}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
