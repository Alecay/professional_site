// CustomNavbarToggle.tsx
import { Navbar } from "react-bootstrap";
import { Sling as Hamburger } from "hamburger-react";

type CustomNavbarToggleProps = {
  expanded: boolean;
  setExpanded: (open: boolean) => void;
  /** Icon color (e.g., "#4aaa53", "black", "white") */
  color?: string;
  /** Icon size in px (defaults to 24) */
  size?: number;
  /** Link the toggle to your collapse id for a11y */
  controlsId?: string;
  className?: string;
};

export default function CustomNavbarToggle({
  expanded,
  setExpanded,
  color = "currentColor",
  size = 24,
  controlsId = "navbar-nav",
  className,
}: CustomNavbarToggleProps) {
  return (
    <Navbar.Toggle
      aria-controls={controlsId}
      aria-expanded={expanded}
      onClick={() => setExpanded(!expanded)}
      className={className}
      style={{
        border: "none",
        boxShadow: "none",
        padding: 0,
        lineHeight: 0,
        display: "grid",
        placeItems: "center",
      }}
    >
      {/* We control state via the button click, so don't pass `toggle` to Hamburger */}
      <Hamburger
        toggled={expanded}
        size={size}
        color={color}
        rounded
        duration={0.2}
        label="Toggle navigation"
      />
    </Navbar.Toggle>
  );
}
