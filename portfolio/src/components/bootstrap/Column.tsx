import { ReactNode } from "react";
 
interface Props {
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  width?:
    | "auto"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  align?: "start" | "center" | "end";
  order?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "last"
    | "first";
  style?: React.CSSProperties;
  className?: string;
}
export default function Column({
  children,
  size,
  width,
  align,
  order,
  style,
  className,
}: Props) {
  return (
    <div
      className={
        "col" +
        (size != null ? "-" + size : "") +
        (width != null ? "-" + width : "") +
        (align != null ? " align-self-" + align : "") +
        (order != null ? " order-" + order : "") +
        (className != null ? " " + className : "")
      }
      style={style}
    >
      {children}
    </div>
  );
}