import { ReactNode } from "react";
import NavbarItem from "./NavbarItem";

interface Props {
  children?: ReactNode;
  link?: string;
  active?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function NavbarLink({
  children,
  link,
  active = true,
  className,
  style,
}: Props) {
  return (
    <NavbarItem>
      <a
        style={style}
        className={
          "nav-link " + (active ? " active " : " disbaled ") + className
        }
        aria-current="page"
        href={link}
      >
        {children}
      </a>
    </NavbarItem>
  );
}
