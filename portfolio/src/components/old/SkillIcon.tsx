import "./SkillIcon.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";

interface Props {
  icon?: IconProp;
  img?: ReactNode;
  icons?: IconProp[];
  iconStyle?: React.CSSProperties;
  divStyle?: React.CSSProperties;
}

export default function SkillIcon({
  icon,
  img,
  icons,
  iconStyle,
  divStyle,
}: Props) {
  let getIcons = (icons: IconProp[]) => {
    return (
      <div style={{ display: "inline-block" }}>
        <div style={divStyle} className="iconContainer">
          {icons.map((item) => (
            <FontAwesomeIcon icon={item} style={iconStyle}></FontAwesomeIcon>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: "inline-block" }}>
      <div className="iconContainer" style={divStyle}>
        {img != null ? (
          img
        ) : icon != null ? (
          <FontAwesomeIcon icon={icon} style={iconStyle}></FontAwesomeIcon>
        ) : icons != null ? (
          getIcons(icons)
        ) : null}
      </div>
    </div>
  );
}
