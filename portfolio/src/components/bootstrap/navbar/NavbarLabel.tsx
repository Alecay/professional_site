import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  link?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function NavbarLabel({
  children,
  link,
  className,
  style,
}: Props) {
  return (
    <a
      style={style}
      className={"navbar-brand ms-auto " + className}
      href={link}
    >
      {children}
    </a>
  );
}
