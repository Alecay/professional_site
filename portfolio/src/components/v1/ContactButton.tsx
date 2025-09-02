import { Button } from "react-bootstrap";
import styles from "./ContactButton.module.css";

interface ContactButtonProps {
  isAlt?: boolean;
}

export default function ContactButton({ isAlt }: ContactButtonProps) {
  return (
    <Button className={isAlt ? styles.contactBtnAlt : styles.contactBtn}>
      Contact
    </Button>
  );
}
