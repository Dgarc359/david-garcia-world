import React, { ReactNode } from "react";
import { strokes } from "./strokes";
import { themes } from "./themes";

interface GlobalContextVals {
  loggedIn: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
  prefersDark: boolean;
  preferredTheme: [themes, React.Dispatch<React.SetStateAction<themes>>],
  currentPageColorway: {
    primary: [strokes, React.Dispatch<React.SetStateAction<strokes>>]
    secondary: [strokes, React.Dispatch<React.SetStateAction<strokes>>]
  }
};

export const GlobalContext = React.createContext<null | GlobalContextVals>(null);

interface Props {
  children?: ReactNode,
  isLoggedIn: boolean,
}

export const GlobalContextProvider = (props: Props) => {
  const {children, isLoggedIn} = props;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [stroke, setStroke] = prefersDark
    ? React.useState<themes>("white")
    : React.useState<themes>("black");
    
  const [loggedIn, setLoggedIn] = React.useState<boolean>(isLoggedIn);
  const [primaryColorway, setPrimaryColorway] = prefersDark 
    ? React.useState<strokes>("white")
    : React.useState<strokes>("black");

  const [secondaryColorway, setSecondaryColorway] = prefersDark
      ? React.useState<strokes>("black")
      : React.useState<strokes>("white");

  const globalContext: GlobalContextVals = {
    loggedIn: [loggedIn, setLoggedIn],
    prefersDark: prefersDark,
    preferredTheme: [stroke, setStroke],
    currentPageColorway: {
      primary: [primaryColorway, setPrimaryColorway],
      secondary: [secondaryColorway, setSecondaryColorway]
    }
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