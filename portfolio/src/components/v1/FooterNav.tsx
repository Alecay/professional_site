import { Container, Nav, Navbar } from "react-bootstrap";
import ContactButton from "./ContactButton";
import styles from "./FooterNav.module.css";

export default function FooterNav() {
  return (
    <Navbar
      expand="md" // <-- horizontal until "md" (≥768px), then stacks
      className={`${styles.navbar} justify-content-between flex-wrap mt-5`}
    >
      <Container className="flex-column flex-md-row align-items-center">
        <Navbar.Brand className={styles.navbrand}>A</Navbar.Brand>

        <Nav className="gap-3 align-items-center mt-3 mt-md-0">
          <Nav.Link className={styles.navlink}>Skills</Nav.Link>
          <Nav.Link className={styles.navlink}>Projects</Nav.Link>
          <ContactButton isAlt={true} />
        </Nav>
      </Container>
    </Navbar>
  );
}
