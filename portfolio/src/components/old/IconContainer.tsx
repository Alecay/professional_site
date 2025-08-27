import styles from "./IconContainer.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp;
  href?: string;
}

export default function IconContainer({ icon, href }: Props) {
  return (
    <div className={styles.iconContainer}>
      <a href={href}>
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      </a>
    </div>
  );
}
