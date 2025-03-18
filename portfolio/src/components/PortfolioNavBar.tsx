import NavbarLink from "./bootstrap/navbar/NavbarLink";
import ShrinkNavbar from "./ShrinkNavbar";

interface Props {
  backgroundColor?: string;
  shrinkThreshold?: number;
}

export default function PorfolioNavbar({
  backgroundColor = "rgba(51, 51, 51, 1)",
  shrinkThreshold = 90,
}: Props) {
  return (
    <ShrinkNavbar
      theme="light"
      alignItems="right"
      placement="fixed-top"
      label="Alec Groseclose"
      labelClass="fw-bold fs-1 text-white"
      labelStyle={{ paddingLeft: "15rem" }}
      backgroundColor={backgroundColor}
      shrinkThreshold={shrinkThreshold}
    >
      <NavbarLink className="fs-3 pe-5 text-white">About</NavbarLink>
      <NavbarLink className="fs-3 pe-5 text-white">Skills</NavbarLink>
      <NavbarLink className="fs-3 pe-5 text-white">Projects</NavbarLink>
      <NavbarLink className="fs-3 pe-5 text-white">Resume</NavbarLink>
      <NavbarLink className="fs-3 text-white" style={{ paddingRight: "15rem" }}>
        Contact
      </NavbarLink>
    </ShrinkNavbar>
  );
}
