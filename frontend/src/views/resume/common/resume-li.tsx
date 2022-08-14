import { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export const ResumeLi = ({children}: Props) => {
  return (
    <li style={{
      color: "#1a1a1a"
    }}>
      {children}
    </li>
  );
}