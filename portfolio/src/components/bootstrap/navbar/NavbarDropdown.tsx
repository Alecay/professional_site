import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  text?: string;
}

export default function NavbarDropdown({ children, text }: Props) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {text}
      </a>
      <ul className="dropdown-menu">{children}</ul>
    </li>
  );
}
