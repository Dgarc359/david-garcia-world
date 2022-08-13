import React, { ReactNode } from "react";
import { strokes } from "./strokes";

interface GlobalContextVals {
  loggedIn: (boolean | React.Dispatch<React.SetStateAction<boolean>>)[],
  themes?: {
    light: {},
    dark: {},
  },
  currentColor?: [strokes, React.Dispatch<React.SetStateAction<strokes>>]
};

export const GlobalContext = React.createContext<null | GlobalContextVals>(null);

interface Props {
  children?: ReactNode,
  color?: strokes,
  isLoggedIn: boolean
}

export const GlobalContextProvider = ({children, isLoggedIn }: Props) => {
  // const [currentColor, setCurrentColor] = React.useState<strokes>(color);
  const [loggedIn, setLoggedIn] = React.useState<boolean>(isLoggedIn);
  const globalContext: GlobalContextVals = {
    // currentColor: [currentColor, setCurrentColor]
    loggedIn: [loggedIn, setLoggedIn]
  }
  
  return(
    <div className="full-height" id="GlobalContext">
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