import { Navbar, Nav, Container } from "react-bootstrap";
import "./App.css";
import ProfileDiv from "./components/ProfileDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const navStyles: React.CSSProperties = {
    backgroundColor: "rgba(51, 51, 51, 1)",
    color: "white",
  };

  const linkClass = "fs-3 mx-2 text-white";

  return (
    <div style={{ backgroundColor: "gray" }}>
      <Navbar fixed="top" collapseOnSelect expand="lg" style={navStyles}>
        <Container>
          {/* Navbar Brand on the Left */}
          <Navbar.Brand href="#profile" className="fs-1 text-white">
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

      <ProfileDiv></ProfileDiv>
    </div>
  );
}
