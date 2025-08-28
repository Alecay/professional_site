import { Container, Row } from "react-bootstrap";
import styles from "./ModernProfile.module.css";

export default function ModernProfile() {
  return (
    <Container className={styles.profileContainer}>
      <Row className="justify-content-center">
        <h1 className={styles.profileTile}>
          Software Engineer & Game Developer
        </h1>
        <h2 className={styles.profileSubtitle}>
          Parallel Programming, Full-Stack Development, Procedural Generation,
          and Systems Design
        </h2>
      </Row>
      <Row className="justify-content-center">
        <img
          src="/src/images/profile_image.jpg"
          alt="Avatar"
          className={styles.profileImage}
        />
      </Row>
    </Container>
  );
}
