import "./SkillBox.css";
import { Col } from "react-bootstrap";
import SkillIcon from "./SkillIcon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { ReactNode } from "react";

interface Props {
  skillName: string;
  icon?: IconProp;
  children?: ReactNode;
  icons?: IconProp[];
  img?: ReactNode;
  iconStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

export default function SkillBox({
  skillName,
  icon,
  children,
  icons,
  img,
  iconStyle,
  style,
}: Props) {
  return (
    <Col xs={12} md={6} lg={4} className="skillBox mx-auto" style={style}>
      <SkillIcon icon={icon} icons={icons} img={img} iconStyle={iconStyle} />
      <h1 className="skillTitle">{skillName}</h1>
      <div className="skillDesc">{children}</div>
    </Col>
  );
}
