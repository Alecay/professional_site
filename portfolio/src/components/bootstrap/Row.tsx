import { ReactNode } from "react";
 
interface Props {
  children?: ReactNode;
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "around" | "between" | "evenly";
  gutters?: boolean;
  style?: React.CSSProperties;
  className?: string;
}
export default function Row({
  children,
  align,
  justify,
  gutters = true,
  style,
  className,
}: Props) {
  return (
    <div
      className={
        "row " +
        (align != null ? "align-items-" + align : "") +
        (justify != null ? " justify-content-" + justify : "") +
        (gutters ? "" : " no-gutters") +
        (className != null ? " " + className : "")
      }
      style={style}
    >
      {children}
    </div>
  );
}