import "./App.css";
import Column from "./components/bootstrap/Column";
import Container from "./components/bootstrap/Container";
import Row from "./components/bootstrap/Row";
import PorfolioNavbar from "./components/PortfolioNavbar";

export default function App() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <PorfolioNavbar shrinkThreshold={500} />
      <br />
      <br />
      <Container style={{ height: "200vh" }}>
        {/* <Row style={{ height: "20vh" }} className={"my-5"}>
          <Column>Header Stuff</Column>
        </Row>
        <Row style={{ height: "40vh" }} justify="between">
          <Column className={"mr-5"} width="5">
            Left Stuff
          </Column>
          <Column className={"margin-left-sm"} width="5">
            Right Stuff
          </Column>
        </Row>
        <Row style={{ height: "20vh" }} className={"mt-5"}>
          <Column>Footer Stuff</Column>
        </Row> */}
      </Container>
    </div>
  );
}
