import "./SkillIcon.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface Props {
  icon?: IconProp;
  img?: ReactNode;
}

export default function SkillIcon({ icon, img }: Props) {
  return (
    <div className="iconContainer">
      {img != null ? (
        img
      ) : icon != null ? (
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      ) : null}
    </div>
  );
}
