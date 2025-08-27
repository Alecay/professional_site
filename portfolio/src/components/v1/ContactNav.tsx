import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import SayHelloButton from "./SayHelloButton";
import styles from "./ContactNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function CustomNavbar() {
  return (
    <Navbar
      className={styles.navbar}
      fixed="top"
      collapseOnSelect
      expand="lg"
      //   className={styles.customNavbar}
    >
      <Container>
        {/* Navbar Brand on the Left */}
        <Nav>
          <Navbar.Brand href="#nav-icon" className={styles.navbrand}>
            A
          </Navbar.Brand>
        </Nav>

        {/* Toggler for Mobile View */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none", boxShadow: "none" }}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#4aaa53", fontSize: "1.5rem" }}
          ></FontAwesomeIcon>
        </Navbar.Toggle>

        {/* Navbar Links on the Right */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto ms-lg-auto gap-3 align-items-center w-100">
            {/* ms-auto pushes links to the right */}
            <NavLink className={styles.navlink}>Mentorship</NavLink>
            <SayHelloButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
