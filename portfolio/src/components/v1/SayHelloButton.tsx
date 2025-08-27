import { Button } from "react-bootstrap";
import styles from "./SayHelloButton.module.css";

export default function SayHelloButton() {
  return <Button className={styles.helloBtn}>Say Hello</Button>;
}
