import React, { ReactNode } from "react";
import { strokes } from "./strokes";

interface GlobalContextVals {
  loggedIn?: boolean,
  themes?: {
    light: {},
    dark: {},
  },
  currentColor: [strokes, React.Dispatch<React.SetStateAction<strokes>>]
};

const GlobalContext = React.createContext<null | GlobalContextVals>(null);

interface Props {
  children?: ReactNode,
  color: strokes
}

export const GlobalContextProvider = ({children, color}: Props) => {
  const [currentColor, setCurrentColor] = React.useState<strokes>(color);
  const globalContext: GlobalContextVals = {
    currentColor: [currentColor, setCurrentColor]
  }
  
  return(
    <div>
      <GlobalContext.Provider
        value={
          globalContext
        }
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
}