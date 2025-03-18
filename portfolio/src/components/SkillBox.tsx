import "./SkillBox.css";
import { Col } from "react-bootstrap";
import SkillIcon from "./SkillIcon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

interface Props {
  skillName: string;
  icon: IconProp;
  children?: ReactNode;
}

export default function SkillBox({ skillName, icon, children }: Props) {
  return (
    <Col xs={12} md={6} lg={4} className="skillBox">
      <SkillIcon icon={icon} />
      <h1 className="skillTitle">{skillName}</h1>
      <div className="skillDesc">{children}</div>
    </Col>
  );
}
