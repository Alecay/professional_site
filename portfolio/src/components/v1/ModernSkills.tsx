import { Col, Container, Row } from "react-bootstrap";
import styles from "./ModernSkills.module.css";
import SkillIcon from "../old/SkillIcon";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
            <SkillIcon
              icon={faCode}
              iconStyle={{ fontSize: "30px" }}
              divStyle={{ backgroundColor: "#4aaaa2ff", paddingTop: "10px" }}
            />
            <h4 className={`${styles.skillTitle}`}>Column 1</h4>
            <p className={`${styles.skillSubtitle}`}>Content for column one.</p>
            <p className={`${styles.skillAccentTitle}`}>Something labeled:</p>
          </Col>

          {/* Column 2 */}
          <Col className={`${styles.skillCol} p-4 border-end`}>
            <SkillIcon
              icon={faCode}
              iconStyle={{ fontSize: "30px" }}
              divStyle={{ backgroundColor: "#4aaaa2ff", paddingTop: "10px" }}
            />
            <h4 className={`${styles.skillTitle}`}>Column 2</h4>
            <p className={`${styles.skillSubtitle}`}>Content for column two.</p>
          </Col>

          {/* Column 3 */}
          <Col className={`${styles.skillCol} p-4`}>
            <SkillIcon
              icon={faCode}
              iconStyle={{ fontSize: "30px" }}
              divStyle={{ backgroundColor: "#4aaaa2ff", paddingTop: "10px" }}
            />
            <h4 className={`${styles.skillTitle}`}>Column 3</h4>
            <p className={`${styles.skillSubtitle}`}>
              Content for column three.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
