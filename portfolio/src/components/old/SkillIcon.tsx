import "./SkillIcon.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";

interface Props {
  icon?: IconProp;
  img?: ReactNode;
  icons?: IconProp[];
  iconStyle?: React.CSSProperties;
}

export default function SkillIcon({ icon, img, icons, iconStyle }: Props) {
  let getIcons = (icons: IconProp[]) => {
    return (
      <span>
        {icons.map((item) => (
          <FontAwesomeIcon icon={item} style={iconStyle}></FontAwesomeIcon>
        ))}
      </span>
    );
  };

  return (
    <div className="iconContainer">
      {img != null ? (
        img
      ) : icon != null ? (
        <FontAwesomeIcon icon={icon} style={iconStyle}></FontAwesomeIcon>
      ) : icons != null ? (
        getIcons(icons)
      ) : null}
    </div>
  );
}
