import { ReactNode } from "react";
import NavbarLabel from "./NavbarLabel";

interface Props {
  children?: ReactNode;
  style?: React.CSSProperties;
  theme?: "light" | "dark";
  alignItems?: "left" | "right" | "center";
  placement?:
    | "fixed-top"
    | "fixed-bottom"
    | "sticky-top"
    | "sticky-bottom"
    | "default";
  label?: string;
  labelClass?: string;
  labelStyle?: React.CSSProperties;
}

export default function Navbar({
  children,
  style,
  theme,
  alignItems,
  placement,
  label,
  labelClass,
  labelStyle,
}: Props) {
  return (
    <nav
      style={style}
      className={
        "navbar navbar-expand-lg bg-body-tertiary " +
        (placement != null && placement)
      }
      data-bs-theme={theme}
    >
      <div className="container-fluid">
        <NavbarLabel style={labelStyle} className={labelClass}>
          {label}
        </NavbarLabel>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className={
              "navbar-nav mb-2 mb-lg-0 " +
              (alignItems == null || alignItems == "left"
                ? "me-auto"
                : alignItems == "right"
                ? "ms-auto"
                : "mx-auto")
            }
          >
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
}
