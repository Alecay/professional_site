import { Container } from "react-bootstrap";

export default function Profile() {
  const profileStyles: React.CSSProperties = {
    background:
      "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/src/images/austin_night_cropped.jpg')",
    backgroundSize: "cover",
    minHeight: "1000px",
    paddingTop: "350px",
  };

  return (
    <Container fluid style={profileStyles} id="profile">
      <h1
        className="fw-bold"
        style={{ color: "white", textAlign: "center", fontSize: "4.5rem" }}
      >
        Alec Groseclose
      </h1>
      <h2 style={{ color: "white", textAlign: "center", fontSize: "2.5rem" }}>
        Computer Science Major
      </h2>
      <h2 style={{ color: "white", textAlign: "center", fontSize: "2.5rem" }}>
        Texas State University
      </h2>
      <h2 style={{ color: "white", textAlign: "center", fontSize: "2.5rem" }}>
        Austin, TX
      </h2>
    </Container>
  );
}
