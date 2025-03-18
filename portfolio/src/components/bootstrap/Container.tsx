import { ReactNode } from "react";
 
interface Props {
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

 
export default function Container({ children, style, className }: Props) {
    return (
      <div
        className={"container" + (className != null ? " " + className : "")}
        style={style}
      >
        {children}
      </div>
    );
  }