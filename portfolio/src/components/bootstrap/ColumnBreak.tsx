import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
export default function ColumnBreak({ children }: Props) {
  return <div className="w-100">{children}</div>;
}
