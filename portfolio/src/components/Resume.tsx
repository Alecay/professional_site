import "./Resume.css";
import { Container, Row } from "react-bootstrap";

export default function Resume() {
  return (
    <Container fluid className="resume" id="resume">
      <h1 className="title">Resume</h1>
      <Row>
        <Container
          className="embed-responsive"
          style={{
            margin: "30px 0px",
            position: "relative",
            width: "100%",
            paddingBottom: "112%", // This is based on a 1:1.4 aspect ratio (1 / 1.4 ≈ 0.714, and 100% * 0.714 ≈ 71.4%)
          }}
        >
          <iframe
            src="/src/docs/Resume.pdf"
            data-src="/src/docs/Resume.pdf"
            title="Resume"
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              width: "80%",
              height: "100%",
              border: "none",
            }}
            loading="eager"
          >
            <p>
              This browser does not support PDFs. Please download the PDF to
              view it:
              <a href="/src/docs/Resume.pdf">Download PDF</a>.
            </p>
          </iframe>
        </Container>
      </Row>
    </Container>
  );
}
