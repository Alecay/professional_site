import { Container, Row } from "react-bootstrap";
import styles from "./ModernAbout.module.css";

export default function ModernAbout() {
  return (
    <Container className={`${styles.aboutContainer} `} fluid>
      <Row className="justify-content-center">
        <h1 className={`${styles.aboutTitle} `}>Hey there! My name is Alec.</h1>
        <h2 className={`${styles.aboutSubtitle} `}>
          I'm an undergraduate student at Texas State University pursing a
          Bachelor of Science in Computer Science expecting to graduate in
          December 2025. My interests include software design and development,
          video game design, pixel art and animation, procedural generation, and
          systems optimization.
        </h2>
      </Row>
    </Container>
  );
}
