import styles from "./About.module.css";
import { Col, Container, Row } from "react-bootstrap";
import IconContainer from "./IconContainer";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <Container fluid className={styles.about} id="about">
      <Row>
        <Col lg={4} className="text-center" style={{ margin: "40px 0px" }}>
          <img
            src="/src/images/profile_image.jpg"
            alt="Avatar"
            className={styles.profileImage}
          />
          <Container>
            <IconContainer
              icon={faLinkedin}
              href="http://www.linkedin.com/in/alecrgrose"
            />

            <IconContainer icon={faGithub} href="https://github.com/Alecay" />

            <IconContainer
              icon={faEnvelope}
              href="mailto:alecrgrose@gmail.com"
            />
          </Container>
        </Col>
        <Col lg={8} xs={12} className="mx-auto" style={{ paddingLeft: "20px" }}>
          <h1>Alec Groseclose</h1>
          <h4>
            Computer Science Major, Software Developer, and Aspiring Video Game
            Developer
          </h4>

          <p>
            I'm an undergraduate student at Texas State University pursing a
            Bachelor of Science in Computer Science expecting to graduate in
            December 2025.
          </p>
          <p>
            My interests include software design and development, video game
            design, pixel art and animation, procedural generation, and systems
            optimization.
          </p>
          <br />

          <h4>Texas State University</h4>
          <ul>
            <li>Bachelor of Science in Computer Science</li>
            <li>Minor in Mathematics</li>
            <li>Expected graduation date: December 2025</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
