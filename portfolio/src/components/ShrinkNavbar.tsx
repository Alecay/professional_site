import { ReactNode } from "react";
import React, { useState, useEffect } from "react";
import NavbarLabel from "./bootstrap/navbar/NavbarLabel";

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
  backgroundColor?: string;
  shrinkThreshold?: number;
}

export default function ShrinkNavbar({
  children,
  style,
  theme,
  alignItems,
  placement,
  label,
  labelClass,
  labelStyle,
  backgroundColor,
  shrinkThreshold = 50,
}: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > shrinkThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const backgroundStyle: React.CSSProperties = scrolled
    ? {
        backgroundColor: backgroundColor,
        transition: "background-color 0.3s ease",
      }
    : {
        backgroundColor: "rgba(0, 0, 0, 0)",
        transition: "background-color 0.3s ease",
      };

  return (
    <nav
      style={{
        ...style,
        ...backgroundStyle,
      }}
      className={"navbar navbar-expand-lg " + (placement != null && placement)}
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
