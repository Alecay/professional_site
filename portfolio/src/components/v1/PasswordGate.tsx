// PasswordGate.tsx
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem("site-unlocked") === "true"
  );
  const [input, setInput] = useState("");

  const PASSWORD = "5708";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem("site-unlocked", "true");
      setUnlocked(true);
    } else {
      alert("Wrong password");
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        position: "fixed",
        inset: 0,
        background: "#111",
        color: "#fff",
      }}
    >
      <Row style={{ marginBottom: "200px" }}>
        <h1 style={{ textAlign: "center", fontSize: "100px" }}>
          Site is under development
        </h1>
      </Row>

      <Row className="justify-content-center">
        <Col xs="auto">
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <h2>Unlock Site</h2>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter password"
            />
            <button type="submit">Unlock</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
