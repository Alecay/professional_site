import { Col, Container, Row } from "react-bootstrap";
import styles from "./ModernSkills.module.css";

export default function ModernSkills() {
  return (
    <Container fluid className={`${styles.skillsContainer}`}>
      <Container fluid className={`${styles.colorBar}`}></Container>
      {/* <Container className={`${styles.skillsPanel}`}>
        <Col className={`${styles.skillCol}`}></Col>
        <Col></Col>
        <Col></Col>
      </Container> */}

      <Container className={`${styles.skillsPanel}`}>
        <Row
          className={`${styles.skillRow} text-center border overflow-hidden`}
        >
          {/* Column 1 */}
          <Col className={`${styles.skillCol} p-4 border-end`}>
            <h4>Column 1</h4>
            <p>Content for column one.</p>
          </Col>

          {/* Column 2 */}
          <Col className={`${styles.skillCol} p-4 border-end`}>
            <h4>Column 2</h4>
            <p>Content for column two.</p>
          </Col>

          {/* Column 3 */}
          <Col className={`${styles.skillCol} p-4`}>
            <h4>Column 3</h4>
            <p>Content for column three.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
