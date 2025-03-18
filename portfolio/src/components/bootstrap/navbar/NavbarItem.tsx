import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function NavbarItem({ children }: Props) {
  return <li className="nav-item">{children}</li>;
}
