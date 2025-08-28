// CustomNavbar.tsx
import { useState } from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import CustomNavbarToggle from "./CustomNavbarToggle";
import ContactButton from "./ContactButton";
import styles from "./ContactNav.module.css";

export default function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      expand="lg"
      className={styles.navbar}
    >
      <Container>
        <Navbar.Brand className={styles.navbrand}>A</Navbar.Brand>

        <CustomNavbarToggle
          expanded={expanded}
          setExpanded={setExpanded}
          color="#4aaa53"
          size={26}
          controlsId="navbar-nav"
          className="d-lg-none"
        />

        <Navbar.Collapse id="navbar-nav" className="justify-content-lg-end">
          <Nav className="gap-3 align-items-center">
            <NavLink className={styles.navlink}>Skills</NavLink>
            <NavLink className={styles.navlink}>Projects</NavLink>
            <ContactButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
