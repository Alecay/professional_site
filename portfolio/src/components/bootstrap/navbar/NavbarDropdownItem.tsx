import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  link?: string;
}

export default function NavbarDropdownItem({ children, link }: Props) {
  return (
    <li>
      <a className="dropdown-item" href={link}>
        {children}
      </a>
    </li>
  );
}
